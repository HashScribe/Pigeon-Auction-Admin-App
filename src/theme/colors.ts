import { createTheme, colors } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: colors.blue[900],
      },
      secondary: {
        main: colors.blue[300],
      },
    },
  });

  export {theme};