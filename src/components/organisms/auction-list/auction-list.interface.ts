import { IUserAndAuction } from "../../../interfaces";
interface ILiveAuctionView {
  auctionPost: IUserAndAuction[];
  dataLoading: boolean;
  title: string;
}
export { ILiveAuctionView };
