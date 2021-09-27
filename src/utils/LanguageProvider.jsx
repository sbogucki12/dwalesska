import { useState, createContext, useContext } from "react";

const LanguageContext = createContext();
const LanguageUpdateContext = createContext();

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

export const useLanguageUpdateContext = () => {
  return useContext(LanguageUpdateContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = (e) => {
    console.log(e.target.checked)
    if (language === "english") {
      setLanguage("spanish");
    } else if (language === "spanish") {
      setLanguage("english");
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
