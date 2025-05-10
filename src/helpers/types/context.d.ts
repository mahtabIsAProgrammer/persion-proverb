interface IMainContext {
  theme: TTheme;
  toggleTheme: TEmptyFunctionVoid;
  changeTheme: (theme: TTheme) => void;
}

interface IMainContextProvider {
  children: JSX.Element;
}
