import { useContext } from "react";
import { createContext } from "react";
import baseUrl from "../../baseUrl";
import {
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,

  //roles
  updateProfile,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useState } from "react";
import { SessionProvider, useSession } from "next-auth/react";

const userAuthContext = createContext();
export function UserAuthContexProvider({ children }) {
  // const session = useSession();
  // console.log(session);

  const [user, setuser] = useState("");
  const [response, setresponse] = useState("");
  const [verificatioIDPhone, setverificatioIDPhone] = useState({});
  const [userIDS, setuserIDS] = useState({
    token: null,
    firebaseID: null,
    ID: null,
  });

  const sendOTP = async (phoneNo) => {
    try {
      const applicationVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {},
        auth
      );
      await applicationVerifier.render();
      const verificationId = await signInWithPhoneNumber(
        auth,
        "+" + phoneNo,
        applicationVerifier
      );
      setverificatioIDPhone(verificationId);
      return { msg: "OTP send to " + phoneNo };
    } catch (error) {
      return { error: error.code };
    }
  };
  const verifyOTPServer = async (otp, name, gender) => {
    try {
      const verifyConform = await verificatioIDPhone.confirm(otp);
      console.log(verifyConform);
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL:
          gender === "Male" ? "/img/maleUser.svg" : "/img/femaleUser.svg",
      });
      const { displayName, photoURL, phoneNumber, uid } = auth.currentUser;
      await fetch("api/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: displayName,
          firebaseID: uid,
          gender: gender,
          phoneNo: phoneNumber,
          userProfile: photoURL,
        }),
      });
      localStorage.setItem("token", await auth.currentUser.getIdToken());
      localStorage.setItem("firebaseuid", auth.currentUser.uid);
      return { msg: "Sign In Successfull" };
    } catch (error) {
      return { error: error.code };
    }
  };

  function logOut() {
    localStorage.removeItem("firebaseuid");
    localStorage.removeItem("token");
    localStorage.removeItem("id");

    return signOut(auth);
  }
  async function signWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, googleAuthProvider);
    const { displayName, photoURL, email, uid } = res.user;

    const res2 = await fetch("/api/signIn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: displayName,
        firebaseID: uid,
        email,
        userProfile: photoURL,
      }),
    });
    const userData = await res2.json();
    localStorage.setItem("token", await res.user.getIdToken());
    localStorage.setItem("firebaseuid", res.user.uid);
    localStorage.setItem("id", userData._id);
    setresponse(Math.random());
    return res;
  }

  function resetPassword(email) {
    const actionCodeSettings = {
      url: baseUrl + "?email=" + email,
      handleCodeInApp: true,
    };
    return sendPasswordResetEmail(auth, email, actionCodeSettings);
  }

  useEffect(() => {
    setuserIDS({
      token: localStorage.getItem("token"),
      firebaseID: localStorage.getItem("firebaseuid"),
      ID: localStorage.getItem("id"),
    });
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setuser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{
        user,
        logOut,
        userIDS,
        sendOTP,
        verifyOTPServer,
        signWithGoogle,
        resetPassword,
      }}
    >
      <SessionProvider>{children}</SessionProvider>
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
