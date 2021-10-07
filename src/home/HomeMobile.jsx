import { useState } from "react";
import SideMenu from "../Mobile/SideMenu/SideMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
      <div className="sideMenuHeaderContainer">
        <FontAwesomeIcon
          icon={faBars}
          className="sideMenuBars"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <div>{sideMenu}</div>
      <div>Body</div>
      <div>Footer</div>
    </div>
  );
};

export default HomeMobile;
