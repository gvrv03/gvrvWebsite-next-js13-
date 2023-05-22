import { useContext } from "react";
import { createContext } from "react";
import baseUrl from "../../baseUrl";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithPopup,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";
import { useState } from "react";

const userAuthContext = createContext();
export function UserAuthContexProvider({ children }) {
  const [user, setuser] = useState("");

  async function signUp(email, password) {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    await sendEmailVerification(res.user);
    // console.log(res.user);
    return res;
  }

  function signUIn(email, password) {
    const res = signInWithEmailAndPassword(auth, email, password);
    return res;
  }
  function logOut() {
    return signOut(auth);
  }
  function signWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  function resetPassword(email) {
    const actionCodeSettings = {
      url: baseUrl + "?email=" + email,

      handleCodeInApp: true,
    };
    return sendPasswordResetEmail(auth, email, actionCodeSettings);
  }

  useEffect(() => {
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
        signUp,
        signUIn,
        logOut,
        signWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
