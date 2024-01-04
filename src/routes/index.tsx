import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  ErrorPage,
  UsersPage,
  LiveAuctionPage,
  AuctionPreviewPage,
} from "../pages/index.ts";
import { Root } from "./root.tsx";
import {
  ApprovedAuctionsPage,
  CompletedAuctionsPage,
  PendingAuctionPage,
  RejectedAuctionsPage,
} from "../pages/auction-page/index.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="users" element={<UsersPage />} />
        <Route path="/live-auctions" element={<LiveAuctionPage />} />
        <Route path="/pending-auctions" element={<PendingAuctionPage />} />
        <Route path="/rejected-auctions" element={<RejectedAuctionsPage />} />
        <Route path="/approved-auctions" element={<ApprovedAuctionsPage />} />
        <Route path="/completed-auctions" element={<CompletedAuctionsPage />} />
        <Route path="/auction-preview" element={<AuctionPreviewPage />} />
      </Route>
    </Route>
  )
);

export default router;
