import React from "react";
// import BusinessInfo from './Components/BusinessInformation/BusinessInfo'
import "./founderFinancial.scss";
import { Tabs, Tab, Typography, Button, TabScrollButton} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect, useContext } from "react";
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";
import { Founderfinance } from "../../../Components/FounderSidebar/Components/FounderSidebarStyle";

// import AdminNavbar from '../../../Components/AdminNavbar/AdminNavbar';
import BusinessInfo from "./Components/BusinessInformation/BusinessInfo";
import CompanyInfo from "./Components/CompanyInformation/CompanyInfo";
import FinancialInformation from "./Components/FinancialInformation/FinancialInformation";
import FundingInformation from "./Components/FundingInformation/FundingInformation";
import FounderDashboardSidebar from "../../../Components/FounderSidebar/FounderDashboardSidebar";
import FounderNavabr from "../../../Components/FounderNavbar/FounderNavabr";
import ResponsiveFounderNavbar from "../../../Components/ResponsivefounderNavbar/ResponsiveFounderNavbar";
import { useMediaQuery } from "@mui/material";
// import ScrollableTabsButtonForce from "@material-ui/ScrollableTabsButtonForce";
const theme = createTheme({
  palette: { primary: { main: "#064A37" } },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "medium",
          fontSize: "36px",
          fontFamily: "poppins",
        },
      },
    },
  },
});
const FounderFinancial = () => {
  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));

  const { Close } = useContext(SideBarContext);
  const viewport_width = document.documentElement.clientWidth;
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };

  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    localStorage.setItem("currentTab", currentTab);
  }, [currentTab]);
  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleNextButtonClick = () => {
    setCurrentTab(currentTab + 1);
  };

  // const handleAddButtonClick = () => {
  //   setCurrentTab(currentTab + 1);
  // };

  const handleclick = () => {
    console.log("submit");
  };


  return (
    <>
      <div className="dashboard-alignment">
        <div className="dashboard-sidebar">
          <FounderDashboardSidebar />
        </div>
        <div className="dashboard-content">
          <div className="sidebarNavbar">
            <ResponsiveFounderNavbar />
          </div>

          {viewport_width > "1240" ? (
            <>
              <div
                className="adminDashboard-Navbar"
                style={{
                  width: Close ? "95vw" : "82vw",
                  marginLeft: Close ? "5vw" : "18vw",
                }}
              >
                <FounderNavabr type="financial" />
              </div>
              <Founderfinance
                className="founder-financial"
                style={{
                  width: Close ? "92vw" : "82vw",
                  marginLeft: Close ? "5vw" : "18vw",
                  marginTop: "10vh",
                }}
              >
                <ThemeProvider theme={theme}>
                  <Tabs
                    value={currentTab}
                    onChange={handleTabChange}
                    className="tabs"
                    variant="fullWidth"
                    aria-label="wrapped label tabs example"
                    
                  >
                    <Tab label="Business Information" className="tab" wrapped />
                    <Tab label="Company Information" className="tab" wrapped />
                    <Tab
                      label="Financial Information"
                      className="tab"
                      wrapped
                    />
                    <Tab label="Funding Information" className="tab" wrapped />
                  </Tabs>
                </ThemeProvider>

                <TabPanel value={currentTab} index={0}>
                  <BusinessInfo />
                </TabPanel>
                <TabPanel value={currentTab} index={1}>
                  <CompanyInfo />
                </TabPanel>
                <TabPanel value={currentTab} index={2}>
                  <FinancialInformation />
                </TabPanel>
                <TabPanel value={currentTab} index={3}>
                  <FundingInformation />
                </TabPanel>
                
              </Founderfinance>
            </>
          ) : (
            <>
              <div
                className="adminDashboard-Navbar"
                style={{ width: "100vw", marginTop: "10vh" }}
              >
                <FounderNavabr type="financial" />
              </div>
              <Founderfinance
                className="founder-financial"
                style={{
                  width: "100vw",
                  marginLeft: 0,
                  marginTop: "10vh",
                }}
              >
                <ThemeProvider theme={theme}>
                <div style={{width:'100%', overflowX:"auto"}}>
                  <Tabs
                    value={currentTab}
                    onChange={handleTabChange}
                    className="tabs"
                    variant={isScreenSmall ? "scrollable" : "fullWidth"}
                    scrollButtons
                    allowScrollButtonsMobile
                  >
                    <Tab label="Business Information" className="tab" wrapped/>
                    <Tab label="Company Information" className="tab" wrapped/>
                    <Tab
                      label="Financial Information"
                      className="tab"
                      wrapped
                    />
                    <Tab label="Funding Information" className="tab" wrapped />
                  </Tabs>
                  </div>
                </ThemeProvider>

                <TabPanel value={currentTab} index={0}>
                  <BusinessInfo />
                </TabPanel>
                <TabPanel value={currentTab} index={1}>
                  <CompanyInfo />
                </TabPanel>
                <TabPanel value={currentTab} index={2}>
                  <FinancialInformation />
                </TabPanel>
                <TabPanel value={currentTab} index={3}>
                  <FundingInformation />
                </TabPanel>
                
              </Founderfinance>
            </>
          )}
        </div>
      </div>
    </>
  );
};
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <Typography>{children}</Typography>}</div>;
}

export default FounderFinancial;
