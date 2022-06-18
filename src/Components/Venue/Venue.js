import React, { useEffect, useState } from "react";

const Venue = () => {
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    fetch("http://api.wedeazzy.com/api/Venue/")
      .then((res) => res.json())
      .then((data) => {
        setVenues(data);
        console.log(venues, "venues");
      });
  }, []);
  return (
    <div>
      {" "}
      <div>
        <div className="p-3">
          <h2 className="text-primary text-xl bg-[#f3f8f9] px-2 py-3 font-semibold">
            Venue
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
                <th>Type-2</th>
                <th>Type-3</th>
                <th>Guests</th>
                <th>Food Type</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Location</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {venues.map((v) => (
                <tr key={v?.id}>
                  <td>{v?.id}</td>
                  <td>{v?.Venue_name}</td>
                  <td>{v?.Venue_type_tag2}</td>
                  <td>{v?.Venue_type_tag3}</td>
                  <td>{v?.Number_of_guests}</td>
                  <td>{v?.Food_type}</td>
                  <td>{v?.Food_Price1}</td>
                  <td>{v?.rating}</td>
                  <td>{v?.Location}</td>
                  <td>{v?.Phone}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Type-2</th>
                <th>Type-3</th>
                <th>Guests</th>
                <th>Food Type</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Location</th>
                <th>Phone</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Venue;
