import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PageTitle, CardSkeleton } from "../../../atoms";
import { BirdCard } from "../../../molecules";
import { ILiveAuctionView } from "./live-auction.interface";
const LiveAuctionView = ({ auctionPost, dataLoading }: ILiveAuctionView) => {
  const test = Array.from({ length: 10 });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} justifyContent={"center"} textAlign={"center"}>
          <PageTitle title="Live Auctions" />
        </Grid>
        <Grid item xs={12} gap={3} container justifyContent={"center"}>
          {dataLoading ? (
            <>
              {test.map(() => (
                <CardSkeleton />
              ))}
            </>
          ) : (
            <>
              {auctionPost.map((auction) => (
                <BirdCard
                  image={auction.mainImage}
                  title={auction.birdName}
                  postedBy={auction.userName}
                  loftName={auction.loftName}
                  startingPrice={auction.startingBid}
                />
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export { LiveAuctionView };
