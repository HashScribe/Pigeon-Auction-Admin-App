import { Timestamp } from "@firebase/firestore-types";
import { IBird } from "./IBird";
import { IBid } from "./IBid";

interface IAuctionPost extends IBird {
  id: string;
  userId: string;
  startingBid: string;
  currentBid: string;
  bids?: IBid[];
  startsAt: Timestamp;
  endsAT: Timestamp;
}

export { IAuctionPost };
