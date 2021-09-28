import { useLanguageContext } from "../../utils/LanguageProvider";

const ServicesSecondaryDesktop = () => {
  const languageText = useLanguageContext();

  return (
    <div>
      <h1>{languageText.NEWSERVICESARECOMINGSOON}</h1>
    </div>
  );
};

export default ServicesSecondaryDesktop;
