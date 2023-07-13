import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import TopNav, { DashNav, Legal } from "../../src/NavItem/TopNav";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function Sidebar() {
  const router = useRouter();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300, padding: "10px 10px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="p-5">
        <h1 className="text-lg font-semibold">Gaurav Narnaware</h1>
      </div>{" "}
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
                <i className={`text-blue-600 ${text.icon} mr-5 text-xl`} />
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
                <i className={`text-blue-600 ${text.icon} mr-5 text-xl`} />
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          </button>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <>
        <button onClick={toggleDrawer("left", true)}>
          <i className="bi bi-list text-black text-2xl" />
        </button>
        <SwipeableDrawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}
        >
          {list("left")}
        </SwipeableDrawer>
      </>
    </div>
  );
}
