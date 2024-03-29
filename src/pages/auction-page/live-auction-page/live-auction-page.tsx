import { AuctionList } from "../../../components/organisms";
import { AUCTION_STATUS } from "../../../enums";
import { useAuctionService } from "../../../services";

const LiveAuctionPage = () => {
  const { auctions, loading } = useAuctionService();

  const liveAuctions = auctions?.filter(
    (auction) => auction.status === AUCTION_STATUS.LIVE
  );

  return (
    <AuctionList
      auctionPost={liveAuctions}
      dataLoading={loading}
      title="Live Auctions"
    />
  );
};

export { LiveAuctionPage };
