import Typography from "@mui/material/Typography";
import { ITitle } from "./title.interface";

const Title = ({ children }: ITitle) => {
  return (
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      {children}
    </Typography>
  );
};
export { Title };
