import FirebaseFirestoreTypes from "firebase/firestore";
import { IAuctionBids } from "../auctions-bids/index";

interface IAuctionsPosts {
    id: string;
    bids?: IAuctionBids[];
    birdName: string;
    bornYear: string;
    description: string;
    endsAT: FirebaseFirestoreTypes.Timestamp;
    eyeImage: string;
    gender: string;
    leftWingImage: string;
    mainImage: string;
    rightWingImage: string;
    ringName: string;
    ringNumber: string;
    startsAT: FirebaseFirestoreTypes.Timestamp;
    tailImage: string;
    userId: string;
    video: string;
  }

export {IAuctionsPosts};