import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ErrorPage } from "../pages/index.ts";
import HelloWorld from "./hello.tsx";
import { Root } from "./root.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route errorElement={<ErrorPage />}>
        <Route path="hello" element={<HelloWorld />} />
      </Route>
    </Route>
  )
);

export default router;
