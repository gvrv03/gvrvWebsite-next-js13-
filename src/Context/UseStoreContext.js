import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import baseUrl from "../../baseUrl";

const useStoreContext = createContext();
export function UseStoreContextProvider({ children }) {
  const [rememberModal, setrememberModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setrememberModal(true);
    }, 15000);
  }, []);

  return (
    <useStoreContext.Provider value={{ rememberModal, setrememberModal }}>
      {children}
    </useStoreContext.Provider>
  );
}

export function useAppStore() {
  return useContext(useStoreContext);
}
