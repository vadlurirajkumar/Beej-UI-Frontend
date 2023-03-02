import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "@material-ui/core";
import { InvestorProfile } from "../../ProfileInvestors";
import EditIcon from "@mui/icons-material/Edit";

import "./InvestorPersonal.scss";
import SelectCountry from "../../../../../Components/Dropdowns/SelectDropdown/SelectCountry";
import SelectGender from "../../../../../Components/Dropdowns/SelectDropdown/SelectGender";
import SelectCity from "../../../../../Components/Dropdowns/SelectDropdown/SelectCity";
import SelectState from "../../../../../Components/Dropdowns/SelectDropdown/SelectState";
import SelectCode from "../../../../../Components/Dropdowns/SelectDropdown/SelectCode";
import SelectIndustry from "../../../../../Components/Dropdowns/SelectDropdown/SelectIndustry";

const InvestorPersonal = () => {
  return (
    <div className="form-map">
      {InvestorProfile.map((personal, index) => {
        const {
          profile,
          fname,
          lname,
          content,
          mail,
          mobileno,
          Designation,
          website,
          linkedin,
          pastInvestment,
          InvestmentAllocate,
          achieve,
          Bio,
          banner
        } = personal; 

        return (
        
            <Box
              sx={{ flexGrow: 1 }}
              className="personal-Info"
              key={index}
              value={personal}
            >
            <div className="form-button">

            <EditIcon className="icon"/>
              <img src={banner} alt="Banner" className="banner-img"/>
              <div className="edit-button">
               <div className="img-profile">
               <img src={profile} alt="" />
               </div>

                <Button className='button'>
                  Upload
                </Button>

                </div>
              </div>

              <Grid container spacing={2} className="form-container2">
                <Grid item xs={12} className="label-index">
                  <h4>Personal Information</h4>
                </Grid>
                <Grid item xs={6} className="label-index">
                  <label htmlFor="">First Name</label>
                  <input type="text" 
                  value={fname} 
                  />
                </Grid>
                <Grid item xs={6} className="label-index">
                  <label htmlFor="">Last Name</label>
                  <input type="text" 
                  value={lname} 
                  />
                </Grid>
                <Grid item xs={6} className="label-index">
                  <label htmlFor="">Mail ID</label>
                  <input type="text" 
                  value={mail} 
                  />
                </Grid>
                <Grid item xs={2} className="label-index">
                  <label htmlFor="">Country Code</label>
                  <SelectCode/>
               
                </Grid>
                <Grid item xs={4} className="label-index">
                  <label htmlFor="">Mobile Number</label>
                  <input type="text" 
                  value={mobileno} 
                  />
                </Grid>
                <Grid item xs={3} className="label-index">
                  <label htmlFor="">Gender</label>
                  <SelectGender/>
                
                </Grid>
                <Grid item xs={3} className="label-index">
                  <label htmlFor="">Country</label>
                  <SelectCountry/>

                
                </Grid>
                <Grid item xs={3} className="label-index">
                  <label htmlFor="">City</label>
                  <SelectCity/>
                
                </Grid>
                <Grid item xs={3} className="label-index">
                  <label htmlFor="">State</label>
                  <SelectState/>
                 
                </Grid>
                <Grid item xs={6} className="label-index">
                  <label htmlFor="">Current company / Designation</label>
                  <input type="text" 
                  value={Designation} 
                  />
                
                </Grid>
                <Grid item xs={6} className="label-index">
                  <label htmlFor="">LinkedIn URL</label>
                  <input type="text" 
                  value={linkedin} 
                  />
                </Grid>
                <Grid item xs={5} className="label-index">
                  <label htmlFor="">Website</label>
                  <input type="text" 
                  value={website} 
                  />
                </Grid>
                <Grid item xs={3} className="label-index">
                  <label htmlFor="">Past Investments</label>
                  <input type="text" 
                  value={pastInvestment} 
                  />
                </Grid>
                <Grid item xs={4} className="label-index">
                  <label htmlFor="">Investment allocated for an year</label>
                  <input type="text" 
                  value={InvestmentAllocate} 
                  />
                </Grid>
                <Grid item xs={4} className="label-index">
                  <label htmlFor="">Select your industry</label>
                  <SelectIndustry/>
                  
                </Grid>
                <Grid item xs={12} className="label-index">
                  <label htmlFor="">What do you wish to achieve?</label>
                  <input type="text" 
                  value={achieve} 
                  />
                </Grid>
                <Grid item xs={12} className="label-index">
                  <label htmlFor="">Your Headline</label>
                  <input type="text" 
                  value={content} 
                  />
                </Grid>
                <Grid item xs={12} className="label-index">
                  <label htmlFor="">Your Bio</label>
                 <textarea value={Bio} name="" id="" cols="5" rows="5"></textarea>
                </Grid>
              </Grid>

            </Box>
          
          );
       })} 
      <button className='button'>Save</button>
    </div>
  );
};

export default InvestorPersonal;
