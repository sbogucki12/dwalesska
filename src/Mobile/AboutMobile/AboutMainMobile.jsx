import "./aboutMobile.css";
import LanguageToggle from "../../utils/LanguageToggle";
import TitleMobile from "../TitleMobile/TitleMobile";
import { useState } from "react";
import SideMenu from "../SideMenu/SideMenu";
import { useLanguageContext } from "../../utils/LanguageProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import aboutImage from "./aboutMain_mobile.jpg";
import FooterDesktop from "../../Desktop/Footer/FooterDesktop";
import FaqMobileMain from "../FaqMobile/FaqMobileMain";

const AboutMainMobile = () => {
  const [showMenu, setShowMenu] = useState(false);

  let sideMenu = null;

  if (showMenu === true) {
    sideMenu = <SideMenu setShowMenu={setShowMenu} />;
  } else if (showMenu === false) {
    sideMenu = null;
  }
  const languageText = useLanguageContext();
  return (
    <div>
      <header>
        <div className="mobileLanguageToggleSticky">
          <LanguageToggle />
        </div>
        <nav className="mobileNavMenuSticky">
          {" "}
          <div className="sideMenuHeaderContainer">
            <FontAwesomeIcon
              icon={faBars}
              className="sideMenuBars"
              onClick={() => setShowMenu(!showMenu)}
            />
          </div>
          <div>{sideMenu}</div>
        </nav>
        <div>
          <TitleMobile />
        </div>
      </header>
      <main className="aboutMobileMainContainer">
        <div>
          <img
            src={aboutImage}
            title={languageText.ABOUTUS}
            alt={languageText.ABOUTUS}
            style={{ maxWidth: "95vw" }}
          />
        </div>
        <div className="aboutMobileTitleContainer">
          <div className="aboutMobileTitleBorder">
            <hr />
          </div>
          <div className="contactMobileTitle">{languageText.ABOUTME}</div>
          <div className="aboutMobileTitleBorder">
            <hr />
          </div>
        </div>
        <div>
          <h4>{languageText.SUPPORTFORTHEJOURNEY}</h4>
          <p>{languageText.SUPPORTFORTHEJOURNEYTEXT}</p>
          <h4>{languageText.PROFESSIONALISMANDEXPERIENCE}</h4>
          <p>{languageText.PROFESSIONALISMANDEXPERIENCETEXT}</p>
          <h4>{languageText.TAKINGTHESTEPS}</h4>
          <p>{languageText.TAKINGTHESTEPSTEXT}</p>
        </div>
      </main>
      <section>
        <FaqMobileMain />
      </section>
      <div>
        <FooterDesktop />
      </div>
    </div>
  );
};

export default AboutMainMobile;
