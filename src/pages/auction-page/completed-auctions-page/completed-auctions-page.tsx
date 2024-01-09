import { AuctionList } from "../../../components/organisms";
import { AUCTION_STATUS } from "../../../enums";
import { useAuctionService } from "../../../services";

const CompletedAuctionsPage = () => {
  const { auctions, loading } = useAuctionService();

  const approvedAuctions = auctions?.filter(
    (auction) => auction.status === AUCTION_STATUS.APPROVED
  );

  return (
    <AuctionList
      auctionPost={approvedAuctions}
      dataLoading={loading}
      title="Completed Auctions"
    />
  );
};

export { CompletedAuctionsPage };
