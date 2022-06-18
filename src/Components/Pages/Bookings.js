import React, { useEffect, useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetch("http://api.wedeazzy.com/api/Wishlist/")
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        console.log(bookings, "bookings");
      });
  }, []);
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
              {bookings.map((booking) => (
                <tr key={booking?.id}>
                  <td>{booking?.id}</td>
                  <td>{booking?.City}</td>
                  <td>{booking?.country_vendor}</td>
                  <td>{booking?.Phone}</td>
                  <td>{booking?.Date_of_booking}</td>
                  <td>{booking?.vendor_catogory}</td>
                  <td>{booking?.Couple_Id}</td>
                  <td>{booking?.Vendor_Id}</td>
                </tr>
              ))}
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
