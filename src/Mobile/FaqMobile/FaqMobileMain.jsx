import "./faqMobile.css";
import FaqMobileDrawers from "./FaqMobileDrawers";

const faqsContent = [
  {
    id: 0,
    faqMobileDrawerHeader: "Header 0",
    faqMobileDrawerText: "Drawer Text 0",
  },
  {
    id: 1,
    faqMobileDrawerHeader: "Header 1",
    faqMobileDrawerText: "Drawer Text 1",
  },
  {
    id: 2,
    faqMobileDrawerHeader: "Header 2",
    faqMobileDrawerText: "Drawer Text 2",
  },
];

const FaqMobileMain = () => {
  return (
    <div>
      <div>
        <div>
          <hr />
        </div>{" "}
        <div>Frequently Asked Questions</div>
        <div>
          <hr />
        </div>
      </div>
      <div>
        <div>
          <p>
            Please contact us if you cannot find an answer to your question.
          </p>
        </div>
      </div>
      <div>
        <FaqMobileDrawers faqsContent={faqsContent} />
      </div>
    </div>
  );
};

export default FaqMobileMain;
