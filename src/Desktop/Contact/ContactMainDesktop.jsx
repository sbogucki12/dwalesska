import "./contact.css";
import Header from "../Header/HeaderDesktop";
import { useLanguageContext } from "../../utils/LanguageProvider";
import ChatBoxFAB from "../ChatBox/ChatBoxFAB";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import FooterDesktop from "../Footer/FooterDesktop";

const ContactMainDesktop = () => {
  const languageText = useLanguageContext();

  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div className="contactTitleContainer">
          <div className="contactTitleLine">
            <hr />
          </div>
          <span className="contactTitleText">
            {languageText.CONTACTMELOWERCASE}
          </span>
          <div className="contactTitleLine">
            <hr />
          </div>
        </div>
        <div className="contactMainBoxContainer">
          <div className="contactMainLeftBoxContainer">
            <div>
              <h4>{languageText.STARTLIVINGTODAY}</h4>
            </div>
            <div>
              <p className="contactText">{languageText.CONTACTTEXT}</p>
            </div>
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
              <button className="btnMain">{languageText.MESSAGEME}</button>
            </div>
          </div>
          <div>
            <div>
              <img
                src="/images/dania_walesska_logo.jpg"
                title="Dania Walesska Logo"
                alt="Dania Walesska Logo"
              />
            </div>
          </div>
        </div>
        <div>
          <FooterDesktop />
        </div>
      </div>
      <ChatBoxFAB />
    </div>
  );
};

export default ContactMainDesktop;
