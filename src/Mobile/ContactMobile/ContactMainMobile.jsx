import "./contactMobile.css";
import LanguageToggle from "../../utils/LanguageToggle";
import { useLanguageContext } from "../../utils/LanguageProvider";
import TitleMobile from "../TitleMobile/TitleMobile";
import FooterDesktop from "../../Desktop/Footer/FooterDesktop";
import SideMenu from "../SideMenu/SideMenu";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import contactMobileLogo from "./contactMobileLogo.jpg";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const ContactMainMobile = (props) => {
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
      <main className="contactMobileBodyContainer">
        <div className="contactMobileTitleContainer">
          <div className="contactMobileTitleBorder">
            <hr />
          </div>
          <div className="contactMobileTitle">
            {languageText.CONTACTMELOWERCASE}
          </div>
          <div className="contactMobileTitleBorder">
            <hr />
          </div>
        </div>
        <div>
          <img
            src={contactMobileLogo}
            title={languageText.DANIAWALESSKACOACHING}
            alt={languageText.DANIAWALESSKACOACHING}
          />
        </div>
        <div>
          <h2>{languageText.STARTLIVINGTODAY}</h2>
          <p>{languageText.CONTACTTEXT}</p>
          <div>
            <div>
              <a
                href="https://wa.me/16194513241?text=Hello%20from%20SteveBo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="whatsappBtnContainer">
                  <span>
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="whatsappIcon"
                    />
                  </span>
                  <span className="sendMeAWhatsappText">
                    {languageText.SENDMEAWHATSAPP}
                  </span>
                </button>
              </a>
            </div>
            <div>
              <button className="btnMain messageMeBtn">
                {languageText.MESSAGEME}
              </button>
            </div>
          </div>
        </div>
      </main>
      <div>
        <FooterDesktop />
      </div>
    </div>
  );
};

export default ContactMainMobile;
