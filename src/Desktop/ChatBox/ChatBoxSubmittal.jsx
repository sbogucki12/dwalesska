import "./chatBox.css";
import { useLanguageContext } from '../../utils/LanguageProvider';

const ChatBoxSubmittal = () => {
  const languageText = useLanguageContext();

  return (
    <div className="chatboxSubmittalContainer">
      <h1 style={{ textAlign: "center" }}>
        {languageText.THANKYOUFORCONTACTING}<span className="chatBoxDania">Dania</span>
      </h1>
      <h4>{languageText.WEWILLRESPONDSHORTLY}</h4>
    </div>
  );
};

export default ChatBoxSubmittal;
