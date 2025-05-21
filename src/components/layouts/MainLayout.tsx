import { type FC, useEffect } from "react";

import { Grid, ThemeProvider } from "@mui/material";
import { useLocation, useRoutes } from "react-router-dom";

import {
  createTheme,
  extendTheme as materialExtendTheme,
  ThemeProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from "@mui/material/styles";

import { routes } from "../../routes";
import { Loading } from "../common/Loading";
import { useProverbSearch } from "../../services/hooks";
import { FONT_FAMILY } from "../../helpers/constants/static";
import { mainLayoutSX } from "../../helpers/styleObjects/main";
import { FONT_WEIGHT_REGULAR } from "../../helpers/constants/fonts";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helpers/constants/colors";

const MainLayout: FC = () => {
  const children = useRoutes(routes);

  const { isLoading } = useProverbSearch();

  const { pathname } = useLocation();

  const themeMUI = createTheme({
    palette: { primary: { main: COLOR_PRIMARY } },
    typography: {
      fontFamily: FONT_FAMILY,
      allVariants: { color: COLOR_TEXT, fontWeight: FONT_WEIGHT_REGULAR },
    },
  });

  const materialTheme = materialExtendTheme(themeMUI);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
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
  );
};

export default MainLayout;
