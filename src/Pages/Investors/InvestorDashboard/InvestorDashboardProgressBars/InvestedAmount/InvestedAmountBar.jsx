import React from "react";
import { PieChart, Pie, Cell } from "recharts";

import "./InvestedAmountBar.scss";

const Investeddata = [
  { name: "Group A", value: 90 },

  { name: "Group B", value: 10 },
];

const Balancedata = [
  { name: "Group A", value: 80 },

  { name: "Group B", value: 20 },
];

const COLORS = ["#4FDDB0", "#F5F5F5"];
const COLOR = ["#FFC061", "#F5F5F5"];
const InvestedAmountBar = () => {
  return (
    <div className="pie-chart">
      <h3>Balance Amount & Invested Amount</h3>
      <div className="nested-bars">
        <div className="investment-inner">
          <PieChart className="pie-chart-bar" width={250} height={450}>
            <Pie
              data={Balancedata}
              cx={150}
              cy={200}
              innerRadius={130}
              outerRadius={160}
              fill="#FFC061"
              // paddingAngle={0}
              dataKey="value"
            >
              {Balancedata.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLOR[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="outer-bar">
          <PieChart width={300} height={500} className="inner-piechart">
            <Pie
              data={Investeddata}
              cx={150}
              cy={200}
              innerRadius={120}
              outerRadius={140}
              fill="#8884d8"
              // paddingAngle={0}
              dataKey="value"
            >
              {Investeddata.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="data">
          <div className="sector-name">
            <div className="color" style={{ backgroundColor: "#4FDDB0" }}></div>
            <p>
              Invested Amount <h5>2,00,000</h5>
            </p>
          </div>

          <div className="sector-name">
            <div className="color" style={{ backgroundColor: "#FFC061" }}></div>
            <p>
              Balance Amount <h5>1,50,000</h5>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestedAmountBar;
