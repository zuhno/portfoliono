"use client";

import { createContext, useContext, useState } from "react";

export enum ETheme {
  DARK = "dark",
  LIGHT = "light",
}

interface IContext {
  theme: ETheme;
  changeTheme: (_theme: ETheme) => void;
}

const context = createContext<IContext>({} as IContext);

export const useTheme = () => useContext(context);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<ETheme>(ETheme.DARK);

  const changeTheme = (_theme: ETheme) => {
    setTheme(_theme);
  };

  return <context.Provider value={{ theme, changeTheme }}>{children}</context.Provider>;
};

export default ThemeProvider;
