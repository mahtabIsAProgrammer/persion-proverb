import { merge } from "lodash";
import {
  type Theme,
  Button,
  type SxProps,
  type ButtonTypeMap,
  type ButtonBaseProps,
} from "@mui/material";
import { type DOMAttributes, memo } from "react";

import { FONT_BUTTON, FONT_WEIGHT_BLOD } from "../../helpers/constants/fonts";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helpers/constants/colors";
import { SPACE_LG, SPACE_SM } from "../../helpers/constants/spaces";

export type TCustomButton = ButtonTypeMap<
  {
    text: string;
  },
  "button"
>["props"] &
  ButtonBaseProps &
  DOMAttributes<unknown>;

export const CustomButton = memo<TCustomButton>(
  ({ text, sx, variant, ...props }) => {
    const mergeSx = merge({}, buttonSX, sx);

    return (
      <Button sx={mergeSx} variant={variant || "contained"} {...props}>
        {text}
      </Button>
    );
  }
);

const buttonSX: SxProps<Theme> = {
  px: SPACE_LG,
  py: SPACE_SM,
  fontWeight: FONT_WEIGHT_BLOD,
  lineHeight: "22px",
  boxShadow: "none",
  borderRadius: "20px",
  fontSize: FONT_BUTTON,
  textTransform: "capitalize",
  outline: "1px solid transparent",
  "&.MuiButton-contained": {
    transition: "0.3s",
    color: COLOR_TEXT,
    background: COLOR_PRIMARY,
    border: `1px solid transparent`,
    "&:hover": {
      boxShadow: "none",
      color: COLOR_TEXT,
      backgroundColor: "transparent",
      outline: "1px solid " + COLOR_PRIMARY,
    },
  },
  "&.MuiButton-outlined": {
    color: COLOR_TEXT,
    backgroundColor: "transparent",
    border: `1px solid transparent`,
    "&:hover": {
      backgroundColor: COLOR_PRIMARY,
    },
  },
};
