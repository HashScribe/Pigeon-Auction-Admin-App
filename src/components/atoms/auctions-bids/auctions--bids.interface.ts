import FirebaseFirestoreTypes from "firebase/firestore";

interface IAuctionBids {
    bidDate: FirebaseFirestoreTypes.Timestamp;
    bidId: string;
    bidPrice: string;
    biddedByUserId: string;
    biddedByUsername: string;
}

export {IAuctionBids};