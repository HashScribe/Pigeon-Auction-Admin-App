import { AuctionList } from "../../../components/organisms";
import { AUCTION_STATUS } from "../../../enums";
import { useAuctionService } from "../../../services";

const RejectedAuctionsPage = () => {
  const { auctions, loading } = useAuctionService();

  const rejectedAuctions = auctions?.filter(
    (auction) => auction.status === AUCTION_STATUS.REJECTED
  );

  return (
    <AuctionList
      auctionPost={rejectedAuctions}
      dataLoading={loading}
      title="Rejected Auctions"
    />
  );
};

export { RejectedAuctionsPage };
