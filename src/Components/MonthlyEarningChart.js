import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1",
    uv: 1230,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "6",
    uv: 1700,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "11",
    uv: 800,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "16",
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "20",
    uv: 0,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "31",
    uv: 0,
    pv: 3800,
    amt: 2500,
  },
];

const MonthlyEarningChart = () => {
  return (
    <div className="border-2 mt-10 shadow-lg pb-16">
      <h1 className="text-[#4E73DF] text-left bg-[#F8F9FC] font-semibold text-3xl py-4 px-3 border-x-0 border-2">
        Earnings In June 2022
      </h1>
      <div className="bg-white pt-5" style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthlyEarningChart;
