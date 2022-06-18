import React, { useEffect, useState } from "react";

const CouplesTable = () => {
  const [couples, setCouples] = useState([]);
  useEffect(() => {
    fetch("http://api.wedeazzy.com/api/Couple/")
      .then((res) => res.json())
      .then((data) => {
        setCouples(data);
      });
  }, []);
  return (
    <div>
      <div>
        <div className="p-3">
          <h2 className="text-primary text-xl bg-[#f3f8f9] px-2 py-3 font-semibold">
            Couples Table{" "}
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
                <th>Bride</th>
                <th>Groom</th>
                <th>Email</th>
                <th>Bride Phone</th>
                <th>Groom Phone</th>
                <th>Destination</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {couples.map((c) => {
                <tr>
                  <td>{c?.id}</td>
                  <td>{c?.Bride_name}</td>
                  <td>{c?.Groom_name}</td>
                  <td>{c?.Email}</td>
                  <td>{c?.Bride_Phone_number}</td>
                  <td>{c?.Groom_Phone_number}</td>
                  <td>{c?.Destination_of_Wedding}</td>
                  <td>{c?.Budget}</td>
                </tr>;
              })}
            </tbody>
            <tfoot>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Bride</th>
                <th>Groom</th>
                <th>Email</th>
                <th>Bride Phone</th>
                <th>Groom Phone</th>
                <th>Destination</th>
                <th>Budget</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CouplesTable;
