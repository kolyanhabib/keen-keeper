import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";

import FriendsProvider from "./context/FriendsProvider";
import { router } from "./routes/route";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />
    </FriendsProvider>
  </StrictMode>,
);
