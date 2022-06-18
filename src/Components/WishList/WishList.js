import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishLists, setWishlists] = useState([]);
  useEffect(() => {
    fetch("http://api.wedeazzy.com/api/Wishlist/")
      .then((res) => res.json())
      .then((data) => {
        setWishlists(data);
        console.log(wishLists, "wishLists");
      });
  }, []);
  return (
    <div>
      <div>
        <div className="p-3">
          <h2 className="text-primary text-xl bg-[#f3f8f9] px-2 py-3 font-semibold">
            Wish List
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
                <th>City</th>
                <th>Vendor Category</th>
                <th>Couple ID</th>
                <th>Vendor ID</th>
              </tr>
            </thead>
            <tbody>
              {wishLists.map((w) => (
                <tr key={w?.id}>
                  <td>{w?.id}</td>
                  <td>{w?.City}</td>
                  <td>{w?.vendor_catogory}</td>
                  <td>{w?.Couple_Id}</td>
                  <td>{w?.Vendor_Id}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>City</th>
                <th>Vendor Category</th>
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

export default WishList;
