import "./IRRGraph.scss";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const IRRGraph = () => {
  const revenuedata = [
    {
      id: "1",
      month: "Jan",
      revenue: 2,
    },
    {
      id: "2",
      month: "Feb",
      revenue: 5,
    },
    {
      id: "3",
      month: "Mar",
      revenue: 7,
    },
    {
      id: "4",
      month: "Apr",
      revenue: 5,
    },
    {
      id: "5",
      month: "May",
      revenue: 8,
    },
    {
      id: "6",
      month: "June",
      revenue: 12,
    },
    {
      id: "7",
      month: "July",
      revenue: 10,
    },
    {
      id: "8",
      month: "Aug",
      revenue: 9,
    },
    {
      id: "9",
      month: "Sep",
      revenue: 10,
    },
    {
      id: "10",
      month: "Oct",
      revenue: 12,
    },
    {
      id: "11",
      month: "Nov",
      revenue: 11,
    },
    {
      id: "12",
      month: "Dec",
      revenue: 12,
    },
  ];
  return (
    <div className="main-content">
      <div className="graph-title">
        <h3>IRR</h3>
        <div className="title">
          <p>Month</p>
          <p>Year</p>
        </div>
      </div>
      <ResponsiveContainer width="100%"  aspect={3} className="Revnuemainclass">
        <LineChart data={revenuedata} width={300} height={300}>
          <XAxis dataKey="month" style={{fontSize:"0.8rem"}}  />
          <YAxis dataKey="revenue" style={{fontSize:"0.6em"}}  />
          <Line dataKey="revenue" type="monotone" strokeWidth={3} stroke="#1A1A1A"/>
        </LineChart >
      </ResponsiveContainer>
    </div>
  );
};

export default IRRGraph;
