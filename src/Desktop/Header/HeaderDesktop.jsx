import "./headerDesktop.css";
import { Link } from "react-router-dom";

const HeaderDesktop = () => {
  return (
    <div className="headerDesktopContainer">
      <div className="headerLinkContainer">
        <Link to="/" className="headerLink">
          <span className="headerLink">HOME</span>
        </Link>
        <Link to="/about" className="headerLink">
          <span>ABOUT US</span>
        </Link>
        <span className="headerLink">CONTACT</span>
      </div>
      <div className="headerLanguageSliderContainer">
        <span>English</span>{" "}
        <label className="headerLanguageSwitch">
          <input type="checkbox" />
          <span className="headerLanguageSlider"></span>
        </label>{" "}
        <span>Spanish</span>
      </div>
    </div>
  );
};

export default HeaderDesktop;
