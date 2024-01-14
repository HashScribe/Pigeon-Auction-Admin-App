import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IConfirmationModal } from "./confirmation-modal.interface";

export const ConfirmationModal: React.FC<IConfirmationModal> = ({
  isOpen,
  closeModal,
  title,
  bodyText,
  textField,
  buttonText,
  onSubmit,
}) => {
  return (
    <>
      <Dialog open={isOpen} onClose={closeModal}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{bodyText}</DialogContentText>
          {textField}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button type="submit" onClick={onSubmit}>
            {buttonText || "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
