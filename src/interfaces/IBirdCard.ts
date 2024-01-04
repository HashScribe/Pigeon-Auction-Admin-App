import { IUserAndAuction } from ".";

interface IBirdCard {
  auction: IUserAndAuction;
  openModal?: () => void;
  updateStatus?: () => void;
}

export { IBirdCard };
