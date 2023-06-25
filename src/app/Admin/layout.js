"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { DashNav } from "@/NavItem/TopNav";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserAuth } from "@/Context/UserAuthContext";
import UserDropDown from "@/Components/UserDropDown";

const drawerWidth = 300;

function ResponsiveDrawer({ window, children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useUserAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const router = useRouter();

  if (!user) {
    return (
      <div className="h-screen bg-white w-full grid place-items-center">
        You Need to Sign In
      </div>
    );
  }
  if (user.email != "itsgaurav3112003@gmail.com") {
    return (
      <div className="h-screen bg-white w-full grid place-items-center">
        Access Denied
      </div>
    );
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {DashNav.map((text, index) => (
          <Link key={index} href={text.location}>
            <ListItem disablePadding>
              <ListItemButton>
                <i className={`text-blue-600 ${text.icon} mr-5 text-xl`} />
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex w-full items-center justify-between">
            <Typography variant="h6" noWrap component="div">
              Admin
            </Typography>
            <div
              data-collapse-toggle="navbar-multi-level"
              type="button"
              className="inline-flex items-center py-2  gap-5 text-sm text-gray-500 rounded-lg dark:text-gray-400 "
              aria-controls="navbar-multi-level"
              aria-expanded="false"
            >
              {!user ? (
                <Link
                  href="/Authentication"
                  className=" border w-6 h-6  cursor-pointer grid place-items-center   rounded-full"
                >
                  <i className="bi bi-person-fill"></i>
                </Link>
              ) : (
                <UserDropDown />
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt:"20px",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
