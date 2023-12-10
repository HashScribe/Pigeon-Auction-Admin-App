import { useEffect, useState } from "react";
import { firestoreDB } from "../config";
import { collection, getDocs } from "firebase/firestore";

const useAuctionService = () => {
  const [auctions, setAuctions] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const getAllAuctions = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(firestoreDB, "Posts_Test")
      );
      const data = querySnapshot.docs.map((doc) => doc.data());
      setAuctions(data);
    } catch (err) {
      console.error("Error fetching auctions:", err);
      setError("Error fetching auctions. Please try again later.");
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
