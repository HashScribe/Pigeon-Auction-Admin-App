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
import { useMemo, useState } from "react";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { AUCTION_STATUS } from "../../../enums";
import { IUserAndAuction } from "../../../interfaces";
import { updateAuctionStatus } from "../../../services/update-auction-status.service";
import { ConfirmationModal } from "../../molecules";
import { useSnackbar } from "../snackbar-provider";
import "./style.css";
import { sendNotification } from "../../../utils/send-notification";

interface Props {
  auctionData: IUserAndAuction;
}

export const AuctionPreviewView: React.FC<Props> = ({ auctionData }) => {
  const navigate = useNavigate();

  const snackbar = useSnackbar();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const images = [
    {
      img: auctionData.mainImage,
      title: "Main Image",
    },
    {
      img: auctionData.leftWingImage,
      title: "Left Wing Image",
    },
    {
      img: auctionData.rightWingImage,
      title: "Right Wing Image",
    },
    {
      img: auctionData.tailImage,
      title: "Tail Image",
    },
  ];

  const [isDescriptionVisibe, setisDescriptionVisibe] = useState(false);
  const [declineMessageText, setDeclineMessageText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auctionDescription = useMemo(() => {
    if (!auctionData?.description) {
      return;
    }

    const description =
      !isDescriptionVisibe && auctionData.description.length > 100
        ? auctionData.description.slice(0, 100)
        : auctionData.description;

    return description;
  }, [auctionData.description, isDescriptionVisibe]);

  const auction = {
    username: auctionData?.userName,
    loftname: auctionData?.loftName,
    startingBid: auctionData?.startingBid,
    birdName: auctionData?.birdName,
    gender: auctionData?.gender,
    description: auctionDescription || "",
  };

  type IKeyLabels = keyof typeof auction;

  const keyLabels: Record<IKeyLabels, string> = {
    username: "User Name",
    loftname: "Loft Name",
    startingBid: "Starting Bid",
    birdName: "Bird Name",
    gender: "Gender",
    description: "Description",
  };

  const updateStatus = async (
    auction: IUserAndAuction,
    status: AUCTION_STATUS
  ) => {
    const isApproved = status === AUCTION_STATUS.APPROVED;

    if (!isApproved && declineMessageText.length < 15) {
      snackbar?.openSnackbar(
        "Rejection message should be more than 14 characters",
        "error"
      );
      return;
    }
    if (isConfirmationModalOpen) {
      setIsConfirmationModalOpen(false);
    }
    setIsLoading(true);

    try {
      const { status: auctionStatus } = await updateAuctionStatus(
        auction.id,
        status,
        declineMessageText
      );

      if (auctionStatus === 500) {
        throw new Error();
      }

      const message = isApproved
        ? "Auction Approved Successfully"
        : "Auction Rejected Successfully";

      snackbar?.openSnackbar(message, "success");

      const approvedNotification = {
        birdName: auction.birdName,
        FCMToken: auction.FCMToken || "",
        date: auction.startsAt.toDate().toLocaleDateString(),
        time: auction.startsAt.toDate().toLocaleTimeString(),
        notificationOwnerId: auction.userId,
      };

      const declinedNotification = {
        birdName: auction.birdName,
        FCMToken: auction.FCMToken || "",
        reason: declineMessageText,
        notificationOwnerId: auction.userId,
      };

      const notification = isApproved
        ? approvedNotification
        : declinedNotification;

      if (auction.FCMToken) {
        sendNotification(
          notification,
          isApproved
            ? "notifications-sendAuctionApprovedNotification"
            : "notifications-sendAuctionRejecteddNotification"
        );
      }
      navigate("/approved-auctions");
    } catch (err) {
      snackbar?.openSnackbar("Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  };

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
              {images.map((item) => (
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
                  {Object.entries(auction).map(([key, value]) => {
                    const isDescription = key === "description";
                    const typedKey = key as IKeyLabels;

                    return (
                      <TableRow>
                        <TableCell align="center">
                          {keyLabels[typedKey]}:
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            ...(isDescription && {
                              maxWidth: 120,
                              overflowWrap: "break-word",
                              textOverflow: "ellipsis",
                              whiteSpace: "normal",
                            }),
                          }}
                        >
                          {value}
                          {key === "description" && value.length > 100 ? (
                            <Button
                              onClick={() =>
                                setisDescriptionVisibe(!isDescriptionVisibe)
                              }
                              className={`see-${
                                !isDescriptionVisibe ? "more" : "less"
                              }-button`}
                            >
                              {!isDescriptionVisibe
                                ? "See more..."
                                : "Show less"}
                            </Button>
                          ) : null}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            {auctionData?.status === AUCTION_STATUS.PENDING ? (
              <Grid
                direction="row"
                sx={{ display: "flex" }}
                justifyContent={"center"}
                gap={3}
                mt={4}
              >
                <Grid xs={5} textAlign="center">
                  <Button
                    variant="contained"
                    size="small"
                    fullWidth
                    onClick={() =>
                      updateStatus(auctionData, AUCTION_STATUS.APPROVED)
                    }
                    disabled={isLoading}
                  >
                    Approve
                  </Button>
                </Grid>

                <Grid xs={5} textAlign="center">
                  <Button
                    size="small"
                    variant="outlined"
                    fullWidth
                    onClick={() => setIsConfirmationModalOpen(true)}
                  >
                    Decline
                  </Button>
                </Grid>
              </Grid>
            ) : null}
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
            label="Rejection Message"
            fullWidth
            variant="standard"
            onChange={(e) => setDeclineMessageText(e.target.value)}
          />
        }
        title="Reject Auction"
        bodyText="Please provide a reason for rejecting the auction request."
        onSubmit={() => updateStatus(auctionData, AUCTION_STATUS.REJECTED)}
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
