import React from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import MonthlyEarningChart from "./MonthlyEarningChart";
const DashboardContent = () => {
  return (
    <div className="px-6 py-8 bg-[#f6f6f6] ">
      <h1 className="text-3xl text-left">Dashboard</h1>
      <div className="my-4 grid grid-cols-4 gap-5">
        <div
          style={{
            borderLeft: "4px",
            borderLeftColor: "#4E73DF",
            borderLeftStyle: "solid",
          }}
          class="card py-[8px] w-[232px] h-[100px] bg-base-100 shadow-xl rounded-md"
        >
          <div class="  m-0 p-[20px] flex justify-between items-center">
            <div>
              <h2 class="card-title uppercase text-sm text-[#4E73DF] font-semibold">
                Total Order
              </h2>
              <h2 className="font-semibold text-[1.25rem] text-left">98</h2>
            </div>
            <div>
              <BsFillCalendarFill size="32px" className="text-[#dddfeb]" />
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "4px",
            borderLeftColor: "#4E73DF",
            borderLeftStyle: "solid",
          }}
          class="card py-[8px] w-[232px] h-[100px] bg-base-100 shadow-xl rounded-md"
        >
          <div class="  m-0 p-[20px] flex justify-between items-center">
            <div>
              <h2 class="card-title uppercase text-sm text-[#4E73DF] font-semibold">
                Active Listening
              </h2>
              <h2 className="font-semibold text-[1.25rem] text-left">24</h2>
            </div>
            <div>
              <BsFillCalendarFill size="32px" className="text-[#dddfeb]" />
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "4px",
            borderLeftColor: "#4E73DF",
            borderLeftStyle: "solid",
          }}
          class="card py-[8px] w-[232px] h-[100px] bg-base-100 shadow-xl rounded-md"
        >
          <div class="  m-0 p-[20px] flex justify-between items-center">
            <div>
              <h2 class="card-title uppercase text-sm text-[#4E73DF] font-semibold">
                Pending Listing
              </h2>
              <h2 className="font-semibold text-[1.25rem] text-left">0</h2>
            </div>
            <div>
              <BsFillCalendarFill size="32px" className="text-[#dddfeb]" />
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "4px",
            borderLeftColor: "#4E73DF",
            borderLeftStyle: "solid",
          }}
          class="card py-[8px] w-[232px] h-[100px] bg-base-100 shadow-xl rounded-md"
        >
          <div class="  m-0 p-[20px] flex justify-between items-center">
            <div>
              <h2 class="card-title uppercase text-sm text-[#4E73DF] font-semibold">
                Total Listing
              </h2>
              <h2 className="font-semibold text-[1.25rem] text-left">24</h2>
            </div>
            <div>
              <BsFillCalendarFill size="32px" className="text-[#dddfeb]" />
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "4px",
            borderLeftColor: "#36B9CC",
            borderLeftStyle: "solid",
          }}
          class="card py-[8px] w-[232px] h-[160px] bg-base-100 shadow-xl rounded-md"
        >
          <div class="  m-0 p-[20px] flex justify-between items-center">
            <div>
              <h2 class="card-title uppercase text-sm text-[#36B9CC] font-semibold">
                Total User
              </h2>
              <h2 className="font-semibold text-[1.25rem] text-left">24</h2>
            </div>
            <div>
              <FaClipboardList size="32px" className="text-[#dddfeb]" />
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "4px",
            borderLeftColor: "#36B9CC",
            borderLeftStyle: "solid",
          }}
          class="card py-[8px] w-[232px] h-[160px] bg-base-100 shadow-xl rounded-md"
        >
          <div class="  m-0 p-[20px] flex justify-between items-center">
            <div>
              <h2 class="card-title uppercase text-sm text-[#36B9CC] font-semibold">
                Earning (Monthly)
              </h2>
              <h2 className="font-semibold text-[1.25rem] text-left"> $ 000</h2>
            </div>
            <div>
              <FaDollarSign size="32px" className="text-[#dddfeb]" />
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "4px",
            borderLeftColor: "#36B9CC",
            borderLeftStyle: "solid",
          }}
          class="card py-[8px] w-[232px] h-[160px] bg-base-100 shadow-xl rounded-md"
        >
          <div class="  m-0 p-[20px] flex justify-between items-center">
            <div>
              <h2 class="card-title uppercase text-sm text-[#36B9CC] font-semibold">
                Earning Total
              </h2>
              <h2 className="font-semibold text-[1.25rem] text-left">
                $163746832
              </h2>
            </div>
            <div>
              <FaDollarSign size="32px" className="text-[#dddfeb]" />
            </div>
          </div>
        </div>
        <div
          style={{
            borderLeft: "4px",
            borderLeftColor: "#36B9CC",
            borderLeftStyle: "solid",
          }}
          class="card py-[8px] w-[232px] h-[160px] bg-base-100 shadow-xl rounded-md"
        >
          <div class="  m-0 p-[20px] flex justify-between items-center">
            <div>
              <h2 class="card-title uppercase text-sm text-[#36B9CC] font-semibold">
                Total Subscriber
              </h2>
              <h2 className="font-semibold text-[1.25rem] text-left">3</h2>
            </div>
            <div>
              <FaClipboardList size="32px" className="text-[#dddfeb]" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <MonthlyEarningChart></MonthlyEarningChart>
      </div>
    </div>
  );
};

export default DashboardContent;
