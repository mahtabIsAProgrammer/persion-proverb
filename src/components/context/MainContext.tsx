import {
  type FC,
  type ProviderProps,
  createContext,
  useMemo,
  useState,
} from "react";

export const MainContext = createContext<IMainContext>({
  theme: "light",
  changeTheme: () => undefined,
  toggleTheme: () => undefined,
});

export const MainContextProvider: FC<IMainContextProvider> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>("light");

  const toggleTheme = () => {
    setTheme((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const changeTheme = (theme: TTheme) => {
    console.log("🚀 ~ file: MainContext.tsx:39 ~ themeChange ~ theme:", theme);
    setTheme(theme);
  };

  const value: ProviderProps<IMainContext>["value"] = useMemo(
    () => ({
      theme,
      toggleTheme,
      changeTheme,
    }),
    [theme]
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};
