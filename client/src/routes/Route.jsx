import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Check from "../pages/visaCheck/Check";
import UploadData from "../pages/uploadData/UploadData";
import PrimaryResult from "../pages/result/PrimaryResult";
import Login from "../pages/login/Login";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Check /> },
      {
        path: "/primary/:passNum",
        element: <PrimaryResult />,
      },
      {
        path: "/upload",
        element: <UploadData />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);

export default Route;
