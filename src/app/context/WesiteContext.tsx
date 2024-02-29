"use client";
import { parseCookies } from "nookies";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type Context = {
  isAthlet: boolean;
  setIsAthlet: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
};

export const AppContext = createContext<Context>({} as Context);

export const WebsiteContext = ({ children }: { children: ReactNode }) => {
  const [isAthlet, setIsAthlet] = useState(false);
  const [loading, setIsLoading] = useState(true);
  const procced = parseCookies();

  const getCookies = () => {
    const cookies = parseCookies();
    if (cookies.isAthlete) {
      setIsAthlet(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCookies();
  }, []);

  const contextValue: Context = { isAthlet, setIsAthlet, loading };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useWebsiteContext = () => {
  return useContext(AppContext);
};
