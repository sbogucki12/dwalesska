import "./titleDesktop.css";
import { useLanguageContext } from '../../utils/LanguageProvider';

const TitleDesktop = () => {
  const languageText = useLanguageContext(); 
  return (
    <div className="titleDesktopContainer">
      <h1 className="titleMainText">{languageText.DANIAWALESSKACOACHING}</h1>
      <p>{languageText.CHOOSEYOURFUTURE}</p>
    </div>
  );
};

export default TitleDesktop;
