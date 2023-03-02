import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import "./InvestorCategoriesBar.scss";

import { SideBarContext } from "../../../../../AdminSidebarContex/SidebarContext";
import { useContext } from "react";

const data = [
  { name: "Group A", value: 50 },

  { name: "Group B", value: 10 },

  { name: "Group C", value: 40 },
];

const COLORS = ["#4FDDB0", "#FF7777", "#FFC061"];

const InvestorCategoriesBar = () => {
  const { Close } = useContext(SideBarContext);

  return (
    <div className="piechart">
      <h3>Categories</h3>
      <div className="investment-details">
        <PieChart width={500} height={400} className="test">
          <Pie
            className="test2"
            data={data}
            cx={150}
            cy={200}
            innerRadius={95}
            outerRadius={120}
            fill="#8884d8"
            // paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>

        <div
          className="center-data"
          style={{ marginLeft: Close ? "1.5vw" : "0vw" }}
        >
          <p>Ratio</p>
          <h4>100%</h4>
        </div>

        <div className="data">
          <div className="sector-name">
            <p>
              Food <h5 style={{ color: "#4FDDB0" }}>50%</h5>
            </p>
          </div>

          <div className="sector-name">
            <p>
              Fintech <h5 style={{ color: "#FFC061" }}>40%</h5>
            </p>
          </div>

          <div className="sector-name">
            <p>
              EdTech <h5 style={{ color: "#FF7777" }}>10%</h5>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorCategoriesBar;
