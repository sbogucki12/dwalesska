import "./headerDesktop.css";
import { Link } from "react-router-dom";
import {
  useLanguageContext,
  useLanguageUpdateContext,
} from "../../utils/LanguageProvider";

const HeaderDesktop = (props) => {
  const language = useLanguageContext();
  const toggleLanguage = useLanguageUpdateContext();

  let languageText = {
    HOME: "HOME",
    ABOUTUS: "ABOUT US",
    CONTACT: "CONTACT",
    ENGLISH: "ENGLISH",
    SPANISH: "SPANISH",
  };

  if (language === "spanish") {
    languageText = {
      HOME: "SPANISH",
      ABOUTUS: "SPANISH",
      CONTACT: "SPANISH",
      ENGLISH: "ENGLISH",
      SPANISH: "SPANISH",
    };
  }

  let checkedBool;

  if (language === "spanish") {
    checkedBool = true;
  } else if (language === "english") {
    checkedBool = false;
  }

  return (
    <div className="headerDesktopContainer">
      <div className="headerLinkContainer">
        <Link to="/" className="headerLink">
          <span className="headerLink">{languageText.HOME}</span>
        </Link>
        <Link to="/about" className="headerLink">
          <span>{languageText.ABOUTUS}</span>
        </Link>
        <span className="headerLink">{languageText.CONTACT}</span>
      </div>
      <div className="headerLanguageSliderContainer">
        <span>{languageText.ENGLISH}</span>{" "}
        <label className="headerLanguageSwitch">
          <input
            type="checkbox"
            checked={checkedBool}
            onChange={(e) => toggleLanguage(e)}
          />
          <span className="headerLanguageSlider"></span>
        </label>{" "}
        <span>{languageText.SPANISH}</span>
      </div>
    </div>
  );
};

export default HeaderDesktop;
