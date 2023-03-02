import "./ProgressBar.scss";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 300 },
  { name: "Group B", value: 50 },
  { name: "Group C", value: 100 },
  { name: "Group D", value: 150 },
  { name: "Group E", value: 300 },
];
const COLORS = ["#4FDDB0", "#FF7777", "#DC94FF", "#FFC061", "#7AE582"];

const ProgressBar = () => {
  return (
    <div className="admin-piechart">
      <h4>Investment Sectors</h4>
      <div className="investment-details">
        <PieChart width={800} height={450}>
          <Pie
            data={data}
            cx={150}
            cy={200}
            innerRadius={100}
            outerRadius={140}
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
        <div className="data">
          <div className="sector-name">
            <div className="color" style={{ backgroundColor: "#4FDDB0" }}></div>
            <p>Aerospace</p>
          </div>
          <div className="sector-name">
            <div className="color" style={{ backgroundColor: "#7AE582" }}></div>
            <p>Agritech</p>
          </div>
          <div className="sector-name">
            <div className="color" style={{ backgroundColor: "#FFC061" }}></div>
            <p>Fintech</p>
          </div>
          <div className="sector-name">
            <div className="color" style={{ backgroundColor: "#DC94FF" }}></div>
            <p>Healthcare</p>
          </div>
          <div className="sector-name">
            <div className="color" style={{ backgroundColor: "#FF7777" }}></div>
            <p>Realestate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
