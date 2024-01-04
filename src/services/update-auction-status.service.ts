import { doc, updateDoc } from "firebase/firestore";
import { firestoreDB } from "../config";
import { AUCTION_STATUS } from "../enums";

const updateAuctionStatus = async (
  postId: string,
  status: AUCTION_STATUS,
  declineMessageText: string
) => {
  try {
    const postRef = doc(firestoreDB, "Posts_Test", postId);
    await updateDoc(postRef, {
      status: status,
      ...(status === AUCTION_STATUS.REJECTED && {
        rejectedReason: declineMessageText,
      }),
    });
    return { status: 200, message: "success" };
  } catch (err) {
    return Promise.reject({ status: 500, message: "Failed" });
  }
};

export { updateAuctionStatus };
