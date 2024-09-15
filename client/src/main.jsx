import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./routes/Route";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={Route}></RouterProvider>
);
