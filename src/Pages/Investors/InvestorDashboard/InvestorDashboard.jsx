import React from "react";

// --------------------- { STYLESHEET } ------------------------------
import "./InvestorDashboard.scss";

import InvestedCards from "./InvestorDashboardCards/InvestedCards/InvestedCards";
import StartupCards from "./InvestorDashboardCards/StartupCards/StartupCards";
import MyInvestmentGraphs from "./InvestorDashboardGraphs/MyInvestmentGraphs";
import InvestorInvestedProgressBars from "./InvestorDashboardProgressBars/InvestorInvestedProgressBars";

const InvestorDashboard = () => {
  return (
    <div
      className="investor-dashboard-data"
    >
      <InvestedCards />
      <InvestorInvestedProgressBars />
      <MyInvestmentGraphs />
      <StartupCards /> 
    </div>
  );
};

export default InvestorDashboard;
