import "./servicesMobile.css";
import { useLanguageContext } from "../../utils/LanguageProvider";
import servicesContentEnglish from "../../Desktop/ServicesMain/servicesContent.json";
import servicesContentSpanish from "../../Desktop/ServicesMain/servicesContentSpanish.json";
import languageTextEnglish from "../../utils/languageTextEn.json";
import languageTextSpanish from "../../utils/languageTextSpanish.json";

const ServicesMobile = () => {
  const languageText = useLanguageContext();

  let servicesContent = servicesContentEnglish;

  if (languageText === languageTextEnglish) {
    servicesContent = servicesContentEnglish;
  } else if (languageText === languageTextSpanish) {
    servicesContent = servicesContentSpanish;
  }

  const serviceItems = servicesContent.map((service) => (
    <div className="servicesContentContainer">
      <div>
        <span style={{ fontSize: "1.5rem" }}>{service.servicesHeader}</span>
      </div>
      <div>
        <p>{service.servicesText}</p>
      </div>
      <div className="servicesMobileBtnContainer">
        <button className="btnMain">{service.servicesButtonText}</button>
      </div>
    </div>
  ));

  return (
    <div className="servicesMobileContainer">
      <div className="servicesMobileHeaderContainer">
        <div className="servicesMobileHRContainer">
          <hr />
        </div>
        <span className="servicesMobileHeaderTextContainer">
          {languageText.SERVICES}
        </span>
        <div className="servicesMobileHRContainer">
          <hr />
        </div>
      </div>
      <div className="servicesMobileTableContainer">{serviceItems}</div>
    </div>
  );
};

export default ServicesMobile;
