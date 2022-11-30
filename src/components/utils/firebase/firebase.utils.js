//Setting up firebase

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx2e2bBvAWfzPHnIh_6IGcqfm4MZbJLOk",
  authDomain: "star-ecom.firebaseapp.com",
  projectId: "star-ecom",
  storageBucket: "star-ecom.appspot.com",
  messagingSenderId: "485213297380",
  appId: "1:485213297380:web:e9e8ada42d9d5d1774aaf1",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
