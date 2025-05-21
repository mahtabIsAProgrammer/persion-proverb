import { memo } from "react";

import {
  Grid,
  type Theme,
  type SxProps,
  TextField,
  type TextFieldProps,
  type TextFieldVariants,
  Typography,
} from "@mui/material";
import { COLOR_PRIMARY, COLOR_TEXT } from "../../helpers/constants/colors";
import { FONT_WEIGHT_REGULAR } from "../../helpers/constants/fonts";
import { errorIcon } from "../others/SvgComponents";

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

        {errorMessege && (
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
        fontSize: "14px",
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
    fontSize: "12px",
    mt: "4px",
    display: "flex",
    alignItems: "center",
    gap: "2px",
    lineHeight: "0",
  },
};
