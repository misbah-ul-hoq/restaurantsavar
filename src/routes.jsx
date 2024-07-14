import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/Layout/Main";
import Home from "./pages/Home";
import MenuPage from "./pages/Menu";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
    ],
  },
]);

export default routes;
