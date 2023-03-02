import "./Deals.scss";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { useState } from "react";
import LiveCampaigns from "./Components/LiveCampaigns/LiveCampaigns";
import PendingDeals from "./Components/PendingDeals/PendingDeals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminDashboardSidebar from "../../../../../Components/AdminDashboardSidebar/AdminDashboardSidebar";
import AdminNavbar from "../../../../../Components/AdminNavbar/AdminNavbar";
import AdminHomeSidebar from "../../../../../Components/AdminHomeSidebar/AdminHomeSidebar";
import { useContext } from "react";
import { SideBarContext } from "../../../../../AdminSidebarContex/SidebarContext";

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
const Deals = () => {
  const { Close } = useContext(SideBarContext);
  const [value, setValue] = useState(0);

  const handleTabs = (e, val) => {
    setValue(val);
  };

  return (
    <>
      <div className="dashboard-alignment">
        <div className="dashboard-sidebar">
          <AdminDashboardSidebar />
        </div>
        <div className="dashboard-content" style={{backgroundColor:"#f1f1f1"}}>
          <div className="adminDashboard-Navbar">
            <AdminNavbar type="deals" />
          </div>
          <div className="adminHomepage-content" style={{overflow:"hidden"}}>
            <div
              className="adminHomeSidebar"
              style={{
                width: "15vw",
                marginLeft: Close ? "5vw" : "15vw",
                marginTop: "8vh",
              }}
            >
              <AdminHomeSidebar />
            </div>
            <div
              className="admin-sideContent dashboard-data-tables"
              style={{ width: Close ? "80vw" : "70vw", marginTop: "8vh" }}
            >
              <ThemeProvider theme={theme}>
                <div className="founders">
                  <Tabs value={value} onChange={handleTabs} className="tabs">
                    <Tab
                      label="Live Campaigns"
                      className="tab"
                      sx={{ minWidth: "150px", fontSize:"1rem" }}
                    />
                    <Tab
                      label="Pending Approvals"
                      className="tab"
                      sx={{ minWidth: "200px", fontSize:"1rem"  }}
                    />
                  </Tabs>
                  <Box>
                    <TabPanel value={value} index={0}>
                      <LiveCampaigns />
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                      <PendingDeals />
                    </TabPanel>
                  </Box>
                </div>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <Typography>{children}</Typography>}</div>;
}
export default Deals;
