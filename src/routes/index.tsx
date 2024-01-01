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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="users" element={<UsersPage />} />
        <Route path="/live-auction" element={<LiveAuctionPage />} />
        <Route path="/auction-preview" element={<AuctionPreviewPage />} />
      </Route>
    </Route>
  )
);

export default router;
