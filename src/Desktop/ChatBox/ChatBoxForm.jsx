import "./chatBox.css";
import { useState } from "react";
import ChatBoxFormContent from "./ChatBoxFormContent";
import ChatBoxSubmittal from "./ChatBoxSubmittal";

const ChatBoxForm = (props) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [chatboxButtonLabel, setChatboxButtonLabel] = useState("SEND");

  const onSetFormSubmitted = () => {
    setChatboxButtonLabel("Sending...");
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
          DANIA WALESSKA COACHING
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
          <p>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxForm;
