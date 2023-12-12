import { useEffect, useState } from "react";
import { firestoreDB } from "../config";
import { collection, getDocs } from "firebase/firestore";
import { IAuctionPost, IUserAndAuction } from "../interfaces";
import { getUserById } from "./utils.service";
import {
  getUniqueValuesFromArray,
  combineAuctionWithUserDetails,
} from "../utils";
const useAuctionService = () => {
  const [auctions, setAuctions] = useState<Array<IUserAndAuction>>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getAllAuctions = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(firestoreDB, "Posts_Test")
      );
      const data = querySnapshot.docs.map((doc) => doc.data() as IAuctionPost);
      const userIds = querySnapshot.docs.map((doc) => doc.data().userId);
      const uniqueUserIds = getUniqueValuesFromArray(userIds);
      const users = await getUserById(uniqueUserIds);
      const fullAuctionDetails = combineAuctionWithUserDetails(data, users);

      setAuctions(fullAuctionDetails);
    } catch (err) {
      console.error("Error fetching auctions:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllAuctions();
  }, []);

  return { auctions, loading, error };
};

export { useAuctionService };
