import { Alert, AlertColor, Snackbar } from "@mui/material";
import { createContext, useState } from "react";
import { SnackbarContext } from "./snackbar-provider.interface";

export const Context = createContext<SnackbarContext | undefined>(undefined);

export const SnackbarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [snackbar, setSnackbar] = useState<SnackbarContext["snackbar"]>({
    isOpen: false,
    message: "",
    type: "success",
  });

  const openSnackbar = (message: string, type: AlertColor) => {
    setSnackbar({ isOpen: true, message, type });
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, isOpen: false });
  };

  return (
    <Context.Provider value={{ snackbar, openSnackbar, closeSnackbar }}>
      <Snackbar
        open={snackbar.isOpen}
        autoHideDuration={6000}
        onClose={closeSnackbar}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}
      >
        <Alert onClose={closeSnackbar} severity={snackbar.type}>
          {snackbar.message}
        </Alert>
      </Snackbar>
      {children}
    </Context.Provider>
  );
};
