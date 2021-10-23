import "./faqMobile.css";
import { useState } from "react";

const FaqMobileDrawers = (props) => {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const faqsContent = props.faqsContent;

  let drawer = null;
  let caret = "V";
  let faqMobileHeaderTextActive = null;
  let faqMobileHeaderContainerActive = null;

  if (drawerToggle === true) {
    drawer = (
      <div>
        <div className="faqMobileDrawerText">
          {faqsContent[0].faqMobileDrawerText}
        </div>
        <hr className="faqDrawerHr" />
      </div>
    );
    caret = "^";
    faqMobileHeaderTextActive = "faqMobileHeaderTextActive";
    faqMobileHeaderContainerActive = "faqMobileHeaderContainerActive";
  }

  const faqMobileDrawerHeaders = faqsContent.map((faqContent) => (
    <div
      onClick={() => setDrawerToggle(!drawerToggle)}
      className={`faqMobileHeaderContainer ${faqMobileHeaderContainerActive}`}
      key={faqContent.id}
    >
      <div className={`faqMobileHeaderText ${faqMobileHeaderTextActive}`}>
        {faqContent.faqMobileDrawerHeader}
      </div>
      <div>{caret}</div>
    </div>
  ));

  return (
    <div className="faqMobileDrawerContainer">
      {faqMobileDrawerHeaders}
      <div>{drawer}</div>
    </div>
  );
};

export default FaqMobileDrawers;
