// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqeNk4WVBHwDBT6tf6zSATaR3EAOTHXN0",
  authDomain: "personalportpolio.firebaseapp.com",
  projectId: "personalportpolio",
  storageBucket: "personalportpolio.appspot.com",
  messagingSenderId: "949716623031",
  appId: "1:949716623031:web:505888faa598e294887732",
  measurementId: "G-PGSYMFHNT8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export default app;
