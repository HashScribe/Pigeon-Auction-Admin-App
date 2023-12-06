import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANR6FSftyM4uec41OAUNMsMv_G9xz1jjQ",
  authDomain: "pigeon-auction-b0c45.firebaseapp.com",
  projectId: "pigeon-auction-b0c45",
  storageBucket: "pigeon-auction-b0c45.appspot.com",
  messagingSenderId: "359838590324",
  appId: "1:359838590324:web:20f07fc66e64efdb24f821",
  measurementId: "G-HEFW17SQYV",
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { app };
export {db};
