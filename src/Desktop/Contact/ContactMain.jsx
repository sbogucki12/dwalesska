import "./contact.css";
import Header from "../Header/HeaderDesktop";
import { useLanguageContext } from "../../utils/LanguageProvider";
import ChatBoxFAB from "../ChatBox/ChatBoxFAB";

const ContactMain = () => {
  const languageText = useLanguageContext();

  return (
    <div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <hr />
        </div>
        <div className="contactMainBoxContainer">
          <div className="contactMainLeftBoxContainer">
            <div>START LIVING TODAY!</div>
            <div>
              I am here for you! If you have any questions or just want to
              connect, send me a message or a WhatsApp.
            </div>
            <div><a href="https://wa.me/16194513241?text=Hello%20from%20SteveBo">WHATSAPP</a></div>
            <div>Message Me</div>
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
        <div>Footer</div>
      </div>
      <ChatBoxFAB />
    </div>
  );
};

export default ContactMain;
