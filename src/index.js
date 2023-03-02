import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SidebarContext from "./AdminSidebarContex/SidebarContext";
import FounderSignupContextProvider from "./Context/FounderSignupContext";
import InvestorSignupContextProvider from "./Context/InvestorSignupContext";
import AuthContextProvider from "./Context/AuthContext";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <AuthContextProvider>
        <InvestorSignupContextProvider>
          <FounderSignupContextProvider>
            <SidebarContext>
              <App />
            </SidebarContext>
          </FounderSignupContextProvider>
        </InvestorSignupContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </>
);
