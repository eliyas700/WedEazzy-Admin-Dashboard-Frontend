import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  useEffect(() => {
    fetch("http://api.wedeazzy.com/api/Vendor/")
      .then((res) => res.json())
      .then((data) => {
        setVendors(data);
      });
  }, []);
  return (
    <div>
      <div className="p-3">
        <h2 className="text-primary text-xl bg-[#f3f8f9] px-2 py-3 font-semibold">
          Vendors Table{" "}
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
              <th>Phone</th>
              <th>Location</th>
              <th>Category</th>
              <th>Store Name</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => {
              <tr key={v?.id}>
                <td>{v?.id}</td>
                <td>{v?.Vendor_name}</td>
                <td>{v?.Phone_number}</td>
                <td>{v?.City}</td>
                <td>{v?.Vendor_Catogory}</td>
                <td>{v?.store_name}</td>
                <td>{v?.Description}</td>
              </tr>;
            })}
          </tbody>
          <tfoot>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Category</th>
              <th>Store Name</th>
              <th>Details</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Vendors;
