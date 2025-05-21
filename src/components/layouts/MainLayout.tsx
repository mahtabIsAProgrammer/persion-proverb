import { type FC, useEffect } from "react";

import { Grid, IconButton, ThemeProvider } from "@mui/material";
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
import {
  FONT_SMALL_TEXT,
  FONT_WEIGHT_REGULAR,
} from "../../helpers/constants/fonts";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helpers/constants/colors";
import { SnackbarProvider } from "notistack";
import { errorAlertICON, successAlertICON } from "../others/SvgComponents";

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
        <SnackbarProvider
          iconVariant={{
            success: (
              <IconButton className="alert-icon">
                {successAlertICON()}
              </IconButton>
            ),

            error: (
              <IconButton className="alert-icon">{errorAlertICON()}</IconButton>
            ),
          }}
          style={{
            direction: "ltr",
            backgroundColor: "#000",
            color: "#fff",
            fontSize: FONT_SMALL_TEXT,
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            borderRadius: "12px",
            boxShadow: "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
          }}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <Grid sx={mainLayoutSX} className="main-layout">
              {children}
            </Grid>
          )}
        </SnackbarProvider>
      </MaterialCssVarsProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
