import ServicesCell from "./ServicesCell";
import servicesContent from "./servicesContent.json";
import "./servicesMain.css";
import { useLanguageContext } from '../../utils/LanguageProvider';

const ServicesMainDesktop = () => {
  const languageText = useLanguageContext(); 

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
