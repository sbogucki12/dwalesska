import {
  useLanguageContext,
  useLanguageUpdateContext,
} from "../utils/LanguageProvider";
import languageTextEnglish from "../utils/languageTextEn.json";
import languageTextSpanish from "../utils/languageTextSpanish.json";

const LanguageToggle = () => {
  const languageText = useLanguageContext();
  const toggleLanguage = useLanguageUpdateContext();

  let toggleBool;

  if (languageText === languageTextEnglish) {
    toggleBool = false;
  } else if (languageText === languageTextSpanish) {
    toggleBool = true;
  }
  return (
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
  );
};
export default LanguageToggle;
