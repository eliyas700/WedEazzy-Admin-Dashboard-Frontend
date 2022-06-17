import React from "react";

const AddAdminModal = () => {
  return (
    <div>
      <input type="checkbox" id="add-admin-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box relative">
          <label
            for="add-admin-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h1 className="font-semibold uppercase text-center text-2xl my-3">
            Add an Admin
          </h1>
          <form>
            <div className="flex justify-between ">
              <input
                type="text"
                className="w-[45%] h-[45px] border-2 px-2"
                required
                placeholder="First name"
              />
              <input
                type="text"
                className="w-[45%] h-[45px] border-2 px-2"
                required
                placeholder="Last name"
              />
            </div>
            <input
              className="w-[100%] h-[45px] my-4 border-2 px-2"
              type="text"
              required
              placeholder="User Name"
            />
            <input
              className="w-[100%] h-[45px] mb-4 border-2 px-2"
              type="email"
              required
              placeholder="Email"
            />
            <input
              type="pass"
              className="w-[100%] h-[45px] mb-4 border-2 px-2"
              required
              placeholder="Password"
            />
            <input
              type="submit"
              className="btn btn-primary w-[120px]"
              value="Add"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdminModal;
