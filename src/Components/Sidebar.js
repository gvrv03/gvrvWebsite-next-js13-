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
        <Divider sx={{ padding: "10px 0 " }} />

        <button
          className="md:block w-full mt-5 hidden"
          onClick={() => {
            router.push("/Admin");
          }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <i className={`uil uil-dashboard pColor   mr-5 text-xl`} />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </button>

        <SidebarAdmin />
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

export const SidebarAdmin = () => {
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
      sx={{ width: 300, padding: "20px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="flex gap-5 justify-between items-center">
        <button
          onClick={() => {
            router.push("/Admin/CreatePost");
          }}
          className="text-red-500   flex gap-5 items-center justify-center  shadow-md border font-bold w-40 rounded-full py-3"
        >
          <i className="bi bi-plus-lg" />
          <p>New Post</p>
        </button>
        <button>
          <i className="uil uil-times text-3xl pColor" />
        </button>{" "}
      </div>
      <Divider sx={{ padding: "10px 0 " }} />
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
    </Box>
  );

  return (
    <div>
      <>
        <button
          className="mt-5 w-full md:hidden block "
          onClick={toggleDrawer("left", true)}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <i className={`uil uil-apps  pColor mr-5 text-xl`} />
              Dashboard
            </ListItemButton>
          </ListItem>
        </button>

        {/* <button className="w-full">Tools</button> */}
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
};
