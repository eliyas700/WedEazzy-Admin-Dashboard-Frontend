import React from "react";

const Bookings = () => {
  return (
    <div>
      <div>
        <div className="p-3">
          <h2 className="text-primary text-xl bg-[#f3f8f9] px-2 py-3 font-semibold">
            Bookings
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
                <th>Address</th>
                <th> Country Vendor </th>
                <th>Phone</th>
                <th>Date</th>
                <th>Category</th>
                <th>Couple ID</th>
                <th>Vendor ID</th>
              </tr>
            </thead>
            <tbody>
              <td>1</td>
              <td>Abc</td>
              <td>def</td>
              <td>ggfh</td>
              <td>tryt</td>
              <td>tryt</td>
              <td>tryt</td>
              <td>tryt</td>
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Address</th>
                <th> Country Vendor </th>
                <th>Phone</th>
                <th>Date</th>
                <th>Category</th>
                <th>Couple ID</th>
                <th>Vendor ID</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
