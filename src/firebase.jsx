import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "samir-web.firebaseapp.com",
    projectId: "samir-web",
    storageBucket: "samir-web.appspot.com",
    messagingSenderId: "83733562546",
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);