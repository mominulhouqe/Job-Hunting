import React from "react";
import Header from "./Header";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const data = [
    { name: "Assinment 1", mark: 60, avg: 60, amt: 60 },
    { name: "Assinment 2", mark: 59, avg: 59.5, amt: 50 },
    { name: "Assinment 3", mark: 60, avg: 59.75, amt: 40 },
    { name: "Assinment 4", mark: 59, avg: 59.37, amt: 30 },
    { name: "Assinment 5", mark: 58, avg: 58.67, amt: 20 },
    { name: "Assinment 6", mark: 60, avg: 59.34, amt: 10 },
    { name: "Assinment 7", mark: 60, avg: 59.68, amt: 0 },
  ];
  return (
    <div>
      <Header />
      <div className="mt-5 row">
        <div  className="col-sm-12 col-md-6">
          <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis dataKey={"amt"} />
            <CartesianGrid strokeDasharray="6 6" />
            <Tooltip />
            <Legend effectOpacity={0.6} />
            <Line
              type="monotone"
              dataKey="mark"
              stroke="#8884d8"
              activeDot={{ r: 9 }}
            />
            <Line type="monotone" dataKey="avg" stroke="#82ca9d" />
          </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
