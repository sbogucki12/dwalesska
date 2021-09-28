import { useState, createContext, useContext } from "react";
import languageTextEnglish from './languageTextEn.json';
import languageTextSpanish from './languageTextSpanish.json';

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export const useLanguageUpdateContext = () => {
  return useContext(LanguageUpdateContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(languageTextEnglish);

  const toggleLanguage = (e) => {        
    if (e.target.checked === true) {
      setLanguage(languageTextSpanish);
    } else if (e.target.checked === false) {
      setLanguage(languageTextEnglish);
    }
  };

  return (
    <LanguageContext.Provider value={language}>
      <LanguageUpdateContext.Provider value={toggleLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
};
