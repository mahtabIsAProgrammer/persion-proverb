import { Typography } from "@mui/material";

import { FONT_BODY } from "../../helpers/constants/fonts";
import { CustomDialog } from "../controllers/CustomDialog";
import { CustomButton } from "../controllers/CustomButton";
import { SPACE_LG, SPACE_MD } from "../../helpers/constants/spaces";

interface ConfirmDeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmDeleteDialog = ({
  open,
  onClose,
  onConfirm,
}: ConfirmDeleteDialogProps) => {
  return (
    <CustomDialog
      sx={{
        "& .MuiPaper-root": {
          color: "#fff",
          borderRadius: 2,
          minWidth: "200px !important",
          minHeight: "200px !important",
          backgroundColor: "#1e1e1e",
          border: "2px solid #B96400",
          maxWidth: "400px",
          py: SPACE_MD,
          px: SPACE_LG,

          "& .MuiDialogTitle-root": {
            "& .dialog-title": {
              fontSize: FONT_BODY,
            },
          },
        },
      }}
      dialogAction={
        <>
          <CustomButton text="Cancel" onClick={onClose} />
          <CustomButton text="Delete" onClick={onConfirm} />
        </>
      }
      dialogContent={
        <Typography sx={{ textAlign: "center" }}>
          Are you sure you want to delete this proverb? This action cannot be
          undone.
        </Typography>
      }
      title={"Delete Confirmation"}
      onClose={onClose}
      open={open}
    />
  );
};
