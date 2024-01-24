import { apiInstance } from "../config/api-instance.config";

export const sendNotification = async (
  auctionDetails: Record<string, string>,
  endpoint: string
) => {
  await apiInstance.post(endpoint, auctionDetails);
};
