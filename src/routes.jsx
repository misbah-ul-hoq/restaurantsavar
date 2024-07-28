import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/Layout/Main";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import OrderPage from "./pages/OrderPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import PrivateRoute from "./pages/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <OrderPage />,
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);

export default routes;
