import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { CardSkeleton, PageTitle } from "../../atoms";
import { BirdCard, ConfirmationModal } from "../../molecules";
import { IAuctionList } from "./auction-list.interface";
import { useState } from "react";
import { Backdrop, CircularProgress, TextField } from "@mui/material";
import { IUserAndAuction } from "../../../interfaces";
import { useSnackbar } from "../snackbar-provider";
import { AUCTION_STATUS } from "../../../enums";
import { updateAuctionStatus } from "../../../services/update-auction-status.service";
import { useNavigate } from "react-router";
const AuctionList = ({ auctionPost, dataLoading, title }: IAuctionList) => {
  const skeletons = Array.from({ length: 10 });

  const snackbar = useSnackbar();

  const navigate = useNavigate();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [declineMessageText, setDeclineMessageText] = useState("");

  const [pressedAuction, setPressedAuction] = useState<
    IUserAndAuction | undefined
  >(undefined);

  const updateStatus = async (postId: string, status: AUCTION_STATUS) => {
    const isApproved = status === AUCTION_STATUS.APPROVED;

    if (!isApproved && declineMessageText.length < 15) {
      snackbar?.openSnackbar(
        "Decline message should be more than 14 characters",
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
        postId,
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
      navigate("/approved-auctions");
    } catch (err) {
      snackbar?.openSnackbar("Something went wrong", "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} justifyContent="center" textAlign="center">
          <PageTitle title={title} />
        </Grid>
        <Grid item xs={12} gap={3} container justifyContent="center">
          {dataLoading
            ? skeletons.map(() => <CardSkeleton />)
            : auctionPost.map((auction) => (
                <BirdCard
                  auction={auction}
                  {...(auction.status === AUCTION_STATUS.PENDING && {
                    openModal: () => {
                      setPressedAuction(auction);
                      setIsConfirmationModalOpen(true);
                    },
                  })}
                  updateStatus={() =>
                    updateStatus(auction.id, AUCTION_STATUS.APPROVED)
                  }
                />
              ))}
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
          />
        }
        title="Decline Auction"
        bodyText="Please provide a reason for rejecting the auction request."
        onSubmit={() => {
          if (!pressedAuction) {
            return;
          }
          updateStatus(pressedAuction.id, AUCTION_STATUS.REJECTED);
        }}
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

export { AuctionList };
