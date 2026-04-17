import { createBrowserRouter } from "react-router";

import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/home/Homepage";
import Timeline from "../pages/Timeline/Timeline";
import StatsPage from "../pages/stats/StatsPage";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import NotFoundPage from "../pages/notFound/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "stats",
        element: <StatsPage />,
      },
      {
        path: "friends/:id",
        element: <FriendDetails />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
