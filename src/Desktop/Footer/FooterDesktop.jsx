import { useLanguageContext } from "../../utils/LanguageProvider";

const FooterDesktop = () => {
  const languageText = useLanguageContext();
  return (
    <div style={{ textAlign: "center" }}>
      <h4>{languageText.COPYRIGHT}</h4>
    </div>
  );
};

export default FooterDesktop;
