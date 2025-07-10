import { Box, CssBaseline } from "@mui/material";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../styles/layout.css";
import MenuAppBar from "./Topbar";
// import MenuAppBar from "./Topbar";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <Box boxShadow="none" sx={{ display: "flex" }}>
      <CssBaseline />
      <Topbar />
      <Sidebar />
      <Box boxShadow="none" component="main" className="main-content">
        {children}
      </Box>
    </Box>
  );
}
