import { useContext } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { LanguageContext } from "./LanguageContext";
import { getTheme } from "./Theme";
import Header from "./Header";

export default function AppContent() {
  const { language } = useContext(LanguageContext);
  const theme = getTheme(language);

  return (
    <MuiThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Header />
      </LocalizationProvider>
    </MuiThemeProvider>
  );
}
