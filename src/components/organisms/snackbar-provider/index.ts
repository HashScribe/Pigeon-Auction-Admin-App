import { useContext } from "react";
import { Context } from "./snackbar-provider";

export const useSnackbar = () => {
  return useContext(Context);
};
