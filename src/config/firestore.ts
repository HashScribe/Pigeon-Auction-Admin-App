import { getFirestore } from "firebase/firestore";
import { app } from "./firebase";

const firestoreDB = getFirestore(app);

export { firestoreDB };
