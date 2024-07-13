import { Outlet } from "react-router-dom";

import Footer from "../../components/shared/Footer";
import Nav from "../../components/shared/Nav";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
