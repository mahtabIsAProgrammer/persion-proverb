import { Home } from "./components/pages/Home";
import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [{ index: true, element: <Home /> }],
  },
];
