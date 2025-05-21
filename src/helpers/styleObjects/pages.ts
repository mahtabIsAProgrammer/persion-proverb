import type { SxProps, Theme } from "@mui/material";

import {
  SPACE_2XL,
  SPACE_LG,
  SPACE_MD,
  SPACE_SM,
  SPACE_XS,
} from "../constants/spaces";
import { MAX_WIDTH } from "./../constants/static";
import { FONT_WEIGHT_BLOD } from "../constants/fonts";
import { COLOR_PRIMARY, COLOR_TEXT } from "../constants/colors";

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
  pb: SPACE_2XL,
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
        rowGap: SPACE_LG,
        alignItems: "center",
        justifyContent: { lg: "space-between", xs: "center" },
      },
      "& .view-all": {
        mt: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "& a": {
          gap: SPACE_SM,
          display: "flex",
          fontSize: "28px",
          color: COLOR_TEXT,
          transition: "0.4s",
          width: "fit-content",
          alignItems: "center",
          textDecoration: "none",
          fontWeight: FONT_WEIGHT_BLOD,
          "& svg": {
            transition: "0.4s",
          },
        },
        "& a:hover": {
          color: COLOR_PRIMARY,

          "& svg path": {
            fill: COLOR_PRIMARY,
          },
        },
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
  pb: SPACE_2XL,
  "& .content": {
    width: "100%",
    margin: "auto",
    maxWidth: MAX_WIDTH,
    "& .cards-container": {
      width: "100%",
      "& .cards-wrapper": {
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        flexWrap: { lg: "wrap", xs: "nowrap" },
        gap: SPACE_SM,
        rowGap: SPACE_MD,
        justifyContent: "space-between",
        "& .no-found": {
          width: "100%",
          height: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          "& p": {
            fontSize: "30px",
            fontWeight: FONT_WEIGHT_BLOD,
          },
        },
      },
      "& .view-all": {
        fontSize: "28px",
        fontWeight: FONT_WEIGHT_BLOD,
        display: "flex",
        gap: SPACE_SM,
        textDecoration: "none",
        color: COLOR_TEXT,
        justifyContent: "flex-end",
        mt: "20px",
        alignItems: "center",
      },
    },
    "& .filters": {
      mt: "44px",
      gap: SPACE_LG,
      px: SPACE_MD,
      width: "100%",
      display: "flex",
      alignItems: "center",
      "& .search-input": {
        width: "100%",
        "& .MuiInputBase-root": {
          width: "100%",
          overflow: "hidden",
          borderRadius: "12px",
          background: "#00000090",
          "& fieldset": {
            border: "1px solid" + COLOR_PRIMARY,
          },
          "& .MuiInputBase-input": {
            "&::placeholder": {
              opacity: "1",
              color: COLOR_TEXT,
            },
          },
        },
      },
      "& .filter-input": {
        mb: "18px",
        width: "100%",
        "&.MuiSelect-root": {
          width: "100%",
          overflow: "hidden",
          borderRadius: "12px",
          background: "#00000090",
          color: COLOR_TEXT,
          "& fieldset": {
            border: "1px solid " + COLOR_PRIMARY,
          },
          "& svg": {
            fill: COLOR_TEXT,
          },
        },
      },
    },
  },
};

export const menuItemSX = {
  "& .MuiMenu-paper": {
    mt: "4px",
    py: SPACE_MD,
    maxHeight: "340px",
    background: "#000000",
    borderRadius: "12px",
    boxShadow: "0px 4px 6px -2px #A3A3A308, 0px 0px 0px -4px #A3A3A308",
  },
  "& .MuiList-root": {
    px: SPACE_MD,
    gap: SPACE_XS,
    display: "flex",
    maxHeight: "190px",
    alignItems: "center",
    flexDirection: "column",
  },
  "& .MuiMenuItem-root": {
    width: "100%",

    "&:hover": {
      backgroundColor: COLOR_PRIMARY + "70",
    },
    "&.Mui-selected": {
      backgroundColor: COLOR_PRIMARY + "80",
      fontWeight: "bold",
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
  pb: SPACE_2XL,
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
