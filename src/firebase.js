import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDZAI3NG6P6srtjponsZhC7mTfyom8rig",
  authDomain: "login-41bcd.firebaseapp.com",
  databaseURL: "https://login-41bcd.firebaseio.com",
  projectId: "login-41bcd",
  storageBucket: "login-41bcd.appspot.com",
  messagingSenderId: "210638992474",
  appId: "1:210638992474:web:777aedaec9a1b1ed10d463",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
