import { BiMenu } from "react-icons/bi";
import { FaBook, FaHome } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { MdManageAccounts } from "react-icons/md";
import { NavLink } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const DashboardSidebar = () => {
  const { isAdmin, isLoading } = useAdmin();
  console.log("admin? " + isAdmin, "loading? " + isLoading);

  return isLoading ? (
    <span className="loading loading-ring loading-lg"></span>
  ) : (
    <aside className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base text-base-content">
          {/* Sidebar content here */}

          <div className="flex justify-center">
            <img src="/logo.svg" alt="" className="mb-10 mt-10" />
          </div>

          {isAdmin ? (
            <>
              {" "}
              <li className="pb-2">
                <NavLink to="/dashboard/carts">
                  <span>
                    <FaHome />
                  </span>{" "}
                  Admin Home
                </NavLink>
              </li>
              <li className="pb-2">
                <NavLink to="/dashboard/add-items">
                  <span>
                    <ImSpoonKnife />
                  </span>{" "}
                  Add Items
                </NavLink>
              </li>
              <li className="pb-2">
                <NavLink to="/dashboard/manage-items">
                  <span>
                    <MdManageAccounts />
                  </span>{" "}
                  Manage Items
                </NavLink>
              </li>
              <li className="pb-2">
                <NavLink to="/dashboard/manage-bookings">
                  <span>
                    <FaBook />
                  </span>{" "}
                  Manage Bookings
                </NavLink>
              </li>
              <li className="pb-2">
                <NavLink to="/dashboard/all-users">
                  <span>
                    <FaBook />
                  </span>{" "}
                  All Users
                </NavLink>
              </li>
              <span className="divider divider-primary"></span>
            </>
          ) : (
            <></>
          )}

          <li className="pb-2">
            <NavLink to="/" className="text-base">
              <span>
                <FaHome />
              </span>{" "}
              Home
            </NavLink>
          </li>

          <li className="pb-2">
            <NavLink to="/menu" className="text-base">
              <span>
                <BiMenu />
              </span>{" "}
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
