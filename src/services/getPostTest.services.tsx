import { db } from "../config/index";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { IAuctionsPosts } from "../components/atoms/auctions-interface/index";

export const useGetPosts = () => {
  //get Posts_Tests function
  const [auctions, setAuctions] = useState<IAuctionsPosts[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Posts_Test"));
        const auctions = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as IAuctionsPosts[];
        setAuctions(auctions);
        console.log(auctions);
      } catch (err: any) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { auctions, isLoading };
};
