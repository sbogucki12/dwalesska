import "./chatBox.css";
import { useLanguageContext } from "../../utils/LanguageProvider";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useCallback, useEffect, useState } from "react";
import data from "../../utils/ignoreFromGit.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ChatBoxFormContent = (props) => {
  const languageText = useLanguageContext();
  const [isCaptchaValid, setCaptchaValid] = useState(false);
  const key = data.recaptcha.key;

  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      setCaptchaValid(false);
      return;
    }

    const token = await executeRecaptcha();
    const googleUrlProd =
      "http://dwalesskaapi.azurewebsites.net/api/verify?token=";
    const googleUrlDev = "https://localhost:44308/api/verify?token=";

    const result = await fetch(`${googleUrlProd}${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        setCaptchaValid(true);

        return response;
      })
      .then((returnedResponse) => returnedResponse.json())
      .then((json) => {
        if (json.success !== true) {
          console.log("Recaptcha error: " + json["error-codes"][0]);
        }
        if (json.score >= 0.9) {
          setCaptchaValid(true);
        } else {
          setCaptchaValid(false);
          return;
        }
      })
      .catch((error) => {
        console.log(`Recaptcha error: ${error}`);
        return;
      });
  }, [executeRecaptcha]);

  //useEffect to trigger the verification as soon as the component loads
  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <div>
      <div style={{ padding: "1%" }} className="chatBoxFormCaption">
        {languageText.CHATBOXGREETING}
      </div>
      <div>
        <div className="chatBoxFormContainer">
          <input
            type="text"
            name="name"
            placeholder={languageText.NAME}
            className="chatBoxInput"
            value={props.formData.name}
            onChange={props.handleInputChange}
          />
          <input
            type="text"
            name="email"
            placeholder={languageText.EMAIL}
            className="chatBoxInput"
            value={props.formData.email}
            onChange={props.handleInputChange}
          />
          <textarea
            rows="4"
            cols="35"
            name="comment"
            placeholder={languageText.HOWCANWEHELP}
            className="chatBoxTextArea"
            value={props.formData.comment}
            onChange={props.handleInputChange}
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <center>
            <GoogleReCaptchaProvider reCaptchaKey={key}>
              {isCaptchaValid ? (
                <button
                  className="btnMain"
                  onClick={() => props.onSetFormSubmitted()}
                >
                  {props.chatboxButtonLabel}
                </button>
              ) : (
                <div>
                  <p>
                    We detect a{" "}
                    <span title="bot" alt="bot">
                      🤖
                    </span>
                  </p>
                  <p>
                    Try{" "}
                    <a
                      href="https://www.instagram.com/dwalesska_coaching/"
                      target="_blank"
                      rel="noreferrer noopener"
                      style={{ color: "red" }}
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        title="Instagram"
                        alt="Instagram"
                      />
                    </a>
                  </p>
                </div>
              )}
            </GoogleReCaptchaProvider>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxFormContent;
