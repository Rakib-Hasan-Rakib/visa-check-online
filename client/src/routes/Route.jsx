import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/ErrorPage";
import Check from "../pages/visaCheck/Check";
import UploadData from "../pages/uploadData/UploadData";
import PrimaryResult from "../pages/result/PrimaryResult";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Contact from "../pages/contact/Contact";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/check", element: <Check /> },
      { path: "/contact", element: <Contact /> },
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
