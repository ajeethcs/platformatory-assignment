// src/components/Navbar.tsx
import React from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Logo = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

const NavItems = styled(Box)`
  display: flex;
  gap: 24px;
  margin-left: auto;
`;

const Navbar = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Logo>Platformatory</Logo>
        <NavItems>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Pricing</Button>
          <Button color="inherit">About us</Button>
          <Button color="inherit">Contact</Button>
          <Button
            variant="text"
            onClick={() =>
              loginWithRedirect({
                appState: {
                  returnTo: "/profile",
                },
              })
            }
          >
            Log in
          </Button>
          <Button
            onClick={() =>
              loginWithRedirect({
                appState: {
                  returnTo: "/profile",
                },
              })
            }
            variant="contained"
          >
            Sign up
          </Button>
        </NavItems>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
