"use client";

import { createContext, useContext, useEffect } from "react";
import TagManager from "react-gtm-module";

import { GTM_ID } from "@common/constants";

import type { ETheme } from "./ThemeProvider";

interface IContext {
  gtmTheme: (_theme: ETheme) => void;
}

const Context = createContext<IContext>({} as IContext);

export const useGTM = () => useContext(Context);

const GTMProvider = ({ children }) => {
  const gtmTheme = (theme: ETheme) => {
    TagManager.dataLayer({
      dataLayer: {
        event: "usr_theme",
        mode: theme,
      },
    });
  };

  useEffect(() => {
    TagManager.initialize({ gtmId: GTM_ID });
  }, []);

  return <Context.Provider value={{ gtmTheme }}>{children}</Context.Provider>;
};

export default GTMProvider;
