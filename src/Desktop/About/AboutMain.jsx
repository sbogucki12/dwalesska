import "./about.css";
import HeaderDesktop from "../Header/HeaderDesktop";
import ChatBoxFAB from "../ChatBox/ChatBoxFAB";
import reviewsBackground from "./reviewsBackground.webp";
import { useLanguageContext } from "../../utils/LanguageProvider";
import FooterDesktop from "../Footer/FooterDesktop";

const AboutMain = () => {
  const languageText = useLanguageContext();

  return (
    <div>
      <HeaderDesktop />
      <div className="aboutContainer">        
        <div className="aboutMainContainer">
          <div className="aboutMainLeft">
            <div className="aboutMeBorder">
              <div className="aboutMeTitleContainer">
                <h1 className="aboutMeTitle">{languageText.ABOUTME}</h1>
              </div>
              <div className="aboutHorizontalLine">
                <hr style={{ marginLeft: "1%", width: "100%" }} />
              </div>
            </div>
            <div className="aboutMeTextContainer">
              <h2>{languageText.SUPPORTFORTHEJOURNEY}</h2>
              <p>{languageText.SUPPORTFORTHEJOURNEYTEXT} </p>
              <h2>{languageText.PROFESSIONALISMANDEXPERIENCE}</h2>
              <p>{languageText.PROFESSIONALISMANDEXPERIENCETEXT} </p>
              <h2>{languageText.TAKINGTHESTEPS}</h2>
              <p>{languageText.TAKINGTHESTEPSTEXT}</p>
            </div>
          </div>
          <div className="aboutMainRight">
            <div>
              <img
                src="/images/aboutMain.webp"
                title="About Dania"
                alt="About Dania"
                style={{ width: "45vw", height: "75vh" }}
              />
            </div>
          </div>
        </div>
        <div className="faqContainer">{languageText.FAQ}</div>
        <div
          title="Dania Coaching Reviews"
          alt="Dania Coaching Reviews"
          style={{
            backgroundImage: `url(${reviewsBackground})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            minHeight: "60vh",
            opacity: "0.7",
          }}
        >
          <div>
            <h1 className="reviewsTitleText">{languageText.REVIEWS}</h1>
          </div>
        </div>
        <div><FooterDesktop /></div>
        <div>
          <ChatBoxFAB />
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
