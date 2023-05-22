import { useTheme } from "next-themes";
import { useContext } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const userThememContext = createContext();
export function UserThemeContexProvider({ children }) {
  const { theme, setTheme } = useTheme();
  const [themeMode, setthemeMode] = useState("light");
  function toggleTheme() {
    setthemeMode(theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  }
  useEffect(() => {
    setthemeMode(localStorage.getItem("theme"));
  }, []);

  return (
    <userThememContext.Provider value={{ toggleTheme, themeMode, theme }}>
      {children}
    </userThememContext.Provider>
  );
}

export function useUserTheme() {
  return useContext(userThememContext);
}
