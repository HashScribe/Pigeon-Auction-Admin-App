import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { doc, updateDoc } from "firebase/firestore";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { firestoreDB } from "../../../config";
import { AUCTION_STATUS } from "../../../enums";
import { IUserAndAuction } from "../../../interfaces";
import { useSnackbar } from "../snackbar-provider";
import { ConfirmationModal } from "../../molecules";
import "./style.css";

interface Props {
  auction: IUserAndAuction;
}

export const AuctionPreviewView: React.FC<Props> = ({ auction }) => {
  const navigate = useNavigate();

  const snackbar = useSnackbar();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const itemData = [
    {
      img: auction.mainImage,
      title: "Main Image",
    },
    {
      img: auction.leftWingImage,
      title: "Left Wing Image",
    },
    {
      img: auction.rightWingImage,
      title: "Right Wing Image",
    },
    {
      img: auction.tailImage,
      title: "Tail Image",
    },
    {
      img: auction.leftWingImage,
      title: "Left Wing Image",
    },
  ];

  const [isDescriptionVisibe, setisDescriptionVisibe] = useState(false);
  const [declineMessageText, setDeclineMessageText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const updateAuctionStatus = async (
    postId: string,
    status: AUCTION_STATUS
  ) => {
    const isApproved = status === AUCTION_STATUS.APPROVED;

    if (!isApproved && declineMessageText.length < 26) {
      snackbar?.openSnackbar(
        "Decline message should be more than 25 characters",
        "error"
      );
      return;
    }
    if (isConfirmationModalOpen) {
      setIsConfirmationModalOpen(false);
    }
    setIsLoading(true);
    const postRef = doc(firestoreDB, "Posts_Test", postId);
    try {
      await updateDoc(postRef, {
        status: status,
        ...(status === AUCTION_STATUS.REJECTED && {
          rejectedReason: declineMessageText,
        }),
      });

      const message = isApproved
        ? "Auction Approved Successfully"
        : "Auction Rejected Successfully";

      snackbar?.openSnackbar(message, "success");
    } catch (err) {
      snackbar?.openSnackbar("Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }

    navigate("/live-auction");
  };

  const auctionDescription = useMemo(() => {
    if (!auction?.description) {
      return;
    }

    const description =
      !isDescriptionVisibe && auction.description.length > 100
        ? auction.description.slice(0, 100)
        : auction.description;

    return description;
  }, [auction.description, isDescriptionVisibe]);

  const testDescription =
    "skjdfnskjdfbjkdsbfgkjdsnfjdnfjnsdkjfnsdkjfnskdnfjklansfdnjkdsnf kjdsnd vd vzkdnjkzsdnfkjsdnfesnfenjnfdsnmc cxnmv cxnmv xcnv xck vkjd kdnfjdiowejoiwjeoiwejioewjfiojewdfoijdoifjwoiejfiojfoiwjefoiwejfoiejfoiwenfoinwefnwienfoiwenfoiwenfoiwenfiowenfionweifonweoinvvowfnoejf";

  const desc =
    !isDescriptionVisibe && testDescription.length > 100
      ? testDescription.slice(0, 100)
      : testDescription;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={14} gap={4} mt={4} pl={8} display="flex">
          <Box>
            <Swiper
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {itemData.map((item) => (
                <SwiperSlide key={item.img}>
                  <img
                    srcSet={item.img}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    style={{ height: 400, width: 400, borderRadius: 50 }}
                  />
                  <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>

          <Box component="div" mt={2}>
            <TableContainer component={Paper}>
              <Table sx={{ width: "600px" }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#000" }}>
                    <TableCell
                      sx={{
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                      colSpan={2}
                      align="center"
                    >
                      SLRPF 3043-2019 C
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left" component="th" scope="row">
                      Posted By:
                    </TableCell>
                    <TableCell align="left">{auction?.userName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" component="th" scope="row">
                      Loft:
                    </TableCell>
                    <TableCell align="left">{auction?.loftName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" component="th" scope="row">
                      Starting Price:
                    </TableCell>
                    <TableCell align="left">{auction?.startingBid}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" component="th" scope="row">
                      Bird Name:
                    </TableCell>
                    <TableCell align="left">{auction?.birdName}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" component="th" scope="row">
                      Gender:
                    </TableCell>
                    <TableCell align="left">{auction?.gender}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left" component="th" scope="row">
                      Bird Description:
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        maxWidth: 120,
                        overflowWrap: "break-word",
                        textOverflow: "ellipsis",
                        whiteSpace: "normal",
                      }}
                    >
                      {desc}
                      {(testDescription || "").length > 100 ? (
                        <Button
                          onClick={() =>
                            setisDescriptionVisibe(!isDescriptionVisibe)
                          }
                          sx={{
                            fontSize: "12px",
                            paddingLeft: !isDescriptionVisibe ? 0 : "8px",
                          }}
                        >
                          {!isDescriptionVisibe ? "See more..." : "Show less"}
                        </Button>
                      ) : null}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <Grid
              direction="row"
              sx={{ display: "flex" }}
              justifyContent={"center"}
              gap={3}
              mt={4}
            >
              {auction?.status !== AUCTION_STATUS.APPROVED ? (
                <Grid xs={5} textAlign="center">
                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    onClick={() =>
                      updateAuctionStatus(auction.id, AUCTION_STATUS.APPROVED)
                    }
                    disabled={isLoading}
                  >
                    Approve
                  </Button>
                </Grid>
              ) : null}

              <Grid xs={5} textAlign="center">
                <Button
                  size="small"
                  variant="outlined"
                  fullWidth
                  onClick={() =>
                    // updateAuctionStatus(auction.id, AUCTION_STATUS.REJECTED)
                    setIsConfirmationModalOpen(true)
                  }
                >
                  Decline
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        closeModal={() => setIsConfirmationModalOpen(false)}
        textField={
          <TextField
            autoFocus
            margin="dense"
            label="Decline Message"
            fullWidth
            variant="standard"
            onChange={(e) => setDeclineMessageText(e.target.value)}
            required
          />
        }
        title="Decline Auction"
        bodyText="Please provide a reason for rejecting the auction request."
        onSubmit={() =>
          updateAuctionStatus(auction.id, AUCTION_STATUS.REJECTED)
        }
      />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};
