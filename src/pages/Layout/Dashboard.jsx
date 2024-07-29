import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <>
      {/* <Nav /> */}
      <main className="grid grid-cols-12 gap-6">
        <div className="">
          <DashboardSidebar />
        </div>
        <div className="col-span-9 my-10">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
