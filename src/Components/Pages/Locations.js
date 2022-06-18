import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

const Locations = () => {
  return (
    <div>
      <div>
        <label
          for="add-category-modal"
          className="btn bg-primary text-left ml-3 text-info modal-button"
        >
          <BsPlusLg className="text-white mr-1" size={22} /> Creating a Location
        </label>
        <div className="p-3">
          <h2 className="text-primary text-xl bg-[#f3f8f9] px-2 py-3 font-semibold">
            Location
          </h2>
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
        </div>
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th> Image </th>
                <th>Status </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <td>1</td>
              <td>Abc</td>
              <td>def</td>
              <td>ggfh</td>
              <td>tryt</td>
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th> Image </th>
                <th>Status </th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Locations;
