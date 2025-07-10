import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/profile", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <Container sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Platformatory App
      </Typography>

      {!isAuthenticated ? (
        <Button
          variant="contained"
          onClick={() =>
            loginWithRedirect({
              appState: {
                returnTo: "/profile",
              },
            })
          }
        >
          Login with Auth0
        </Button>
      ) : (
        <Box boxShadow="none">
          <Typography variant="h6" gutterBottom>
            You’re already logged in!
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Logout
          </Button>
        </Box>
      )}
    </Container>
  );
}
