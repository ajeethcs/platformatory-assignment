// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3D52A0", // Replace with your desired primary color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Applies to all buttons
          textTransform: "none", // Optional: prevent ALL CAPS
        },
      },
    },
  },
  shape: {
    borderRadius: 12, // Affects other components like Paper, Card, etc.
  },
});

export default theme;
