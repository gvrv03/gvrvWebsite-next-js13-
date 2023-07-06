import { useSession } from "next-auth/react";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const userNextAuthContext = createContext();
export function UserNextAuthContexProvider({ children }) {
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
  }, [data]);

  return (
    <userNextAuthContext.Provider
      value={{
        userData: data?.user,
        userIDS,
      }}
    >
      {children}
    </userNextAuthContext.Provider>
  );
}

export function useUserNextAuth() {
  return useContext(userNextAuthContext);
}
