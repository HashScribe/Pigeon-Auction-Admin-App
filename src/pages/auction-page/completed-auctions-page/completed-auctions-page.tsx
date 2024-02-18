import { AuctionList } from "../../../components/organisms";
import { AUCTION_STATUS } from "../../../enums";
import { useAuctionService } from "../../../services";

const CompletedAuctionsPage = () => {
  const { auctions, loading } = useAuctionService();

  const completedAuctions = auctions?.filter(
    (auction) => auction.status === AUCTION_STATUS.COMPLETED
  );

  return (
    <AuctionList
      auctionPost={completedAuctions}
      dataLoading={loading}
      title="Completed Auctions"
    />
  );
};

export { CompletedAuctionsPage };
