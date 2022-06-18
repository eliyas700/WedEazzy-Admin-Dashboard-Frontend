import React from "react";

const Login = () => {
  return (
    <div className="bg-primary w-[100w] h-[100vh]">
      <div className=" w-[70%] mx-auto pt-24">
        <div class="card lg:card-side bg-base-100 shadow-xl  ">
          <figure className="w-[50%]">
            <img
              src="https://api.lorem.space/image/album?w=400&h=400"
              alt="Album"
            />
          </figure>
          <div class="w-[50%] py-10">
            <h2 className="text-2xl text-center">Admin Login</h2>
            <form className="w-[100%]  ">
              <input
                className="w-[320px] h-[40px] px-4 py-6 rounded-full block my-5 border-2 mx-auto"
                type="email"
                placeholder="Email"
              />
              <input
                type="password"
                className="w-[320px] h-[40px] px-4 py-6 rounded-full block my-5 border-2 mx-auto"
                placeholder="Password"
              />
              <input
                className="w-[320px] h-[58px] px-4  rounded-full  my-5 border-2 mx-auto flex justify-center items-center bg-primary text-white"
                type="submit"
                value="Login"
              />
              <a
                href="/"
                className="text-primary text-center mx-auto block hover:underline"
              >
                Forgot Password?{" "}
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
