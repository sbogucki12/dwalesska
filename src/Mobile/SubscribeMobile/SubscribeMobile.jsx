import "./subscribeMobile.css";
import { useLanguageContext } from "../../utils/LanguageProvider";

const SubscribeMobile = () => {
  const languageText = useLanguageContext();

  return (
    <div className="subscribeMobileContainer">
      <div className="subscribeMobileContentContainer">
        <div className="subscribeMobileHeaderText">
          {languageText.SUBSCRIBELOWER}
        </div>
        <div className="subscribeMobileText">
          {languageText.SUBSCRIPTIONSALE}
        </div>
        <div>
          <input
            type="text"
            placeholder={languageText.EMAILADDRESS}
            className="subscribeMobileInput"
            aria-multiline="false"
          />
        </div>
        <div>
          <button className="subscribeMobileBtn">{languageText.SIGNUP}</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeMobile;
