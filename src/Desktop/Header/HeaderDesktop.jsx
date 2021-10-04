import "./headerDesktop.css";
import { Link } from "react-router-dom";
import {
  useLanguageContext,
  useLanguageUpdateContext,
} from "../../utils/LanguageProvider";
import languageTextEnglish from "../../utils/languageTextEn.json";
import languageTextSpanish from "../../utils/languageTextSpanish.json";
import TitleDesktop from "../Title/TitleDesktop";

const HeaderDesktop = (props) => {
  const languageText = useLanguageContext();
  const toggleLanguage = useLanguageUpdateContext();

  let toggleBool;

  if (languageText === languageTextEnglish) {
    toggleBool = false;
  } else if (languageText === languageTextSpanish) {
    toggleBool = true;
  }

  return (
    <div className="headerDesktopContainer">
      <div className="headerContactBarContainer headerDesktopSticky">
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
              checked={toggleBool}
              type="checkbox"
              onChange={(e) => toggleLanguage(e)}
            />
            <span className="headerLanguageSlider"></span>
          </label>{" "}
          <span>{languageText.SPANISH}</span>
        </div>
      </div>
      <div className="headerTitleContainer">
      <TitleDesktop />
      </div>      
    </div>
  );
};

export default HeaderDesktop;
