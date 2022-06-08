import React from "react";
import { GrFormAdd } from "react-icons/gr";
import img from "../../Assets/earl-newell-2021-09-08-02-06-31-6093.jpg";
const AdminPanel = () => {
  return (
    <div className="bg-[#f6f6f6] py-5">
      <button className="btn bg-primary text-left ml-3 text-info">
        New Admin
      </button>
      <div className="bg-white py-4 ">
        <h2 className="text-primary text-xl bg-[#f3f8f9] px-2 py-3 font-semibold">
          Admin Table{" "}
        </h2>
        <div className="my-3 p-5">
          <div className="flex justify-between items-center">
            <div>
              <label htmlFor="show">Show</label>
              <input type="number" className="border-4 mx-1 rounded-sm  w-20" />
              <span>entries</span>
            </div>
            <div class=" flex items-center ">
              <label htmlFor="search">Search</label>
              <input
                type="text"
                placeholder="Search"
                class="input input-bordered ml-2"
                id="search"
              />
            </div>
          </div>
          <div>
            <div class="overflow-x-auto">
              <table class="table w-full text-[#858796]">
                <thead>
                  <tr>
                    <th>SN</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-accent">
                  <tr>
                    <th>1</th>
                    <td>Psyber co</td>
                    <td>admin@gmail.com</td>
                    <td>
                      <img width={100} src={img} alt="" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-between items-center py-4">
              <p className="text-[#858796]">Showing 1 to 1 of 1 entries </p>
              <div class="btn-group ml-auto">
                <button class="btn font-light ">Previous</button>
                <button class="btn btn-active font-light">1</button>
                <button class="btn font-light">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
