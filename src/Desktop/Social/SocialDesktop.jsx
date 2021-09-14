import "../ServicesMain/servicesMain.css";
import "./socialDesktop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const SocialDesktop = () => {
  return (
    <div className="socialDesktopContainer">
      <div className="servicesMainLineContainer">
        <div className="servicesMainLine">{` `}</div>
        <div className="servicesLineText">Social</div>
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
