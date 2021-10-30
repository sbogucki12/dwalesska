import { useState } from "react";
import "./faqMobile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const FaqMobileAccordion = (props) => {
  const faqContent = props.faqContent;

  const Accordion = ({ id, header, text }) => {
    const [showText, setShowText] = useState(false);

    return (
      <div key={id} className="accordion--background">
        {" "}
        <div
          className="accordion--faq-header"
          onClick={() => setShowText(!showText)}
        >
          <div className="accordion--faq-header-text">{header}</div>
          <div>
            {showText ? (
              <FontAwesomeIcon
                icon={faChevronUp}
                style={{ marginLeft: "2px" }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ marginLeft: "2px" }}
              />
            )}
          </div>
        </div>
        <div>
          {showText && <div className="accordion--faq-text">{text}</div>}
        </div>
        <div>
          <hr className="accordion--horizontal-line" />
        </div>
      </div>
    );
  };

  return (
    <div className="accordion">
      {faqContent.map(({ id, header, text }) => (
        <div key={id}>
          <Accordion id={id} header={header} text={text} />
        </div>
      ))}
    </div>
  );
};

export default FaqMobileAccordion;
