import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const PrimaryCard = () => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/308065631/1800"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Grid xs={12} width={"100%"}>
          <Button variant="contained" size="small" fullWidth>
            Preview
          </Button>
        </Grid>
        <Grid container direction="row" justifyContent="center" gap={3}>
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

export { PrimaryCard };
