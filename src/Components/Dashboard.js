import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
const Dashboard = () => {
  return (
    <div>
      <>
        <div className="navbar-end  lg:hidden">
          <label
            tabIndex="1"
            htmlFor="my-drawer-2"
            className="btn btn-accent lg:hidden"
          >
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
          </label>
        </div>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* <!-- Page content here --> */}
            <h2 className="text-3xl font-semibold text-primary text-center my-3">
              Welcome to Your Dashboard
            </h2>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side lg:h-auto ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 lg:w-48 bg-primary  text-neutral text-sm ">
              {/* <!-- Sidebar content here --> */}
              <li className="text-lg font-bold flex">
                {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
                <span>
                  {" "}
                  <HiLocationMarker className="text-white" size={34} />
                  DirList
                </span>
              </li>
              <li>
                <Link to="/" className="font-semibold">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link to="/dashboard/listing">Listing</Link>
              </li>
              <li>
                <Link to="/dashboard/pages">Pages</Link>
              </li>

              <li>
                <Link to="/dashboard/seo">Seo Setup</Link>
              </li>
              <li>
                <Link to="/dashboard/setting">Setting</Link>
              </li>
              <li>
                <Link to="/dashboard/admin">Admin</Link>
              </li>
              <li>
                <Link to="/dashboard/manageStuff">Manage Stuff</Link>
              </li>
              <li>
                <Link to="/dashboard/blog">Blog</Link>
              </li>
              <li>
                <Link to="/dashboard/contact">Contact</Link>
              </li>
              <li>
                <Link to="/dashboard/subscriber">Subscriber</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    </div>
  );
};

export default Dashboard;
