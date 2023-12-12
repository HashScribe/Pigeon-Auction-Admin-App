import { Timestamp } from "@firebase/firestore-types";

interface IExtraUserDetails {
  fancierName: string;
  loftName: string;
  DOB: Timestamp;
  phoneNumber: string;
  province: string;
  district: string;
  address: string;
  description: string;
}

export { IExtraUserDetails };
