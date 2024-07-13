import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/Layout/Main";
import Home from "./pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default routes;
