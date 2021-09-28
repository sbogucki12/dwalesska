import "./chatBox.css";
import { useLanguageContext } from "../../utils/LanguageProvider";

const ChatBoxFormContent = (props) => {
  const languageText = useLanguageContext();

  return (
    <div>
      <div style={{ padding: "1%" }} className="chatBoxFormCaption">
        {languageText.CHATBOXGREETING}
      </div>
      <div>
        <div className="chatBoxFormContainer">
          <input type="text" placeholder={languageText.NAME} className="chatBoxInput" />
          <input type="text" placeholder={languageText.EMAIL} className="chatBoxInput" />
          <textarea
            rows="4"
            cols="35"
            placeholder={languageText.HOWCANWEHELP}
            className="chatBoxTextArea"
          />
        </div>
        <div style={{ marginTop: "5px" }}>
          <center>
            <button
              className="btnMain"
              onClick={() => props.onSetFormSubmitted()}
            >
              {props.chatboxButtonLabel}
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxFormContent;
