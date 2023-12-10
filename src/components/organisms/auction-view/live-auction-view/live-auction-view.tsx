import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { PageTitle } from "../../../atoms";
import { PrimaryCard } from "../../../molecules";
const LiveAuctionView = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} justifyContent={"center"} textAlign={"center"}>
          <PageTitle title="Live Auctions" />
        </Grid>
        <Grid item xs={12} gap={3} container justifyContent={"center"}>
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
          <PrimaryCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export { LiveAuctionView };
