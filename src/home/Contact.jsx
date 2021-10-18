import { useState } from "react";
import ContactMainDesktop from "../Desktop/Contact/ContactMainDesktop";
import ContactMainMobile from "../Mobile/ContactMobile/ContactMainMobile";

const Contact = (props) => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  window.onresize = function () {
    setInnerWidth(window.innerWidth);
  };

  return (
    <div>
      {innerWidth > 450 ? <ContactMainDesktop /> : <ContactMainMobile />}
    </div>
  );
};

export default Contact;
