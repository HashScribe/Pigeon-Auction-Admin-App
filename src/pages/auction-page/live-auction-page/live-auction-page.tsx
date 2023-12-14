import { LiveAuctionView } from "../../../components/organisms";
import { useAuctionService } from "../../../services";

const LiveAuctionPage = () => {
  const { auctions, loading } = useAuctionService();

  return <LiveAuctionView auctionPost={auctions} dataLoading={loading} />;
};

export { LiveAuctionPage };
