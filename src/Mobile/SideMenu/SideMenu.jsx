import "./sidemenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLanguageContext } from "../../utils/LanguageProvider";

const SideMenu = (props) => {
  const languageText = useLanguageContext();

  return (
    <div className="sideMenuContainer">
      <div className="sideMenuExitBtnContainer">
        <FontAwesomeIcon
          icon={faTimes}
          className="sideMenuExit"
          onClick={() => props.setShowMenu()}
        />
      </div>
      <div className="sideMenuLinkContainer">
        <div>
          <h4>{languageText.HOME}</h4>
          <hr />
        </div>
        <div>
          <h4>{languageText.ABOUTUS}</h4>
          <hr />
        </div>
        <div>
          <h4>{languageText.CONTACT}</h4>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
