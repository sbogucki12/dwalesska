import "./chatBox.css";
import { useState } from "react";
import ChatBoxFormContent from "./ChatBoxFormContent";
import ChatBoxSubmittal from "./ChatBoxSubmittal";
import { useLanguageContext } from "../../utils/LanguageProvider";

const ChatBoxForm = (props) => {
  const languageText = useLanguageContext();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [chatboxButtonLabel, setChatboxButtonLabel] = useState(
    languageText.SEND
  );

  const onSetFormSubmitted = () => {
    setChatboxButtonLabel(languageText.SENDING);
    setTimeout(() => {
      setFormSubmitted(true);
    }, 2000);
  };

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
