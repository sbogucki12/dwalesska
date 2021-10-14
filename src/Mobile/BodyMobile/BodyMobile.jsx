import "./bodyMobile.css";
import { useLanguageContext } from "../../utils/LanguageProvider";
import { Link } from "react-router-dom";
import ServicesMobile from "../ServicesMobile/ServicesMobile";
import SubscribeMobile from "../SubscribeMobile/SubscribeMobile";

const BodyMobile = () => {
  const languageText = useLanguageContext();

  return (
    <div className="bodyMobileContainer">
      <div>
        <img
          src="/images/dania_mainMobile.jpg"
          title={languageText.DANIAWALESSKACOACHING}
          alt={languageText.DANIAWALESSKACOACHING}
        />
      </div>
      <div>{languageText.MAKEAMAPTOYOURDREAMS}</div>
      <div>
        <Link to="/contact">
          <button className="btnMain">{languageText.CONTACTME}</button>
        </Link>
      </div>
      <div>
        <ServicesMobile />
      </div>
      <div>
        <SubscribeMobile />
      </div>
    </div>
  );
};

export default BodyMobile;
