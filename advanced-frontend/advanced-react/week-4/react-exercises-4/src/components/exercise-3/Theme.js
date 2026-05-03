import { createTheme } from "@mui/material/styles";

export const getTheme = (language) =>
  createTheme({
    direction: "ltr",
    typography: {
      fontFamily: "Roboto",
    },
  });
