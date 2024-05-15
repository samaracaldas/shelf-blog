import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqnj_VEIKVMvMJyKDNDquNZkJkMohYCrI",
  authDomain: "mini-blog-ebac4.firebaseapp.com",
  projectId: "mini-blog-ebac4",
  storageBucket: "mini-blog-ebac4.appspot.com",
  messagingSenderId: "1070451672531",
  appId: "1:1070451672531:web:f141eecd96b8c24b975b26"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };