import React from "react";
import { Link, Outlet } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { FaTachometerAlt } from "react-icons/fa";
import { AiOutlineAreaChart } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { BiCategoryAlt, BiChevronDown } from "react-icons/bi";
import img from "../Assets/earl-newell-2021-09-08-02-06-31-6093.jpg";
import AddAdminModal from "./Admin/AddAdminModal";
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
        <div className="drawer drawer-mobile overflow-hidden">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content ">
            {/* <!-- Page content here --> */}
            <div className="flex  mx-auto text-accent">
              <div className="ml-auto border-l-2 flex my-4 pl-4 py-2 mr-4">
                <p className="mr-3">Psyber.co</p>
                <img className="w-[32px] rounded-full" src={img} alt="" />
              </div>
            </div>
            <Outlet></Outlet>
          </div>
          <div className="drawer-side min-h-screen overflow-hidden">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-48 lg:w-56 bg-primary  text-neutral text-sm ">
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
                  <FaTachometerAlt className="text-white" size={20} /> Dashboard
                </Link>
              </li>
              <li>
                <Link to="/category">
                  <BiCategoryAlt className="text-white" size={20} /> Categories{" "}
                </Link>
              </li>

              <li>
                <div class="dropdown relative">
                  <label tabindex="0" class="flex justify-between items-center">
                    <AiFillFolderOpen className="text-white mr-3 " size={20} />
                    Listing
                    <BiChevronDown className="ml-[70px]" />
                  </label>
                  <div
                    tabindex="0"
                    class="dropdown-content card card-compact top-0 mt-10 shadow bg-white rounded-sm text-accent min-w-[10rem] mx-0 px-0"
                  >
                    <div class="card-body">
                      <ul>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          User Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          My Listing
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="dropdown relative">
                  <label tabindex="0" class="flex justify-between items-center">
                    <AiFillFolderOpen className="text-white mr-3 " size={20} />
                    Pages
                    <BiChevronDown className="ml-[74px]" />
                  </label>
                  <div
                    tabindex="0"
                    class="dropdown-content card card-compact top-0 mt-10 shadow bg-white rounded-sm text-accent min-w-[10rem] mx-0 px-0"
                  >
                    <div class="card-body">
                      <ul>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          User Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          My Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Pending
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Categories
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Locations
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Package
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case rounded-none btn-sm font-normal justify-start "
                        >
                          Orders
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div class="dropdown relative">
                  <label tabindex="0" class="flex justify-between items-center">
                    <AiFillFolderOpen className="text-white mr-3 " size={20} />
                    Seo Setup
                    <BiChevronDown className="ml-12" />
                  </label>
                  <div
                    tabindex="0"
                    class="dropdown-content card card-compact top-0 mt-10 shadow bg-white rounded-sm text-accent min-w-[10rem] mx-0 px-0"
                  >
                    <div class="card-body">
                      <ul>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          User Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          My Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Pending
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Categories
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Locations
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Package
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case rounded-none btn-sm font-normal justify-start "
                        >
                          Orders
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="dropdown relative">
                  <label tabindex="0" class="flex justify-between items-center">
                    <AiFillFolderOpen className="text-white mr-3 " size={20} />
                    Setting
                    <BiChevronDown className="ml-[68px]" />
                  </label>
                  <div
                    tabindex="0"
                    class="dropdown-content card card-compact top-0 mt-10 shadow bg-white rounded-sm text-accent min-w-[10rem] mx-0 px-0"
                  >
                    <div class="card-body">
                      <ul>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          User Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          My Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Pending
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Categories
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Locations
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Package
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case rounded-none btn-sm font-normal justify-start "
                        >
                          Orders
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/admin">
                  <AiOutlineAreaChart className="text-white" size={20} /> Admin
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manageStuff">
                  <AiOutlineAreaChart className="text-white" size={20} />
                  Manage Stuff
                </Link>
              </li>
              <li>
                <div class="dropdown relative">
                  <label tabindex="0" class="flex justify-between items-center">
                    <AiFillFolderOpen className="text-white mr-3 " size={20} />
                    Blog
                    <BiChevronDown className="ml-[86px]" />
                  </label>
                  <div
                    tabindex="0"
                    class="dropdown-content card card-compact top-0 mt-10 shadow bg-white rounded-sm text-accent min-w-[10rem] mx-0 px-0"
                  >
                    <div class="card-body">
                      <ul>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          User Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          My Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Pending
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Categories
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="dropdown relative">
                  <label tabindex="0" class="flex justify-between items-center">
                    <AiFillFolderOpen className="text-white mr-3 " size={20} />
                    Contact
                    <BiChevronDown className="ml-16" />
                  </label>
                  <div
                    tabindex="0"
                    class="dropdown-content card card-compact top-0 mt-10 shadow bg-white rounded-sm text-accent min-w-[10rem] mx-0 px-0"
                  >
                    <div class="card-body">
                      <ul>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          User Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          My Listing
                        </Link>
                        <Link
                          to="/"
                          className=" btn w-full normal-case mx-0 rounded-none btn-sm font-normal text-left justify-start"
                        >
                          Pending
                        </Link>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/dashboard/subscriber">
                  <AiFillFolderOpen className="text-white" size={20} />
                  Subscriber
                </Link>
              </li>
              <li>
                <button className="btn btn-primary">Log Out</button>
              </li>
            </ul>
          </div>
        </div>
      </>
      <AddAdminModal />
    </div>
  );
};

export default Dashboard;
