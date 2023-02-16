import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4G0oe5DtC9E5ALOQt4fsR-lOVXaUGwPs",
  authDomain: "chatgpt-custom.firebaseapp.com",
  projectId: "chatgpt-custom",
  storageBucket: "chatgpt-custom.appspot.com",
  messagingSenderId: "493863270236",
  appId: "1:493863270236:web:59100d47a0f42d62c5f399"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
// database object
const db = getFirestore(app);

export default db