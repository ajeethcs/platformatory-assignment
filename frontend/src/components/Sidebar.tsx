import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box boxShadow="none" sx={{ overflow: "auto" }}>
        <List>
          <ListItem button>
            <ListItemText primary="Edit Profile" />
          </ListItem>
          {/* Add more nav items here */}
        </List>
      </Box>
    </Drawer>
  );
}
