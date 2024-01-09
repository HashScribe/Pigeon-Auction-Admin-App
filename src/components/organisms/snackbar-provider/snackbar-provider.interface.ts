import { AlertColor } from "@mui/material";

export interface ISnackbar {
  isOpen: boolean;
  message: string;
  type?: AlertColor;
}

export interface SnackbarContext {
  snackbar: ISnackbar;
  openSnackbar: (message: string, type: AlertColor) => void;
  closeSnackbar: () => void;
}
