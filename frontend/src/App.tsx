import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress, Box } from "@mui/material";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  console.log("is authenticated,", isAuthenticated, isLoading);

  if (isLoading) {
    return (
      <Box
        boxShadow="none"
        sx={{ display: "flex", justifyContent: "center", mt: 10 }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/profile"
          element={
            isAuthenticated ? <ProfilePage /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="*"
          element={
            isAuthenticated ? (
              <Navigate to="/profile" replace />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
