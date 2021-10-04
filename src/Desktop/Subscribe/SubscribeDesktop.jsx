import "./subscribeDesktop.css";
import { useLanguageContext } from "../../utils/LanguageProvider";

const SubscribeDesktop = () => {
  const languageText = useLanguageContext();

  return (
    <div
      className="subscribeDesktopContainer"
      style={{
        backgroundImage: "url(/images/tempSubscribeBackground.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>{languageText.SUBSCRIBE}</h1>
      <div>
        <p>{languageText.SUBSCRIPTIONSALE}</p>
        <div className="subscribeDesktopInputContainer">
          <input type="text" placeholder={languageText.EMAILADDRESS} />
          <button className="btnMain">{languageText.SIGNUP}</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeDesktop;
