import { IExtraUserDetails } from "./IExtraUserDetails";

interface IUser extends IExtraUserDetails {
  username: string;
  uid: string;
  photoURL: string;
  posts?: string[];
}

export { IUser };
