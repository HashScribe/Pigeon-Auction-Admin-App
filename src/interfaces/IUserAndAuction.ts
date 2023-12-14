import { IAuctionPost } from "./IAuctionPost";
interface IUserAndAuction extends IAuctionPost {
  userName: string;
  loftName: string;
}

export { IUserAndAuction };
