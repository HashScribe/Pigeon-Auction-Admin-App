import { IAuctionPost, IUser, IUserAndAuction } from "../interfaces";
const combineAuctionWithUserDetails = (
  auctionPosts: IAuctionPost[],
  users: IUser[]
): IUserAndAuction[] => {
  const allAuctions = auctionPosts.map((auction) => {
    const user = users.find((u) => u.uid === auction.userId);

    const auctionWithUser = {
      ...auction,
      userName: user?.username ?? "unknown",
      loftName: user?.loftName ?? "unknown",
      FCMToken: user?.FCMToken,
    };
    return auctionWithUser;
  });

  return allAuctions;
};

export { combineAuctionWithUserDetails };
