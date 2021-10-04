import "./contact.css";
import Header from '../Header/HeaderDesktop';
import { useLanguageContext } from "../../utils/LanguageProvider";

const ContactMain = () => {
  const languageText = useLanguageContext();

  return (
    <div>
      <div><Header /></div>
      <div></div>
      <h1>{languageText.CONTACTTITLE}</h1>
    </div>
  );
};

export default ContactMain;
