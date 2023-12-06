import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ErrorPage, UsersPage } from "../pages/index.ts";
import { Root } from "./root.tsx";
import ActiveAuctions from "../components/molecules/auctions-card/ActiveAuctions.tsx";
import LiveAuctions from "../components/molecules/auctions-card/LiveAuctions.tsx";
import PendingAuctions from "../components/molecules/auctions-card/PendingAuctions.tsx";
import PastAuctions from "../components/molecules/auctions-card/PastAuctions.tsx";
import IndexPage from "../pages/index-page/index-page.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<IndexPage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="active-auctions" element={<ActiveAuctions />} />
        <Route path="live-auctions" element={<LiveAuctions />} />
        <Route path="pending-auctions" element={<PendingAuctions />} />
        <Route path="past-auctions" element={<PastAuctions />} />
      </Route>
    </Route>
  )
);

export default router;
