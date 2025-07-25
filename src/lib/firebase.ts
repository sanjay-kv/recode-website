import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAEQsOXBqhxj6i5kiUDPfn4dp_FLi7Xllg",
  authDomain: "agrimm-8b88d.firebaseapp.com",
  databaseURL: "https://awesome-github-profiles-default-rtdb.firebaseio.com",
  projectId: "agrimm-8b88d",
  storageBucket: "agrimm-8b88d.appspot.com",
  messagingSenderId: "280771714238",
  appId: "1:280771714238:web:fbbe181a6b34ab8d7912ef",
  measurementId: "G-Q3MCSKGTR9"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);

// Only initialize analytics in the browser
// if (typeof window !== "undefined") {
//   const analytics = getAnalytics(app);
// }

export { app, auth };