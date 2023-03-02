import "./App.scss";
import { Navigate, Route, Routes } from "react-router-dom";

//Material UI
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

//Utils
import ScrollToTop from "./utils/ScrollToTop";

//Auth Context
import { useAuthContext } from "./Hooks/useAuthContext";

//Home Pages
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Otp from "./Pages/Otp/Otp";
import Signup from "./Pages/Signup/Signup";
import FounderSignup from "./Pages/Signup/Components/FounderSignup/FounderSignup";
import InvestorSignup from "./Pages/Signup/Components/InvestorSignup/InvestorSignup";
import Founders from "./Pages/Founders/Founders";
import Investors from "./Pages/Investors/Investors";
import ThankyouFounder from "./Pages/Founders/Components/ThankyouFounder/ThankyouFounder";
import ThankyouInvestor from "./Pages/Investors/Components/ThankyouInvestor/ThankyouInvestor";
import PageNoteFound from "./Pages/PageNotFound/PageNoteFound";

//Admin Pages
import AdminDashboard from "./Pages/Admin/AdminDashboard/AdminDashboard";
import AdminFounders from "./Pages/Admin/AdminFounders/AdminFounders";
import AdminInvestors from "./Pages/Admin/AdminInvestors/AdminInvestors";
import AdminStartups from "./Pages/Admin/AdminStartups/AdminStartups";
import AdminHomePage from "./Pages/Admin/AdminHomePage/AdminHomePage";
import Community from "./Pages/Admin/AdminHomePage/Components/Community/Community";
import FeaturedInvestorsAndFounders from "./Pages/Admin/AdminHomePage/Components/FeaturedInvestorsAndFounders/FeaturedInvestorsAndFounders";
import Deals from "./Pages/Admin/AdminHomePage/Components/Deals/Deals";
import JoinOurEvents from "./Pages/Admin/AdminHomePage/Components/JoinOurEvents/JoinOurEvents";
import AboutUs from "./Pages/Admin/AdminHomePage/Components/AboutUs/AboutUs";
import Testimonials from "./Pages/Admin/AdminHomePage/Components/Testimonials/Testimonials";

//Investor Pages
import InvestorProfileDetails from "./Pages/Investors/InvestorLayouts/InvestorProfileDetails";
import InvestorUpdateProfileData from "./Pages/Investors/InvestorLayouts/InvestorUpdateProfileData";
import InvestorMyPortfolioData from "./Pages/Investors/InvestorLayouts/InvestorMyPortfolioData";
import InvestorStartupCardsData from "./Pages/Investors/InvestorLayouts/InvestorStartupCardsData";
import InvestorActiveInvestmentDealsData from "./Pages/Investors/InvestorLayouts/InvestorActiveInvestmentDealsData";
import InvestorDashboardData from "./Pages/Investors/InvestorLayouts/InvestorDashboardData";
import InvestorVenturePartnerDetails from "./Pages/Investors/InvestorLayouts/InvestorVenturePartnerDetails";

//Founder Pages
import Dashboard from "./Pages/Founders/FounderDashboard/Dashboard";
import FounderProfile from "./Pages/Founders/FounderProfile/FounderProfile";
import FounderProfileEdit from "./Pages/Founders/FounderProfile/FounderProfileEdit";
import FounderFinancial from "./Pages/Founders/FounderFinancial/FounderFinancial";
import Companydetails from "./Pages/Founders/FounderMystartup/Components/Companydetails/Companydeatils";
import StartupProfile from "./Pages/Founders/FounderMystartup/Components/StartupProfile/StartupProfile";

const App = () => {
  const { user } = useAuthContext();
  console.log(user);
  const theme = createTheme({
    palette: {
      primary: {
        main: "#064A37",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
            fontWeight: "600",
          },
        },
      },
    },
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />

            
            {/* Forms */}
            <Route
              path="/signup-founder"
              element={
                !user ? <FounderSignup /> : <Navigate to="/founder-profile" />
              }
            />
            <Route
              path="/signup-investor"
              element={
                !user ? <InvestorSignup /> : <Navigate to="/investor-profile" />
              }
            />
            <Route
              path="/otp"
              element={user ? <Otp /> : <Navigate to="/signup-founder" />}
            />

            <Route path="/founder-profile">
              <Route
                index
                element={
                  user ? <Founders /> : <Navigate to="/signup-founder" />
                }
              />
              <Route
                path="thankyou"
                element={
                  user ? <ThankyouFounder /> : <Navigate to="/signup-founder" />
                }
              />
            </Route>

            <Route path="/investor-profile">
              <Route
                index
                element={
                  user ? <Investors /> : <Navigate to="/signup-investor" />
                }
              />
              <Route
                path="thankyou"
                element={
                  user ? (
                    <ThankyouInvestor />
                  ) : (
                    <Navigate to="/signup-investor" />
                  )
                }
              />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin">
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="founder" element={<AdminFounders />} />
              <Route path="investor" element={<AdminInvestors />} />
              <Route path="startup" element={<AdminStartups />} />
              <Route path="home">
                <Route path="herosection" element={<AdminHomePage />} />
                <Route path="community" element={<Community />} />
                <Route
                  path="featured-investor-founder"
                  element={<FeaturedInvestorsAndFounders />}
                />
                <Route path="deals" element={<Deals />} />
                <Route path="joinourevents" element={<JoinOurEvents />} />
                <Route path="aboutus" element={<AboutUs />} />
                <Route
                  path="/admin/home/testimonials"
                  element={<Testimonials />}
                />
              </Route>
            </Route>

            {/* Investor Routes */}
            <Route path="/investor">
              <Route path="dashboard" element={<InvestorDashboardData />} />
              <Route path="profile" element={<InvestorProfileDetails />} />
              <Route
                path="updated-profile"
                element={<InvestorUpdateProfileData />}
              />
              <Route path="myportfolio" element={<InvestorMyPortfolioData />} />
              <Route
                path="startupcards"
                element={<InvestorStartupCardsData />}
              />
              <Route
                path="investmentdeals"
                element={<InvestorActiveInvestmentDealsData />}
              />
              <Route
                path="venturepartner"
                element={<InvestorVenturePartnerDetails />}
              />
            </Route>

            {/* Founder Routes */}
            <Route path="/founder">
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<FounderProfile />} />
              <Route path="profileEdit" element={<FounderProfileEdit />} />
              <Route path="financial" element={<FounderFinancial />} />
              {/* <Route path="Companyinfo" element={<CompanyInfo />} /> */}
              <Route path="mystartup" element={<Companydetails />} />
              <Route path="startupprofile" element={<StartupProfile />} />
            </Route>

            <Route path="*" element={<PageNoteFound />} />
           
          </Routes>
        </ScrollToTop>
      </>
    </ThemeProvider>
  );
};

export default App;
