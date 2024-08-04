import { Outlet } from "react-router-dom";
import DashboardSidebar from "../../components/Dashboard/Sidebar";

const Dashboard = () => {
  return (
    <>
      {/* <Nav /> */}
      <main className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <DashboardSidebar />
        </div>
        <div className="col-span-9 my-10 mr-8">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Dashboard;
