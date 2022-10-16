// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ_OJT5V6foHOL1DkSJZrcX212CbpKSDM",
  authDomain: "auth-context-daisyui.firebaseapp.com",
  projectId: "auth-context-daisyui",
  storageBucket: "auth-context-daisyui.appspot.com",
  messagingSenderId: "748542550374",
  appId: "1:748542550374:web:209970b13beb8afc60a8a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;