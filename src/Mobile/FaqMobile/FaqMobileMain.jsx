import "./faqMobile.css";
import FaqMobileAccordion from "./FaqMobileAccordion";
import { useLanguageContext } from "../../utils/LanguageProvider";

const FaqMobileMain = () => {
  const languageText = useLanguageContext();

  const faqContent = [
    {
      id: 0,
      header: languageText.FAQ0HEADER,
      text: languageText.FAQ0TEXT,
    },
    {
      id: 1,
      header: languageText.FAQ1HEADER,
      text: languageText.FAQ0TEXT,
    },
    {
      id: 2,
      header: languageText.FAQ2HEADER,
      text: languageText.FAQ0TEXT,
    },
  ];

  return (
    <div>
      <div>
        <div>
          <hr />
        </div>{" "}
        <div>{languageText.FREQUENTLYASKEDQUESTIONS}</div>
        <div>
          <hr />
        </div>
      </div>
      <div>
        <div>
          <div>{languageText.FAQHEADERCAPTION}</div>
        </div>
      </div>
      <div>
        <FaqMobileAccordion faqContent={faqContent} />
      </div>
    </div>
  );
};

export default FaqMobileMain;
