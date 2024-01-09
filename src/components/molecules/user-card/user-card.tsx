import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { IUser } from "../../../interfaces";
import {
  StyledImageContainer,
  StyledLoadingOverlay,
} from "../bird-card/bird-card.style";
import avatar from "../../../assets/avatar.png";

export const UserCard = ({ user }: { user: IUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Card sx={{ maxWidth: 265, minWidth: 265 }}>
      <StyledImageContainer>
        {isLoading && (
          <StyledLoadingOverlay>
            <CircularProgress />
          </StyledLoadingOverlay>
        )}

        <CardMedia
          component="img"
          height="200"
          alt="Nicola Sturgeon on a TED talk stage"
          image={user.photoURL}
          src={!user.photoURL ? avatar : undefined}
          onLoad={() => {
            setIsLoading(false);
          }}
          {...(!user.photoURL && {
            sx: { objectFit: "contain" },
          })}
        />
      </StyledImageContainer>

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {user.username || "No Name"}
        </Typography>
        <Grid>
          <Grid container flexDirection={"row"} gap={1}>
            <Typography
              variant="body2"
              color={"text.secondary"}
              fontWeight={"bold"}
            >
              Loft name:
            </Typography>

            <Typography variant="body2" color={"text.secondary"}>
              {user.loftName || "Unknown"}
            </Typography>
          </Grid>
          <Grid container flexDirection={"row"} gap={1}>
            <Typography
              variant="body2"
              color={"text.secondary"}
              fontWeight={"bold"}
            >
              District:
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              {user.district || "Unknown"}
            </Typography>
          </Grid>
          <Grid container flexDirection={"row"} gap={1}>
            <Typography
              variant="body2"
              color={"text.secondary"}
              fontWeight={"bold"}
            >
              Phone Number:
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              {user.phoneNumber || "Unknown"}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
