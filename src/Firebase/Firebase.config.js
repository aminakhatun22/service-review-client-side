// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

    // appiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId,
    apiKey: "AIzaSyDdbi4VUAFuFu7YLzMmcWITCSsMqhHSON4",
    authDomain: "aahar-client-side.firebaseapp.com",
    projectId: "aahar-client-side",
    storageBucket: "aahar-client-side.appspot.com",
    messagingSenderId: "302458854360",
    appId: "1:302458854360:web:17e61021c6b966d1e570ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;