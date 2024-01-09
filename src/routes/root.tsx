import { Layout } from "../components/organisms";
import { SnackbarProvider } from "../components/organisms/snackbar-provider/snackbar-provider";

const Root = () => {
  return (
    <SnackbarProvider>
      <Layout />
    </SnackbarProvider>
  );
};
export { Root };
