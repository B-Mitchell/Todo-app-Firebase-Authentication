// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY9aRsFphVxFZTEDTRy1p9zrMkBl-bu78",
  authDomain: "auth-with-firebase-in-react.firebaseapp.com",
  projectId: "auth-with-firebase-in-react",
  storageBucket: "auth-with-firebase-in-react.appspot.com",
  messagingSenderId: "575038526353",
  appId: "1:575038526353:web:fefca0e496dcaba09f8030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app