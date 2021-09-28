import "../ServicesMain/servicesMain.css";
import "./socialDesktop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useLanguageContext } from "../../utils/LanguageProvider";

const SocialDesktop = () => {
  const languageText = useLanguageContext();

  return (
    <div className="socialDesktopContainer">
      <div className="servicesMainLineContainer">
        <div className="servicesMainLine">{` `}</div>
        <div className="servicesLineText">{languageText.SOCIAL}</div>
        <div className="servicesMainLine">{` `}</div>
      </div>
      <div className="socialIconContainer">
        <div className="socialIconFABContainer">
          <div>
            <FontAwesomeIcon icon={faInstagram} className="socialIcon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDesktop;
