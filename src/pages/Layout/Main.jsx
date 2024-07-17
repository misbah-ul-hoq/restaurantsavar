import { Outlet, useLocation } from "react-router-dom";

import Footer from "../../components/shared/Footer";
import Nav from "../../components/shared/Nav";

const MainLayout = () => {
  const location = useLocation();
  const showNav = location.pathname.includes("login");
  return (
    <>
      {showNav || <Nav />}
      <Outlet />
      {showNav || <Footer />}
    </>
  );
};

export default MainLayout;
