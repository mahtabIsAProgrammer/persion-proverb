import { memo, type JSX } from "react";

import {
  type Theme,
  Dialog,
  type SxProps,
  type DialogProps,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
} from "@mui/material";
import { closeIcon } from "../others/SvgComponents";
import { FONT_WEIGHT_BLOD } from "../../helpers/constants/fonts";

interface ICustomDialog extends DialogProps {
  dialogContent: JSX.Element;
  title: string;
  onClose: TEmptyFunctionVoid;
}

export const CustomDialog = memo<ICustomDialog>(
  ({ dialogContent, open, onClose, title }) => {
    return (
      <Dialog sx={dialogSX} open={open}>
        <DialogTitle>
          <Typography className="dialog-title">{title}</Typography>
          <IconButton className="close-icon" onClick={onClose}>
            {closeIcon()}
          </IconButton>
        </DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
      </Dialog>
    );
  }
);

const dialogSX: SxProps<Theme> = {
  width: "100%",
  "& .MuiPaper-root": {
    px: "50px",
    py: "28px",
    minWidth: "600px",
    minHeight: "400px",
    borderRadius: "14px",
    backgroundColor: "#000",
    "& .MuiDialogContent-root": {
      p: "0px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
    "& .MuiDialogTitle-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      p: "0",
      "& .dialog-title": {
        fontSize: "22px",
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
  },
};
