"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TopNav, { Legal } from "@/NavItem/TopNav";
import { UserAuthContexProvider, useUserAuth } from "@/Context/UserAuthContext";
import store from "@/Store/store";
import { Provider } from "react-redux";
import "./globals.css";
import { useRouter } from "next/navigation";
import { SidebarAdmin } from "@/Components/Sidebar";
import { AppBarNav } from "@/Components/Navbar";

const drawerWidth = 340;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Provider store={store}>
      <UserAuthContexProvider>
        <html>
          <head>
            <link
              rel="stylesheet"
              href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
            />
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
            />
          </head>
          <body className="bg-gray-100">
            <Box sx={{ display: "flex" }}>
              <CssBaseline />
              <AppBarNav handleDrawerOpen={handleDrawerOpen} open={open} AppBar={AppBar} />

              <Drawer
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                  },
                }}
                variant="persistent"
                anchor="left"
                open={open}
              >
                <DrawerHeader className="flex w-full justify-between">
                  <Typography variant="h6" noWrap component="div">
                    Gaurav
                  </Typography>{" "}
                  <IconButton onClick={handleDrawerClose}>
                    {theme.direction === "ltr" ? (
                      <ChevronLeftIcon />
                    ) : (
                      <ChevronRightIcon />
                    )}
                  </IconButton>
                </DrawerHeader>
                <Divider />

                <List>
                  {TopNav.map((text, index) => (
                    <button
                      className="w-full"
                      key={index}
                      onClick={() => {
                        router.push(text.location);
                      }}
                    >
                      <ListItem disablePadding>
                        <ListItemButton>
                          <i
                            className={`text-blue-600 ${text.icon} mr-5 text-xl`}
                          />
                          <ListItemText primary={text.name} />
                        </ListItemButton>
                      </ListItem>
                    </button>
                  ))}

                  <Divider sx={{ margin: "10px 0 " }} />
                  {Legal.map((text, index) => (
                    <button
                      className="w-full"
                      key={index}
                      onClick={() => {
                        router.push(text.location);
                      }}
                    >
                      <ListItem disablePadding>
                        <ListItemButton>
                          <i
                            className={`text-blue-600 ${text.icon} mr-5 text-xl`}
                          />
                          <ListItemText primary={text.name} />
                        </ListItemButton>
                      </ListItem>
                    </button>
                  ))}
                  <Divider sx={{ padding: "10px 0 " }} />

                  <button
                    className="md:block w-full mt-5 hidden"
                    onClick={() => {
                      router.push("/Admin");
                    }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton>
                        <i
                          className={`uil uil-dashboard pColor   mr-5 text-xl`}
                        />
                        <ListItemText primary="Dashboard" />
                      </ListItemButton>
                    </ListItem>
                  </button>
                </List>

                <SidebarAdmin />
              </Drawer>

              <Main open={open}>
                <DrawerHeader />

                {children}
              </Main>
            </Box>
          </body>
        </html>
      </UserAuthContexProvider>
    </Provider>
  );
}
