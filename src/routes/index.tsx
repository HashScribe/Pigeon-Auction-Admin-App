import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ErrorPage, UsersPage, LiveAuctionPage } from "../pages/index.ts";
import { Root } from "./root.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="users" element={<UsersPage />} />
        <Route path="/live-auction" element={<LiveAuctionPage />} />
      </Route>
    </Route>
  )
);

export default router;
