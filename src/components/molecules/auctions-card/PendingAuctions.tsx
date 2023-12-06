import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
  Grid,
} from "@mui/material";
import { useGetPosts } from "../../../services/getPostTest.services";
import { useUsers } from "../../../services/getUsers.services";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

const PendingAuctions = () => {
  const { auctions } = useGetPosts();
  const { users } = useUsers();

  console.log(auctions);

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      gap={4}
      sx={{ paddingTop: "5rem" }}
    >
      {auctions &&
        users &&
        users.length > 0 &&
        auctions.map((auction, index) => {
          return (
            <Card sx={{ width: 350, borderRadius: "8px" }} key={index + 1}>
              <CardMedia
                sx={{
                  height: 350,
                }}
                image={auction.mainImage}
                title={auction.birdName}
              />

              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  fontWeight="bold"
                >
                  {auction.ringName}
                  <Box sx={{ paddingLeft: "0.8rem", display: "inline-block" }}>
                    {auction.ringNumber}-{auction.bornYear}
                  </Box>
                </Typography>
                <Stack gap={2}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    Posted by: {users[index]?.fancierName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    Loft: {users[index]?.loftName}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="bold"
                  >
                    Starting Price: LKR.
                    {auction.bids?.length
                      ? auction.bids?.[auction.bids.length - 1]?.bidPrice
                      : "0"}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontWeight="bold"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Status:
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "3px 10px",
                        color: "black",
                        borderRadius: "10px",
                      }}
                    >
                      Pending
                      <PendingActionsIcon />
                    </Box>
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              >
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    backgroundColor: "secondary.main",
                    width: "100%",
                    color: "black",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "#616161",
                      color: "white",
                    },
                  }}
                >
                  Preview
                </Button>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      padding: "5px 40px",
                      fontWeight: "bold",
                      backgroundColor: "#388e3c",
                      "&:hover": {
                        background: "#66bb6a",
                        color: "white",
                      },
                    }}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      padding: "5px 40px",
                      fontWeight: "bold",
                      backgroundColor: "#d32f2f",
                      "&:hover": {
                        background: "#ef5350",
                        color: "white",
                      },
                    }}
                  >
                    Decline
                  </Button>
                </Box>
              </CardActions>
            </Card>
          );
        })}
    </Grid>
  );
};

export default PendingAuctions;
