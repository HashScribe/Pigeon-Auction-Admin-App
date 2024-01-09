import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { firestoreDB } from "../config";
import { IUser } from "../interfaces";
const useUserService = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestoreDB, "users"));
      const data = querySnapshot.docs.map((doc) => doc.data() as IUser);

      setUsers(data);
    } catch (err) {
      console.error("Error fetching auctions:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return { users, loading, error };
};

export { useUserService };
