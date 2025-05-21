// ConfirmDeleteDialog.tsx
import {
  Dialog,
  Button,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";

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
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          backgroundColor: "#1e1e1e",
          color: "#fff",
          border: "2px solid #B96400",
          borderRadius: 2,
        },
      }}
    >
      <DialogTitle sx={{ color: "#B96400" }}>Confirm Deletion</DialogTitle>
      <DialogContent sx={{ fontSize: "1rem" }}>
        Are you sure you want to delete this proverb? This action cannot be
        undone.
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} sx={{ color: "#B96400" }}>
          Cancel
        </Button>
        <Button onClick={onConfirm} sx={{ color: "#B96400" }} autoFocus>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};
