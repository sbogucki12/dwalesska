import ServicesCell from "./ServicesCell";
import servicesContentEnglish from "./servicesContent.json";
import servicesContentSpanish from "./servicesContentSpanish.json";
import "./servicesMain.css";
import { useLanguageContext } from "../../utils/LanguageProvider";
import languageTextEnglish from "../../utils/languageTextEn.json";
import languageTextSpanish from "../../utils/languageTextSpanish.json";

const ServicesMainDesktop = () => {
  const languageText = useLanguageContext();

  let servicesContent = servicesContentEnglish;

  if (languageText === languageTextEnglish) {
    servicesContent = servicesContentEnglish;
  } else if (languageText === languageTextSpanish) {
    servicesContent = servicesContentSpanish;
  }

  return (
    <div>
      <div>
        <div className="servicesMainLineContainer">
          <div className="servicesMainLine">{` `}</div>
          <div className="servicesLineText">{languageText.SERVICES}</div>
          <div className="servicesMainLine">{` `}</div>
        </div>
      </div>
      <div className="servicesMainCellsContainer">
        <div className="sevicesMainCell">
          <ServicesCell servicesContent={servicesContent[0]} />
        </div>
        <div className="serviceMainMiddleCellContainer sevicesMainCell">
          <ServicesCell servicesContent={servicesContent[1]} />
        </div>
        <div className="sevicesMainCell">
          <ServicesCell servicesContent={servicesContent[2]} />
        </div>
      </div>
    </div>
  );
};

export default ServicesMainDesktop;
