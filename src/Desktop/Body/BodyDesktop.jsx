import "./bodyDesktop.css";
import { useLanguageContext } from "../../utils/LanguageProvider";

const BodyDesktop = () => {
  const languageText = useLanguageContext();

  return (
    <div className="bodyDesktopContainer">
      <img
        src="/images/dania_main.jpg"
        title="Dania Walesska Coaching"
        alt="Dania Walesska Coaching"
      />
      <p>{languageText.MAKEAMAPTOYOURDREAMS}</p>
      <button className="btnMain">{languageText.CONTACTME}</button>
    </div>
  );
};

export default BodyDesktop;
