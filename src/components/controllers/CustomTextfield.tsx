import { memo } from "react";

import {
  Grid,
  TextField,
  Typography,
  type Theme,
  type SxProps,
  type TextFieldProps,
  type TextFieldVariants,
} from "@mui/material";

import { errorIcon } from "../others/SvgComponents";
import {
  FONT_CAPTION,
  FONT_SMALL_TEXT,
  FONT_WEIGHT_REGULAR,
} from "../../helpers/constants/fonts";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helpers/constants/colors";

export type TCustomTextfield =
  | {
      variant?: TextFieldVariants;
      errorMessege?: { text: string };
    } & Omit<TextFieldProps, "variant"> & {};

export const CustomTextfield = memo<TCustomTextfield>(
  ({ errorMessege, ...props }) => {
    return (
      <Grid className="textfield-wrapper" sx={textfieldSX}>
        <TextField {...props} />
        {!errorMessege?.text && (
          <Typography sx={{ height: "18px" }}></Typography>
        )}
        {errorMessege?.text && (
          <Typography className="error-messege">
            {errorIcon()}
            {errorMessege.text}
          </Typography>
        )}
      </Grid>
    );
  }
);

const textfieldSX: SxProps<Theme> = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  "& .MuiTextField-root": {
    width: "100%",
    "& .MuiInputBase-root": {
      height: "54px",
      overflow: "hidden",
      borderRadius: "12px",
      "& fieldset": {
        border: "1px solid" + COLOR_PRIMARY,
      },
      "& .MuiInputBase-input": {
        fontSize: FONT_SMALL_TEXT,
        fontWeight: FONT_WEIGHT_REGULAR,
        color: COLOR_TEXT,
      },
      "&.MuiInput-underline ": {
        "&:before": {
          borderColor: COLOR_PRIMARY,
          content: '""',
          bottom: "6px",
        },
        "&:after": {
          display: "none",
        },
      },
    },
    "& .MuiFormLabel-root": {
      color: COLOR_TEXT,
    },
  },
  "& .error-messege": {
    color: "red",
    fontSize: FONT_CAPTION,
    mt: "4px",
    display: "flex",
    alignItems: "center",
    gap: "2px",
    lineHeight: "0",
  },
};
