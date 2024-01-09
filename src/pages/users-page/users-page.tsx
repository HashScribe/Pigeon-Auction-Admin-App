import { UsersList } from "../../components/organisms";
import { useUserService } from "../../services/users.service";

const UsersPage = () => {
  const { users, loading } = useUserService();

  return <UsersList users={users} dataLoading={loading} />;
};
export { UsersPage };
