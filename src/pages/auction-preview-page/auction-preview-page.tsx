import { useLocation } from "react-router";
import { AuctionPreviewView } from "../../components/organisms";
import { IUserAndAuction } from "../../interfaces";

export const AuctionPreviewPage = () => {
  const location = useLocation();

  const auction: IUserAndAuction = location.state.auction;

  return (
    <div>
      <AuctionPreviewView auction={auction} />
    </div>
  );
};
