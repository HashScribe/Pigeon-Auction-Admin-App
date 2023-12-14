import { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { IBirdCard } from "../../../interfaces";
import CircularProgress from "@mui/material/CircularProgress";
import { StyledImageContainer, StyledLoadingOverlay } from "./bird-card.style";

const BirdCard = ({
  image,
  title,
  postedBy,
  loftName,
  startingPrice,
}: IBirdCard) => {
  const [loading, setLoading] = useState(true);

  return (
    <Card sx={{ maxWidth: 265, minWidth: 265 }}>
      <StyledImageContainer>
        {loading && (
          <StyledLoadingOverlay>
            <CircularProgress />
          </StyledLoadingOverlay>
        )}

        <CardMedia
          component="img"
          height="200"
          alt="Nicola Sturgeon on a TED talk stage"
          image={image}
          onLoad={() => setLoading(false)}
        />
      </StyledImageContainer>

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Grid>
          <Grid container flexDirection={"row"} gap={1}>
            <Typography
              variant="body2"
              color={"text.secondary"}
              fontWeight={"bold"}
            >
              Posted by:{" "}
            </Typography>

            <Typography variant="body2" color={"text.secondary"}>
              {postedBy}
            </Typography>
          </Grid>
          <Grid container flexDirection={"row"} gap={1}>
            <Typography
              variant="body2"
              color={"text.secondary"}
              fontWeight={"bold"}
            >
              Loft Name:{" "}
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              {loftName}
            </Typography>
          </Grid>
          <Grid container flexDirection={"row"} gap={1}>
            <Typography
              variant="body2"
              color={"text.secondary"}
              fontWeight={"bold"}
            >
              Starting Price:{" "}
            </Typography>
            <Typography variant="body2" color={"text.secondary"}>
              LKR: {startingPrice}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Grid xs={12} width={"100%"}>
          <Button variant="contained" size="small" fullWidth>
            Preview
          </Button>
        </Grid>
        <Grid
          direction="row"
          sx={{ display: "flex" }}
          justifyContent={"center"}
          gap={3}
          width={"100%"}
        >
          <Grid xs={5} textAlign="center">
            <Button variant="contained" size="small" fullWidth>
              Approve
            </Button>
          </Grid>
          <Grid xs={5} textAlign="center">
            <Button size="small" variant="outlined" fullWidth>
              Decline
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export { BirdCard };
