import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import TopNav, { DashNav, Legal } from "../../src/NavItem/TopNav";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Sidebar({ user, isLogin }) {
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
    <aside
      className="w-[300px]  p-5 "
      role="presentation"
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {!isLogin ? (
        <></>
      ) : (
        <div className="p-5 rounded-md flex  flex-col bg-blue-50 ">
          <div className="items-center  flex   gap-5   ">
            <div className="w-14 h-14   overflow-hidden  border-white border-4  rounded-full">
              <img
                src={user?.image}
                className="w-full h-full"
                alt=""
                srcset=""
              />
            </div>
            <div className="h-full flex flex-col justify-between items-start gap-2">
              <h1 className="font-semibold">{user?.name}</h1>
              <button
                onClick={() => {
                  router.push("/MyAccount");
                }}
                className="font-light  text-gray-500 text-sm "
              >
                {" "}
                <i className="uil uil-user" /> My Account
              </button>
            </div>
          </div>
          <button
            onClick={signOut}
            className="bgpColor  mt-2 text-white p-1 rounded-md flex gap-2 justify-center items-center "
          >
            {" "}
            <i className="uil uil-signout" /> <span> Sign Out</span>
          </button>
        </div>
      )}
      <div className="mt-5">
        {TopNav.map((text, index) => (
          <button
            className=" text-left  py-2 flex gap-5 w-full"
            key={index}
            onClick={() => {
              router.push(text.location);
            }}
          >
            <i className={`${text.icon}`} />
            <span>{text.name}</span>{" "}
          </button>
        ))}

        <Divider sx={{ margin: "10px 0 " }} />

        {Legal.map((text, index) => (
          <button
            className=" text-left    py-2 flex gap-5 w-full"
            key={index}
            onClick={() => {
              router.push(text.location);
            }}
          >
            <i className={`${text.icon}`} />
            <span>{text.name}</span>{" "}
          </button>
        ))}
      </div>
    </aside>
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
