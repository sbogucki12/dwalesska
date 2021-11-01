import "./chatBox.css";
import { useLanguageContext } from "../../utils/LanguageProvider";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useCallback, useEffect, useState } from "react";
import data from "../../utils/ignoreFromGit.json";

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
    console.log(token.length)
    if(token.length > 400){
      setCaptchaValid(true);
      return;
    }
   
  }, [executeRecaptcha]);

  // You can use useEffect to trigger the verification as soon as the component being loaded
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
            placeholder={languageText.NAME}
            className="chatBoxInput"
          />
          <input
            type="text"
            placeholder={languageText.EMAIL}
            className="chatBoxInput"
          />
          <textarea
            rows="4"
            cols="35"
            placeholder={languageText.HOWCANWEHELP}
            className="chatBoxTextArea"
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
                <div>Verify Recaptcha</div>
              )}
            </GoogleReCaptchaProvider>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxFormContent;
