import "./about.css";
import HeaderDesktop from "../Header/HeaderDesktop";
import ChatBoxFAB from "../ChatBox/ChatBoxFAB";
import reviewsBackground from "./reviewsBackground.webp";

const AboutMain = () => {
  return (
    <div>
      <HeaderDesktop />
      <div className="aboutContainer">
        <div>
          <div>
            <h1 className="aboutTitle">Dania Walesska Coaching</h1>
            <p>Choose Your Future</p>
          </div>
        </div>
        <div className="aboutMainContainer">
          <div className="aboutMainLeft">
            <div className="aboutMeBorder">
              <div className="aboutMeTitleContainer">
                <h1 className="aboutMeTitle">About Me</h1>
              </div>
              <div className="aboutHorizontalLine">
                <hr style={{ marginLeft: "1%", width: "100%" }} />
              </div>
            </div>
            <div className="aboutMeTextContainer">
              <h2>Support for the Journey</h2>
              <p>
                My goal is to help you re-imagine your life. With extensive
                experience in Life Coaching and a vast history of client
                success, my individualized positivity approach will help you
                attain your goals.{" "}
              </p>
              <h2>Professionalism and Experience</h2>
              <p>
                As a professionally trained and experienced life coach, I have
                the tools and understanding to help you to create the life you
                imagine and get a renewed sense of self.{" "}
              </p>
              <h2>Taking the Steps</h2>
              <p>
                Committing to a healthier lifestyle is just that – a commitment,
                and it’s a big one that will take a lot a dedication. My
                commitment is to provide you with accountability, understanding
                and support.
              </p>
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
        <div className="faqContainer">FAQ</div>
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
            <h1 className="reviewsTitleText">Reviews</h1>
          </div>
        </div>
        <div>Footer</div>
        <div>
          <ChatBoxFAB />
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
