import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h2>{language === "en" ? "Hello" : "Hej"}</h2>
      <button onClick={toggleLanguage}>
        {language === "en" ? "Switch to Danish" : "Skift til Engelsk"}
      </button>
    </div>
  );
}
