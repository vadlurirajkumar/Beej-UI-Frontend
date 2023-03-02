import React from "react";
import "./graph.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    profit: 50000,
    amt: 400000,
  },
  {
    name: "Feb",
    profit: 200000,
  },
  {
    name: "Mar",
   profit: 250000,
  },
  {
    name: "Apr",
    profit: 270000,
  },
  {
    name: "May",
    profit: 300000,
  },
  {
    name: "Jun",

    profit: 250000,
  },
  {
    name: "Jul",

    profit: 350000,
  },
  {
    name: "Aug",

    profit: 400000,
  },
  {
    name: "Sep",

    profit: 200000,
  },
  {
    name: "Oct",

    profit: 400000,
  },
  {
    name: "Nov",

    profit: 200000,
  },
  {
    name: "Dec",

    profit: 100000,
  },
];

const Graph = () => {
  return (
    <div className="graph">
    <div className="graphContainer">
    <div className="title"><h3>Profits</h3></div>
    <div className="right">
    
      <span>Month</span>
      <span>Year</span>
    </div>
    </div>
      <ResponsiveContainer width="99%"  aspect={3} className="graphset">
        <LineChart
          width={500}
          height={800}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className="linechart"
        >
          <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
          <XAxis dataKey="name" />
          <YAxis dataKey="amt" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="profit"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
