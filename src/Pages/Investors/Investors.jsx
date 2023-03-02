import "./Investors.scss";
import { Tabs, Tab, Typography } from "@mui/material";
import { useContext } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Personal from "./Components/PersonalDetails/Personal";
import Kyc from "./Components/KycDetails/Kyc";
import Relatives from "./Components/RelativesDetails/Relatives";
import Education from "./Components/EducationalDetails/Education";
import { InvestorSignupContext } from "../../Context/InvestorSignupContext";
import { useMediaQuery } from "@mui/material";
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
          fontSize: "36px",
          fontFamily: "poppins",
        },
      },
    },
  },
});

const Investors = () => {
  const { value, handleTabs } = useContext(InvestorSignupContext);

  const isScreenSmall = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className="investors-x">
      <Navbar />
      <div className="investors-tab">
       
        <ThemeProvider theme={theme}>
          <Tabs
            value={value}
            onChange={handleTabs}
            className="investor-profile-tabs"
            variant={isScreenSmall ? "scrollable" : "fullWidth"}
            scrollButtons
            allowScrollButtonsMobile
            
          >
            <Tab label="Personal Details" className="tab" />
            <Tab label="KYC Details" className="tab" />
            <Tab label="Relatives" className="tab" />
            <Tab label="Educational Details" className="tab" />
          </Tabs>
        </ThemeProvider>

        <TabPanel value={value} index={0}>
          <Personal />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Kyc />
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Relatives />
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Education />
        </TabPanel>
      </div>
      <Footer />
    </div>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <div>{value === index && <Typography>{children}</Typography>}</div>;
}

export default Investors;
