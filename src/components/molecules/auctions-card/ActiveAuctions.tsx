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

const ActiveAuctions = () => {
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
                      Active
                    </Box>
                  </Typography>
                </Stack>
              </CardContent>
              <CardActions>
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
              </CardActions>
            </Card>
          );
        })}
    </Grid>

    // <TableContainer component={Paper}>
    //   <Table sx={{ minWidth: 850 }} aria-label="auction table">
    //     <TableHead>
    //       <TableRow>
    //         <TableCell
    //           align="center"
    //           sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
    //         >
    //           bird Main Image
    //         </TableCell>
    //         <TableCell
    //           align="center"
    //           sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
    //         >
    //           Bird Name
    //         </TableCell>
    //         <TableCell
    //           align="center"
    //           sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
    //         >
    //           Bird Ring Number
    //         </TableCell>
    //         <TableCell
    //           align="center"
    //           sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
    //         >
    //           Owner
    //         </TableCell>
    //         <TableCell
    //           align="center"
    //           sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
    //         >
    //           Status
    //         </TableCell>
    //         <TableCell
    //           align="center"
    //           sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
    //         >
    //           Current Bid
    //         </TableCell>
    //         <TableCell
    //           align="center"
    //           sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
    //         >
    //           Ends In
    //         </TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {auctions &&
    //         users &&
    //         users.length > 0 &&
    //         auctions.map((auction, index) => {
    //           const endDate = auction.endsAT.toDate();

    //           return (
    //             <TableRow
    //               key={auction.id}
    //               sx={{
    //                 "&:last-child td, &:last-child th": {
    //                   border: 0,
    //                 },
    //               }}
    //             >
    //               <TableCell
    //                 align="center"
    //                 sx={{
    //                   border: "none",
    //                   fontWeight: "bold",
    //                   display: "flex",
    //                   alignItems: "center",
    //                   justifyContent: "center",
    //                 }}
    //               >
    //                 <Avatar src={auction.mainImage} />
    //               </TableCell>
    //               <TableCell
    //                 align="center"
    //                 sx={{ border: "none", fontWeight: "bold" }}
    //               >
    //                 {auction.birdName}
    //               </TableCell>
    //               <TableCell
    //                 align="center"
    //                 sx={{ border: "none", fontWeight: "bold" }}
    //               >
    //                 {auction.ringNumber}
    //               </TableCell>

    //               <TableCell
    //                 align="center"
    //                 sx={{ border: "none", fontWeight: "bold" }}
    //               >
    //                 {users[index]?.fancierName}
    //               </TableCell>

    //               <TableCell
    //                 align="center"
    //                 sx={{ border: "none", fontWeight: "bold" }}
    //               >
    //                 Active
    //               </TableCell>
    //               <TableCell
    //                 align="center"
    //                 sx={{ border: "none", fontWeight: "bold" }}
    //               >
    //                 {auction.bids?.length
    //                   ? auction.bids?.[auction.bids.length - 1]?.bidPrice
    //                   : "No Bids"}
    //               </TableCell>
    //               <TableCell
    //                 align="center"
    //                 sx={{ border: "none", fontWeight: "bold" }}
    //               >
    //                 {endDate.toLocaleDateString()}
    //               </TableCell>
    //             </TableRow>
    //           );
    //         })}
    //     </TableBody>
    //   </Table>
    // </TableContainer>
  );
};

export default ActiveAuctions;
