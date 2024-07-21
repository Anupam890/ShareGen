import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBQ39PvmDCz3gTk-Ko1LaexxSsC6p88gtA",
    authDomain: "sharegen-7b2d6.firebaseapp.com",
    projectId: "sharegen-7b2d6",
    storageBucket: "sharegen-7b2d6.appspot.com",
    messagingSenderId: "964527969301",
    appId: "1:964527969301:web:2227098e0f03523ce76a1c",
    measurementId: "G-N81811KSRR"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);