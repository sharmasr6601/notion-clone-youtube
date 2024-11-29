import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCdt_9f2SXOL-m6i5FnypXlOlPy9crGcsE",
    authDomain: "notion-clone-1c290.firebaseapp.com",
    projectId: "notion-clone-1c290",
    storageBucket: "notion-clone-1c290.firebasestorage.app",
    messagingSenderId: "546598047674",
    appId: "1:546598047674:web:5089d772cc99fd781e1783"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);
  
  export {db};