// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb", // Blue-600
    },
    secondary: {
      main: "#facc15", // Yellow-400
    },
    text: {
      primary: "#000000",
      secondary: "#6b7280",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h2: {
      fontWeight: 800,
      fontSize: "3rem",
    },
    subtitle1: {
      fontSize: "1rem",
      color: "#6b7280",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
});

export default theme;
