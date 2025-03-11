import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Layout/Error";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
