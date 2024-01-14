import { Box, Grid } from "@mui/material";
import { CardSkeleton, PageTitle } from "../../atoms";
import { UserCard } from "../../molecules";
import { IUserList } from "./users-list.interface";

export const UsersList = ({ users, dataLoading }: IUserList) => {
  const skeletons = Array.from({ length: 10 });
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4} justifyContent="center" textAlign="center">
          <PageTitle title="Users" />
        </Grid>
        <Grid item xs={12} gap={3} container justifyContent="center">
          {dataLoading
            ? skeletons.map(() => <CardSkeleton />)
            : users?.map((user) => <UserCard user={user} />)}
        </Grid>
      </Grid>
    </Box>
  );
};
