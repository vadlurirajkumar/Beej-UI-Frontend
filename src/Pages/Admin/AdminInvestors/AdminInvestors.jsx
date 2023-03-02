import "./AdminInvestors.scss";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { useState } from "react";
import InvestorDetails from "./Components/InvestorDetails/InvestorDetails";
import Transactions from "./Components/Transactions/InvestorTransactions";
import InvestorPendingApprovals from "./Components/InvestorPendingApprovals/InvestorPendingApprovals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminDashboardSidebar from "../../../Components/AdminDashboardSidebar/AdminDashboardSidebar";
import AdminNavbar from "../../../Components/AdminNavbar/AdminNavbar";

import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";
import { useContext } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#064A37",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: "poppins",
        },
      },
    },
  },
});
const AdminInvestors = () => {
  const { Close } = useContext(SideBarContext);

  const [value, setValue] = useState(0);

  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div className="dashboard-alignment">
      <div className="dashboard-sidebar">
        <AdminDashboardSidebar />
      </div>
      <div className="dashboard-content">
        <div className="adminDashboard-navbar">
          <AdminNavbar type="investor" />
        </div>
        <div
          className="dashboard-data-tables"
          style={{
            marginLeft: Close ? "5vw" : "15vw",
            marginTop: "8vh",
            width: Close ? "95vw" : "85vw",
          }}
        >
          <ThemeProvider theme={theme}>
            <Tabs value={value} onChange={handleTabs} className="admi n-tabs">
              <Tab
                label="Investor Details"
                className="tab"
                sx={{ minWidth: "200px" }}
              />

              <Tab
                label="Transactions"
                className="tab"
                sx={{ minWidth: "200px" }}
              />

              <Tab
                label="Pending Approvals"
                className="tab"
                sx={{ minWidth: "200px" }}
              />
            </Tabs>

            <Box sx={{ width: "100%" }}>
              <TabPanel value={value} index={0}>
                <InvestorDetails />
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Transactions />
              </TabPanel>

              <TabPanel value={value} index={2}>
                <InvestorPendingApprovals />
              </TabPanel>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <Typography>{children}</Typography>}</div>;
}

export default AdminInvestors;
