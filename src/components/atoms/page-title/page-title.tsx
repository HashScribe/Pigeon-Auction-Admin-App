import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { IPageTitle } from "./page-title.interface";

const UnderlinedTitle = styled(Box)<BoxProps>(({ theme }) => ({
  position: "relative",
  display: "inline-block",

  "&::after": {
    content: '""',
    position: "absolute",
    left: "-5%", // Extend the underline to the left
    right: "-5%", // Extend the underline to the right
    bottom: -2, // Adjust the distance between text and underline
    width: "110%", // Make the underline longer
    border: `1px solid ${theme.palette.primary.main}`, // Adjust the underline style
    // borderColor: theme.palette.primary,
  },
}));

const PageTitle = ({ title }: IPageTitle) => {
  return (
    <UnderlinedTitle>
      <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
    </UnderlinedTitle>
  );
};

export { PageTitle };
