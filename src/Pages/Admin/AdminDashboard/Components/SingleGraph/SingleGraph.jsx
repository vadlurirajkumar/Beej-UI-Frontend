import React from "react";
import "./SingleGraph.scss";
import { BarChart, XAxis, YAxis, Legend, Bar } from "recharts";

const data = [
  {
    name: "Aerospace",
    value: 97,
    fill:"#4FDDB0"
  },
  {
    name: "Agritech",
    value: 137,
    fill:"#7AE582"
  },
  {
    name: "Fintech",
    value: 57,
    fill:"#FFC061"
  },
  {
    name: "Healthcare",
    value: 237,
    fill:"#DC94FF"
  },
  {
    name: "Realestate",
    value: 108,
    fill:"#FF7777"
  },
  {
    name: "Financial Service",
    value: 71,
    fill:"#2EC4B6"
  },
];

const SingleGraph = () => {
  return (
    <div className="single-graph">
      <div className="investment-details">
        <h4>Investments by Sector</h4>
        <ul>
        <li>Week</li>
        <li>Month</li>
        <li>Year</li>
        </ul>
        
      </div>
      <BarChart width={800} height={250} data={data} className="graph-data">
        <XAxis dataKey="name" />
        <YAxis />

        <Legend />
        <Bar dataKey="value" fill="fill" barSize={30}/>
      </BarChart>
    </div>
  );
};

export default SingleGraph;
