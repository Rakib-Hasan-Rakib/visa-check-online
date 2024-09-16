import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/home/Home";
import Check from "../pages/visaCheck/Check";
import UploadData from "../pages/uploadData/UploadData";
import PrimaryResult from "../pages/result/PrimaryResult";

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
      {
        path: "/check",
        element: <Check />,
      },
      {
        path: "/primary",
        element: <PrimaryResult />,
      },
      {
        path: "/upload",
        element: <UploadData />,
      },
      // {
      //   path: "/check/:passportNum",
      //   element: <CheckResult />,
      // },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default Route;
