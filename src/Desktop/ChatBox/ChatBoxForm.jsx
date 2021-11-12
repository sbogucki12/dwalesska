import "./chatBox.css";
import { useState } from "react";
import ChatBoxFormContent from "./ChatBoxFormContent";
import ChatBoxSubmittal from "./ChatBoxSubmittal";
import { useLanguageContext } from "../../utils/LanguageProvider";
import sendContactData from "./sendContactData";

const ChatBoxForm = (props) => {
  const languageText = useLanguageContext();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const [chatboxButtonLabel, setChatboxButtonLabel] = useState(
    languageText.SEND
  );

  const handleInputChange = (event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  async function onSetFormSubmitted() {
    setChatboxButtonLabel(languageText.SENDING);
    const result = await sendContactData(
      formData.name,
      formData.email,
      formData.comment
    );
    setFormSubmitted(true);
    return result;
  }

  //TODO: Add form validation
  //TODO: Captcha must work from every page (store success in context)
  //TODO: Add character countdown in comment field
  return (
    <div className="chatBoxContainer">
      <div className="chatBoxHeaderContainer">
        <span
          style={{ paddingLeft: "5%", fontSize: "1.4rem", marginTop: "5%" }}
        >
          {languageText.DANIAWALESSKACOACHING.toUpperCase()}
        </span>{" "}
      </div>
      <div className="chatBoxMainPaper">
        {formSubmitted ? (
          <ChatBoxSubmittal />
        ) : (
          <ChatBoxFormContent
            onSetFormSubmitted={onSetFormSubmitted}
            chatboxButtonLabel={chatboxButtonLabel}
            formData={formData}
            handleInputChange={handleInputChange}
          />
        )}
        <div className="chatBoxFormCaptchaWarningContainer">
          <p>{languageText.PROTECTEDBYCAPTCHA}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxForm;
