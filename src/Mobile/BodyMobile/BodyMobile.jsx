import "./bodyMobile.css";
import { useLanguageContext } from "../../utils/LanguageProvider";

const BodyMobile = () => {
  const languageText = useLanguageContext();

  return (
    <div className="bodyMobileContainer">
      <img
        src="/images/dania_mainMobile.jpg"
        title={languageText.DANIAWALESSKACOACHING}
        alt={languageText.DANIAWALESSKACOACHING}
      />
    </div>
  );
};

export default BodyMobile;
