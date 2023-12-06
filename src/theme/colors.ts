import { createTheme, colors } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: colors.blue[900],
      },
      secondary: {
        main: colors.grey[400],
      },
    },
  });

  export {theme};