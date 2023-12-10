import { useEffect } from "react";
import { LiveAuctionView } from "../../../components/organisms";
import { useAuctionService } from "../../../services";
const LiveAuctionPage = () => {
  const { auctions } = useAuctionService();
  useEffect(() => {
    console.log(auctions);
  }, [auctions]);
  return <LiveAuctionView />;
};

export { LiveAuctionPage };
