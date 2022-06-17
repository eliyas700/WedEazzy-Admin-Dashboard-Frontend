import React from "react";

const Categories = () => {
  return (
    <div className="bg-[#f6f6f6] py-5">
      <label
        for="add-category-modal"
        className="btn bg-primary text-left ml-3 text-info modal-button"
      >
        Creating Listing Category
      </label>
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
                    <th>Category</th>
                    <th>Slug</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="text-accent"></tbody>
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

export default Categories;
