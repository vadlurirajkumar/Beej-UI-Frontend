import "./DoubleGraph.scss";
import {  Bar, XAxis, YAxis, ComposedChart, Line, CartesianGrid} from "recharts";
// Sample data
const data = [
  { name: "Jan", x: 8000, y: 6000, z: 8220 },
  { name: "Feb", x: 9500, y: 1500, z: 9000 },
  { name: "Mar", x: 12000, y: 8000, z: 12500 },
  { name: "Apr", x: 1500, y: 1500, z: 13000 },
  { name: "May", x: 4000, y: 4000, z: 2000},
  { name: "Jun", x: 8000, y: 3000, z: 9000 },
  { name: "Jul", x: 8000, y: 8000, z: 6100 },
  { name: "Aug", x: 1200, y: 4800, z: 14589 },
  { name: "Sep", x: 7500, y: 9500, z: 9300 },
  { name: "Oct", x: 10500, y: 1500, z: 9896 },
  { name: "Nov", x: 3000, y: 7000, z: 9389 },
  { name: "Dec", x: 11000, y: 6000, z: 10500 },
];

const DoubleGraph = () => {
  return (
    <div className="barchart">
      <div className="barchart-data">
        <h4>Investments</h4>
        <div className="months">
          <p>Week</p>
          <p>Month</p>
          <p>Year</p>
        </div>
      </div>
      <h4 className="rotate-text">Investor Amount</h4>

      <ComposedChart
      width={800}
      height={300}
      data={data}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis dataKey=""/>
        <Bar dataKey="x" stackId="a" fill="#26C1C9"  barSize={20}/>
        <Bar dataKey="y" stackId="a" fill="#2A9D8F" barSize={20}/>
      <Line type="monotone" dataKey="z" stroke="#FFBC21" strokeWidth={2.5} />
      {/* <Scatter dataKey="cnt" fill="red" /> */}
    </ComposedChart>
    </div>
  );
};

export default DoubleGraph;
