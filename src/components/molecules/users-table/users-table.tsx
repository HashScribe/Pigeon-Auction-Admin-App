import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box } from "@mui/material";
import { useUsers } from "../../../services/getUsers.services";
import { useGetPosts } from "../../../services/getPostTest.services";
import Skeleton from "@mui/material/Skeleton";

const UsersTable = () => {
  const { users, isLoading } = useUsers();
  const { auctions } = useGetPosts();

  console.log(users);

  return (
    <>
      {isLoading ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          min-width="850px"
          height="300px"
        />
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 850 }} aria-label="auction table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
                >
                  Fancier
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ fontWeight: "bold", fontSize: "1.3rem" }}
                >
                  Current Bid
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users &&
                auctions &&
                users.length > 0 &&
                users.map((user) => {
                  //   const endDate = auctions[index].endsAt.toDate();

                  return (
                    <TableRow
                      key={user.id}
                      sx={{
                        "&:last-child td, &:last-child th": {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell
                        align="left"
                        sx={{ border: "none", fontWeight: "bold" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            width: "12rem",
                          }}
                        >
                          <Avatar src={user.photoURL} />
                          {user.fancierName}
                        </Box>
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "none", fontWeight: "bold" }}
                      >
                        {user.phoneNumber}
                      </TableCell>
                      <TableCell
                        align="left"
                        sx={{ border: "none", fontWeight: "bold" }}
                      >
                        {user.description}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default UsersTable;
