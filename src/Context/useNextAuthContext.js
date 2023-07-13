import { fetchUsersIndividual } from "@/Store/Actions/userActionIndividual";
import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

const userNextAuthContext = createContext();
export function UserNextAuthContexProvider({ children }) {
  const dispatch = useDispatch();

  const [userIDS, setuserIDS] = useState({
    token: null,
    firebaseID: null,
    ID: null,
  });
  const { data } = useSession();
  useEffect(() => {
    if (data) {
      localStorage.setItem(
        "id",
        data?.user?.id ? data?.user?.id : data?.user?._id
      );
    }
    setuserIDS({
      token: null,
      firebaseID: null,
      ID: localStorage.getItem("id"),
    });
    if (data) {
      dispatch(fetchUsersIndividual());
    }
  }, [data]);
  const User = useSelector((state) => state.user);

  return (
    <userNextAuthContext.Provider
      value={{
        userData: User?.data,
        userIDS,
        isLogin: User?.data?.length === 0 ? false : true,
        isAdmin:
          User?.data?.role === "admin" || User?.data?.role === "root"
            ? true
            : false,
        isRoot: User?.data?.role === "root" ? true : false,
      }}
    >
      {children}
    </userNextAuthContext.Provider>
  );
}

export function useUserNextAuth() {
  return useContext(userNextAuthContext);
}
