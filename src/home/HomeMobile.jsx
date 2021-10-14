import { useState } from "react";
import SideMenu from "../Mobile/SideMenu/SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LanguageToggle from "../utils/LanguageToggle";
import TitleMobile from "../Mobile/TitleMobile/TitleMobile";
import FooterDesktop from "../Desktop/Footer/FooterDesktop";
import BodyMobile from "../Mobile/BodyMobile/BodyMobile";
//import ChatBoxFAB from "../Desktop/ChatBox/ChatBoxFAB";

const HomeMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  let sideMenu = null;

  if (showMenu === true) {
    sideMenu = <SideMenu setShowMenu={setShowMenu} />;
  } else if (showMenu === false) {
    sideMenu = null;
  }

  return (
    <div>
      <div>
        <LanguageToggle />
      </div>
      <div className="sideMenuHeaderContainer">
        <FontAwesomeIcon
          icon={faBars}
          className="sideMenuBars"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <div>{sideMenu}</div>
      <div>
        <TitleMobile />
      </div>
      <div>
        <BodyMobile />
      </div>
      <div>
        <FooterDesktop />{" "}
      </div>
     {/*  <div>
        <ChatBoxFAB />
      </div> */}
    </div>
  );
};

export default HomeMobile;
