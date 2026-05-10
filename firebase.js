import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBhGvRiYWdGlcOxG4wxMuum8nue8pJak_4",
  
  apiKey: "AIzaSyBhGvRiYWdGlcOxG4wxMuum8nue8pJak_4",
  authDomain: "traveloop-bb25a.firebaseapp.com",
  projectId: "traveloop-bb25a",
  storageBucket: "traveloop-bb25a.firebasestorage.app",
  messagingSenderId: "882544358693",
  appId: "1:882544358693:web:5a33beaca83d30bb2a16cc",
  
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);