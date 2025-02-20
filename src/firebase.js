import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMzUBeMhptFAZUFjX3CZzmGij2TTGMiRY",
  authDomain: "coldstar-57cef.firebaseapp.com",
  projectId: "coldstar-57cef",
  storageBucket: "coldstar-57cef.firebasestorage.app",
  messagingSenderId: "902827519256",
  appId: "1:902827519256:web:de075f37c3b9d05af2426d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async() => {
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User Signed in:",result.user)
        return result.user;
    } catch (error) {
        console.error("Error in Sign in", error);
    }
}

export const logOut = async() => {
    try {
        await signOut(auth);
        console.log("User Signed Out");
    } catch (error) {
        console.error("Error Signed Out");
    }
};


export { auth }; 