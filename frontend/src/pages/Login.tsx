import { useAuth0 } from "@auth0/auth0-react";
import { Button, Container, Typography, Box } from "@mui/material";

export default function Login() {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <Container sx={{ mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Platformatory App
      </Typography>

      {!isAuthenticated ? (
        <Button variant="contained" onClick={() => loginWithRedirect()}>
          Login with Auth0
        </Button>
      ) : (
        <Box>
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
