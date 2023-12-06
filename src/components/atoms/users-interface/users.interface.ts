import FirebaseFirestoreTypes from "firebase/firestore";

interface IUsers {
    id: string;
    dob: FirebaseFirestoreTypes.Timestamp;
    address: string;
    description: string;
    fancierName: string;
    loftName: string;
    phoneNumber: string;
    photoURL: string;
    province: string;
}

export {IUsers};