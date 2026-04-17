import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";

import FriendsProvider from "./context/FriendsProvider";
import { router } from "./routes/route";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" autoClose= {2000} />
    </FriendsProvider>
  </StrictMode>,
);
