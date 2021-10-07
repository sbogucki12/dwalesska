import "./sidemenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SideMenu = (props) => {

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
          <h4>HOME</h4>
          <hr />
        </div>
        <div>
          <h4>ABOUT US</h4>
          <hr />
        </div>
        <div>
          <h4>CONTACT</h4>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
