import { useState } from "react";
import AboutMainDesktop from "../Desktop/About/AboutMainDesktop";
import AboutMainMobile from "../Mobile/AboutMobile/AboutMainMobile";

const Contact = (props) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  window.onresize = function () {
    setInnerWidth(window.innerWidth);
  };

  return (
    <div>{innerWidth > 450 ? <AboutMainDesktop /> : <AboutMainMobile />}</div>
  );
};

export default Contact;
