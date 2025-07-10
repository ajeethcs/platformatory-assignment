import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth0 } from "@auth0/auth0-react";
import BasicMenu from "./ProfileMenu";

export default function Topbar() {
  const { user, logout } = useAuth0();

  return (
    <AppBar
      position="fixed"
      color="default"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton color="inherit" edge="start" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Profile
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
        {/* <BasicMenu /> */}
        {/* {user?.picture && <Avatar src={user.picture} />} */}
      </Toolbar>
    </AppBar>
  );
}
