import React from "react";

const CategoryModal = () => {
  return (
    <div>
      <input type="checkbox" id="add-category-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            for="add-category-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="font-semibold uppercase text-center text-2xl my-3 text-primary">
            Listing Category Form
          </h1>
          <form>
            <div className="flex justify-between ">
              <input
                type="text"
                className="w-[45%] h-[45px] border-2 px-2"
                required
                placeholder="Name"
              />
              <input
                type="text"
                className="w-[45%] h-[45px] border-2 px-2"
                required
                placeholder="Slug"
              />
            </div>
            <label className="mt-3 block text-[#858796]">Image</label>
            <input
              className="w-[100%] h-[45px] mt-2 mb-4 border-2 px-2"
              type="file"
              required
            />
            <label className=" block text-[#858796]">Status</label>
            <select
              className="w-[100%] h-[40px] border-2 text-[#858796] mb-4"
              name=""
              id=""
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            <input
              type="submit"
              className="btn btn-primary w-[120px]"
              value="Save"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
