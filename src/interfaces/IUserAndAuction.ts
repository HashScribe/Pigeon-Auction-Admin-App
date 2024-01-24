import { IAuctionPost } from "./IAuctionPost";
interface IUserAndAuction extends IAuctionPost {
  userName: string;
  loftName: string;
  FCMToken?: string;
}

export { IUserAndAuction };
