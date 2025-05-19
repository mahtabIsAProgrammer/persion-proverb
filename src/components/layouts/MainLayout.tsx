import { type FC, useEffect, useState } from "react";

import { useLocation, useRoutes } from "react-router-dom";
import { Grid, ThemeProvider } from "@mui/material";

import {
  createTheme,
  extendTheme as materialExtendTheme,
  ThemeProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";

import { routes } from "../../routes";
import { Loading } from "../common/Loading";
import { FONT_FAMILY } from "../../helpers/constants/static";
import { mainLayoutSX } from "../../helpers/styleObjects/main";
import { FONT_WEIGHT_REGULAR } from "../../helpers/constants/fonts";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helpers/constants/colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MainLayout: FC = () => {
  const children = useRoutes(routes);
  const queryClient = new QueryClient();

  const { pathname } = useLocation();

  const themeMUI = createTheme({
    palette: { primary: { main: COLOR_PRIMARY } },
    typography: {
      fontFamily: FONT_FAMILY,
      allVariants: { color: COLOR_TEXT, fontWeight: FONT_WEIGHT_REGULAR },
    },
  });

  const materialTheme = materialExtendTheme(themeMUI);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themeMUI}>
        <MaterialCssVarsProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
          {isLoading ? (
            <Loading />
          ) : (
            <Grid sx={mainLayoutSX} className="main-layout">
              {children}
            </Grid>
          )}
        </MaterialCssVarsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MainLayout;
