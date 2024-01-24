import { IExtraUserDetails } from "./IExtraUserDetails";

interface IUser extends IExtraUserDetails {
  username: string;
  uid: string;
  photoURL: string;
  posts?: string[];
  FCMToken?: string;
}

export { IUser };
