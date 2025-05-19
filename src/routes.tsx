import { Home } from "./components/pages/Home";
import type { RouteObject } from "react-router-dom";
import { Proverbs } from "./components/pages/Proverbs";
import { ProverbDetails } from "./components/pages/ProverbDetails";
import { ProverbRandom } from "./components/pages/ProverbRandom";

export const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      {
        path: "/proverbs",
        children: [
          { index: true, element: <Proverbs /> },
          { path: ":id", element: <ProverbDetails /> },
          { path: "random", element: <ProverbRandom /> },
        ],
      },
    ],
  },
];
