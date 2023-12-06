import { db } from "../config/index";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { IUsers } from "../components/atoms/users-interface/index";

export const useUsers = () => {
  //get Users function
  const [users, setUsers] = useState<IUsers[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const user = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as IUsers[];
        setUsers(user);
        console.log(user);
      } catch (err: any) {
        console.log(err.message);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, isLoading };
};
