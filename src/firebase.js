// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getMessaging } from "firebase/messaging";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfdNUWbr3d5XBVIHJ47QGDS1GI_w5E5JQ",
  authDomain: "wgu-summit.firebaseapp.com",
  projectId: "wgu-summit",
  storageBucket: "wgu-summit.appspot.com",
  messagingSenderId: "443766700141",
  appId: "1:443766700141:web:bd2a2552af6e3485e52764",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app);

export { messaging, getToken, onMessage };
