import "./sidemenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useLanguageContext } from "../../utils/LanguageProvider";
import { Link } from "react-router-dom";

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
          <Link to="/">
            <h4 style={{ color: "white" }}>{languageText.HOME}</h4>
          </Link>
          <hr />
        </div>
        <div>
          <h4 style={{ color: "white" }}>{languageText.ABOUTUS}</h4>
          <hr />
        </div>
        <div>
          <Link to="/contact">
            <h4 style={{ color: "white" }}>{languageText.CONTACT}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
