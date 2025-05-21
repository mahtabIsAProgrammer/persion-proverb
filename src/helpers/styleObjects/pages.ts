import type { SxProps, Theme } from "@mui/material";

import { SPACE_2XL } from "../constants/spaces";
import { MAX_WIDTH } from "./../constants/static";
import { COLOR_TEXT } from "../constants/colors";
import { FONT_WEIGHT_BLOD } from "../constants/fonts";

import background from "../../assets/images/background.webp";

export const homeSX: SxProps<Theme> = {
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  background: `url(${background}), linear-gradient(to bottom, rgba(0, 0, 0, 0.7))`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  pb: "40px",
  "& .content": {
    width: "100%",
    mx: "auto",
    maxWidth: MAX_WIDTH,
    "& .cards-container": {
      mt: SPACE_2XL,
      width: "100%",
      "& .cards-wrapper": {
        mt: SPACE_2XL,
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        flexWrap: { lg: "wrap", xs: "nowrap" },
        // gap: "6px",
        rowGap: "24px",
        alignItems: "center",
        justifyContent: { lg: "space-between", xs: "center" },
      },
      "& .view-all": {
        fontSize: "28px",
        fontWeight: FONT_WEIGHT_BLOD,
        display: "flex",
        gap: "8px",
        textDecoration: "none",
        color: COLOR_TEXT,
        justifyContent: "flex-end",
        mt: "20px",
        alignItems: "center",
      },
    },
  },
};

export const proverbsSX: SxProps<Theme> = {
  width: "100%",
  minHeight: "100vh",
  position: "relative",
  background: `url(${background}), linear-gradient(to bottom, rgba(0, 0, 0, 0.7))`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  backgroundAttachment: "fixed",
  pb: "40px",
  "& .content": {
    width: "100%",
    margin: "auto",
    maxWidth: MAX_WIDTH,
    "& .cards-container": {
      mt: SPACE_2XL,
      width: "100%",
      "& .cards-wrapper": {
        mt: SPACE_2XL,
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        flexWrap: { lg: "wrap", xs: "nowrap" },
        gap: "6px",
        rowGap: "24px",
        justifyContent: "space-between",
      },
      "& .view-all": {
        fontSize: "28px",
        fontWeight: FONT_WEIGHT_BLOD,
        display: "flex",
        gap: "8px",
        textDecoration: "none",
        color: COLOR_TEXT,
        justifyContent: "flex-end",
        mt: "20px",
        alignItems: "center",
      },
    },
  },
};

export const proverbDetailsSX: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  position: "relative",
  background: `url(${background}), linear-gradient(to bottom, rgba(0, 0, 0, 0.7))`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  pb: "40px",
  "& .content": {
    width: "100%",
    margin: "auto",
    maxWidth: MAX_WIDTH,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mt: "18px",
  },
};
