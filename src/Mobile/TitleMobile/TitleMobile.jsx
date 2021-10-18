import "./titlemobile.css";
import { useLanguageContext } from "../../utils/LanguageProvider";

const TitleMobile = () => {
  const languageText = useLanguageContext();

  return (
    <div style={{ marginTop: "15%" }}>
      <div className="titleMobileContainer">
        <div className="titleMobile">
          <h1 className="titleMobileText">
            {languageText.DANIAWALESSKACOACHING}
          </h1>
          <h4 className="titleMobileSubtitle">
            {languageText.CHOOSEYOURFUTURE}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default TitleMobile;
