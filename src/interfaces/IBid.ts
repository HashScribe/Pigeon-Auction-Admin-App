import { Timestamp } from "@firebase/firestore-types";

interface IBid {
  bidId: string;
  biddedByUserId: string;
  biddedByUsername: string;
  biddedBirdId: string;
  bidPrice: string;
  bidDate: Timestamp;
}
export { IBid };
