import { Timestamp } from "@firebase/firestore-types";
import { IBird } from "./IBird";
import { IBid } from "./IBid";
import { AUCTION_STATUS } from "../enums";

interface IAuctionPost extends IBird {
  id: string;
  userId: string;
  startingBid: string;
  currentBid: string;
  bids?: IBid[];
  startsAt: Timestamp;
  endsAT: Timestamp;
  status?: AUCTION_STATUS;
}

export { IAuctionPost };
