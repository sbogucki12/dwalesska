import "./bodyDesktop.css";
import { useLanguageContext } from "../../utils/LanguageProvider";
import { Link } from "react-router-dom";

const BodyDesktop = () => {
  const languageText = useLanguageContext();

  return (
    <div className="bodyDesktopContainer">
      <img
        src="/images/dania_main.jpg"
        title={languageText.DANIAWALESSKACOACHING}
        alt={languageText.DANIAWALESSKACOACHING}
      />
      <p>{languageText.MAKEAMAPTOYOURDREAMS}</p>
      <Link to="/contact"><button className="btnMain">{languageText.CONTACTME}</button></Link>
    </div>
  );
};

export default BodyDesktop;
