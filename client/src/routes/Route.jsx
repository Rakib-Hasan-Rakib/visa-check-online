import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/home/Home";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/login", element: <Login /> },
      // { path: "/register", element: <Register /> },
      // {
      //   path: "/uploadData",
      //   element: <Upload />,
      // },
      // {
      //   path: "/check",
      //   element: <Check />,
      // },
      // {
      //   path: "/check/:passportNum",
      //   element: <CheckResult />,
      // },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default Route;
