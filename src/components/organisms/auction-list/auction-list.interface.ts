import { IUserAndAuction } from "../../../interfaces";
interface IAuctionList {
  auctionPost: IUserAndAuction[];
  dataLoading: boolean;
  title: string;
}
export { IAuctionList };
