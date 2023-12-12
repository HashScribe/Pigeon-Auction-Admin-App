import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

const CardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 300, width: 265 }}>
      <Skeleton animation="wave" variant="rectangular" height={200} />
      <CardContent>
        <Skeleton animation="wave" height={20} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={20} width="80%" />
        <Skeleton animation="wave" height={20} width="80%" />
      </CardContent>
    </Card>
  );
};

export { CardSkeleton };
