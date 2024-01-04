import { AuctionList } from "../../../components/organisms";
import { AUCTION_STATUS } from "../../../enums";
import { useAuctionService } from "../../../services";

const PendingAuctionPage = () => {
  const { auctions, loading } = useAuctionService();

  const pendingAuctions = auctions?.filter(
    (auction) => auction.status === AUCTION_STATUS.PENDING
  );

  return (
    <AuctionList
      auctionPost={pendingAuctions}
      dataLoading={loading}
      title="Pending Auctions"
    />
  );
};

export { PendingAuctionPage };
