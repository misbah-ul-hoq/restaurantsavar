import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const { cart } = useCart();

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className="text-base font-extrabold uppercase">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="/menu" className="text-base font-extrabold uppercase">
          Our Menu
        </NavLink>
      </li>

      <li>
        <NavLink to="/Order" className="text-base font-extrabold uppercase">
          Order
        </NavLink>
      </li>

      <li>
        <Link
          to="/dashboard/carts"
          className="text-base font-extrabold uppercase"
        >
          Cart
          <div className="badge badge-secondary">+{cart.length}</div>
        </Link>
      </li>

      {!user && (
        <li>
          <NavLink to="/login" className="text-base font-extrabold uppercase">
            Login
          </NavLink>
        </li>
      )}

      {user && (
        <li
          onClick={() => {
            logOut().then(() => {
              Swal.fire({
                title: "Signout successfull",
                icon: "success",
              });
            });
          }}
        >
          <button className="text-base font-extrabold uppercase">Logout</button>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {user && (
        <div className="navbar-end">
          <img
            src={user?.photoURL || ""}
            className="h-11 w-11 rounded-full"
            alt="userr img"
          />
        </div>
      )}
    </div>
  );
};

export default Nav;
