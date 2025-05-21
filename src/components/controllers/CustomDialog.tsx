import { memo, type JSX } from "react";

import {
  type Theme,
  Dialog,
  Typography,
  IconButton,
  DialogTitle,
  type SxProps,
  DialogContent,
  DialogActions,
  type DialogProps,
} from "@mui/material";
import { merge } from "lodash";

import {
  FONT_HEADING_SMALL,
  FONT_WEIGHT_BLOD,
} from "../../helpers/constants/fonts";
import { closeIcon } from "../others/SvgComponents";
import { SPACE_2XL, SPACE_LG, SPACE_MD } from "../../helpers/constants/spaces";

interface ICustomDialog extends DialogProps {
  title: string;
  dialogContent: JSX.Element;
  dialogAction?: JSX.Element;
  onClose: TEmptyFunctionVoid;
}

export const CustomDialog = memo<ICustomDialog>(
  ({ dialogContent, open, sx, onClose, title, dialogAction }) => {
    const mergeSx = merge({}, dialogSX, sx);

    return (
      <Dialog sx={mergeSx} open={open}>
        <DialogTitle>
          <Typography className="dialog-title">{title}</Typography>
          <IconButton className="close-icon" onClick={onClose}>
            {closeIcon()}
          </IconButton>
        </DialogTitle>
        <DialogContent>{dialogContent}</DialogContent>
        {dialogAction && <DialogActions>{dialogAction}</DialogActions>}
      </Dialog>
    );
  }
);

const dialogSX: SxProps<Theme> = {
  width: "100%",
  "& .MuiPaper-root": {
    py: SPACE_LG,
    px: { xs: SPACE_MD, md: SPACE_2XL },
    minWidth: { xs: "390px", sm: "560px", md: "600px" },
    minHeight: "400px",
    borderRadius: "14px",
    backgroundColor: "#000",
    "& .MuiDialogContent-root": {
      p: 0,
      width: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
    },
    "& .MuiDialogTitle-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      p: 0,
      "& .dialog-title": {
        fontSize: FONT_HEADING_SMALL,
        fontWeight: FONT_WEIGHT_BLOD,
      },
    },
    "& .MuiDialogActions-root": {
      justifyContent: "center",
    },
  },
};
