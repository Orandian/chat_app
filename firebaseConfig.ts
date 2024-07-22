// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getReactNativePersistence, initializeAuth } from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaC6nbkyTKSMRNv7AoKZcQyH3LXMVYUAA",
  authDomain: "fir-chat-5c6fb.firebaseapp.com",
  projectId: "fir-chat-5c6fb",
  storageBucket: "fir-chat-5c6fb.appspot.com",
  messagingSenderId: "388675293428",
  appId: "1:388675293428:web:96bd3eb73c981d49a90ea1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

export const db = getFirestore(app);

export const userRef = collection(db, "users");
export const roomRef = collection(db, "rooms");