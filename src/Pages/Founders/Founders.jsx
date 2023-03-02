import React from "react";
import "./Founders.scss";
import BasicInformation from "../../Pages/Founders/Components/BasicInformation/BasicInformation";
import BusinessInformation from "../../Pages/Founders/Components/BusinessInformation/BusinessInformation";
import TeamInformation from "../../Pages/Founders/Components/TeamInformation/TeamInformation";
import { Tabs, Tab, Typography } from "@mui/material";
import { useState, useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import { FounderSignupContext } from "../../Context/FounderSignupContext";

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
          fontWeight: "medium",
          fontFamily: "poppins",
        },
      },
    },
  },
});
const Founders = () => {
  const { value, handleTabs } = useContext(FounderSignupContext);

  const isScreenSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="founders">
      <Navbar />
      <div className="founders-tab">
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleTabs}
            className="founder-forms-tabs"
            variant={isScreenSmall ? "scrollable" : "fullWidth"}
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab label="Basic Information" className="tab" value={0} />
            <Tab label="Business Information" className="tab" value={1} />
            <Tab label="Team Information" className="tab" value={2} />
          </Tabs>
          {/*<LinearProgress variant="determinate" value={progress}  className="progress"/>*/}

          <TabPanel value={value} index={0}>
            <BasicInformation />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <BusinessInformation />
          </TabPanel>

          <TabPanel value={value} index={2}>
            <TeamInformation />
          </TabPanel>
        </ThemeProvider>
      </div>
      <Footer />
    </div>
  );
};
function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <Typography>{children}</Typography>}</div>;
}
export default Founders;
