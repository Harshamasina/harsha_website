import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAhJVbcI6EnFrjuSRbOOWYUuGDE9LtbjRE",
    authDomain: "harsha-portfolio-9572c.firebaseapp.com",
    projectId: "harsha-portfolio-9572c",
    storageBucket: "harsha-portfolio-9572c.appspot.com",
    messagingSenderId: "330267948280",
    appId: "1:330267948280:web:48a0d1d99be5e1dcaaf70d",
    measurementId: "G-BS8SXMKLTN"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);