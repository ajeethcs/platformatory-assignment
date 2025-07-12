import { Box, CssBaseline } from "@mui/material";
import "../styles/layout.css";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <Box boxShadow="none" sx={{ display: "flex" }}>
      <CssBaseline />
      <Box boxShadow="none" component="main" className="main-content">
        {/* {children} */}
      </Box>
    </Box>
  );
}
