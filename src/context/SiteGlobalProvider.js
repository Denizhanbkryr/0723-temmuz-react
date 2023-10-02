import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const SiteGlobalContext = createContext();

export const SiteGlobalProvider = ({ children }) => {
  const [userName, setUserName] = useState("Anonim");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [language, setLanguage] = useLocalStorage("lang", "tr");

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <SiteGlobalContext.Provider
      value={{ userName, setUserName, theme, setTheme, language, setLanguage }}
    >
      {children}
    </SiteGlobalContext.Provider>
  );
};
