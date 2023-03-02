import { Tabs, Tab, Typography, Box } from "@mui/material";
import { useState } from "react";
import FounderDetails from "./Components/FounderDetails/FounderDetails";
import PendingApprovals from "./Components/PendingApprovals/PendingApprovals";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AdminDashboardSidebar from "../../../Components/AdminDashboardSidebar/AdminDashboardSidebar";
import AdminNavbar from "../../../Components/AdminNavbar/AdminNavbar";
import SearchIcon from "@mui/icons-material/Search";
import "./AdminFounders.scss"
import { SideBarContext } from '../../../AdminSidebarContex/SidebarContext'
import { useContext } from 'react'

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
const AdminFounders = () => {

  const {Close} = useContext(SideBarContext)

  const [value, setValue] = useState(0);

  const handleTabs = (e, val) => {
    setValue(val);
  };

  //SEARCHING USER STATE:
  const [search, setSearch] = useState("");

  return (
    <div className="dashboard-alignment">
      <div className="dashboard-sidebar">
        <AdminDashboardSidebar />
      </div>
      <div className="dashboard-content">
        <div className="adminDashboard-navbar">
          <AdminNavbar type="founder" />
        </div>
        <div className="dashboard-data-tables" style={{marginLeft: Close ? "5vw" : "15vw",marginTop: '8vh',width: Close ? "95vw":"85vw"}}>
          <ThemeProvider theme={theme}>
            <div className="tabstyles">
              <Tabs value={value} onChange={handleTabs} className="admin-tabs" style={{border:"none"}}>
                <Tab label="Founder Details" className="tab" sx={{ minWidth:"150px"}} />
                <Tab label="Pending Approvals" className="tab" sx={{ minWidth:"200px"}} />
              </Tabs>
              <div className="search-input" id="founder-searchbar">
                <input
                  type="search"
                  placeholder="Search..."
                  onChange={(e) => setSearch(e.target.value)}
                />
                <SearchIcon className="icon" />
              </div>
            </div>
            <Box sx={{ width: "100%" }}>
              <TabPanel value={value} index={0}>
                <FounderDetails search={search} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <PendingApprovals search={search} />
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

export default AdminFounders;
