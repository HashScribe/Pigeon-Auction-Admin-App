import { IExtraUserDetails } from "./IExtraUserDetails";

interface IUser extends IExtraUserDetails {
  uid: string;
  photoURL: string;
  posts?: string[];
}

export { IUser };
