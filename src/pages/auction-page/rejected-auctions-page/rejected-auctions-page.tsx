import { AuctionList } from "../../../components/organisms";
import { AUCTION_STATUS } from "../../../enums";
import { useAuctionService } from "../../../services";

const RejectedAuctionsPage = () => {
  const { auctions, loading } = useAuctionService();

  const approvedAuctions = auctions?.filter(
    (auction) => auction.status === AUCTION_STATUS.REJECTED
  );

  return (
    <AuctionList
      auctionPost={approvedAuctions}
      dataLoading={loading}
      title="Rejected Auctions"
    />
  );
};

export { RejectedAuctionsPage };
