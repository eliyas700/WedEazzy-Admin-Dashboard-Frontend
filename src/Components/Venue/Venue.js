import React from "react";

const Venue = () => {
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
              <td>1</td>
              <td>Abc</td>
              <td>def</td>
              <td>ggfh</td>
              <td>tryt</td>
              <td>r45try</td>
              <td>trygf</td>
              <td>flgfd</td>
              <td>flgfd</td>
              <td>flgfd</td>
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
