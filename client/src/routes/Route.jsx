import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/home/Home";
import Check from "../pages/visaCheck/Check";
import UploadData from "../pages/uploadData/UploadData";
import PrimaryResult from "../pages/result/PrimaryResult";
import FinalResult from "../pages/result/FinalResult";
import Login from "../pages/login/Login";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Check /> },
      // { path: "/login", element: <Login /> },
      // { path: "/register", element: <Register /> },
      // {
      //   path: "/uploadData",
      //   element: <Upload />,
      // },
      // {
      //   path: "/",
      //   element: <Check />,
      // },
      {
        path: "/primary/:passNum",
        element: <PrimaryResult />,
      },
      {
        path: "/final/:passNum",
        element: <FinalResult />,
      },
      {
        path: "/upload",
        element: <UploadData />,
      },
      {
        path: "/login",
        element: <Login />,
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
