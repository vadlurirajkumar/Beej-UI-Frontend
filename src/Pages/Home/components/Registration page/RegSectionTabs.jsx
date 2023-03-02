import React from "react";
import { Tabs, Tab, Typography, Box } from "@mui/material";
import { useState } from "react";
import TapFounder from "./TapSection/TapFounder";
import TapInvestor from "./TapSection/TapInvestor";
import { createTheme, makeStyle, ThemeProvider } from "@mui/material/styles";
import "./Registration.scss";
// import { maxWidth } from "@mui/system";

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

const RegSectionTabs = () => {
  const [value, setValue] = useState(0);
  const handleTabs = (e, val) => {
    setValue(val);
  };
  return (
    <div className="RegSectionTabs">
      <ThemeProvider theme={theme}>
        <Tabs
          value={value}
          onChange={handleTabs}
          className="head-tab"
          variant="dense"
          TabIndicatorProps={{ style: { display: 'none' } }}


        >
          <Tab label="FounderRegistration" className="tab" id="tab-border" />
          <Tab label="InvestorRegistration" className="tab" id="tab-border" />
        </Tabs>
        <Box sx={{ width: "100%" }}>
          <TabPanel value={value} index={0}>
            <TapFounder />
          </TabPanel>

          <TabPanel value={value} index={1}>
            <TapInvestor />
          </TabPanel>
        </Box>
      </ThemeProvider>
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <Typography>{children}</Typography>}</div>;
}

export default RegSectionTabs;
