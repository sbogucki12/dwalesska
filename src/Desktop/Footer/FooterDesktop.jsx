import { useLanguageContext } from "../../utils/LanguageProvider";

const FooterDesktop = () => {
  const languageText = useLanguageContext();
  return (
    <footer>
      <div style={{ textAlign: "center" }}>
        <h4>{languageText.COPYRIGHT}</h4>
      </div>
    </footer>
  );
};

export default FooterDesktop;
