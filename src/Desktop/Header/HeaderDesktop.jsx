import "./headerDesktop.css";
import { Link } from 'react-router-dom';

const HeaderDesktop = () => {
  return (
    <div className="headerDesktopContainer">
      <Link to="/" className="headerLink"><span className="headerLink">HOME</span></Link>
      <Link to="/about" className="headerLink"><span>ABOUT US</span></Link>
      <span className="headerLink">CONTACT</span>
    </div>
  );
};

export default HeaderDesktop;
