import "./headerDesktop.css";
import { Link } from "react-router-dom";
import { useLanguageContext } from "../../utils/LanguageProvider";
import TitleDesktop from "../Title/TitleDesktop";
import LanguageToggle from "../../utils/LanguageToggle";

const HeaderDesktop = (props) => {
  const languageText = useLanguageContext();

  return (
    <div className="headerDesktopContainer">
      <div className="headerContactBarContainer headerDesktopSticky">
        <div className="headerLinkContainer">
          <Link to="/" className="headerLink">
            <span className="headerLink">{languageText.HOME}</span>
          </Link>
          <Link to="/about" className="headerLink">
            <span>{languageText.ABOUTUS}</span>
          </Link>
          <Link to="/contact" className="headerLink">
            <span>{languageText.CONTACT}</span>
          </Link>
        </div>
        <LanguageToggle />
      </div>
      <div className="headerTitleContainer">
        <TitleDesktop />
      </div>
    </div>
  );
};

export default HeaderDesktop;
