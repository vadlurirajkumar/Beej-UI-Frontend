import React, { useState } from "react";
import "./Personal.scss";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


import { useContext } from "react";
import { InvestorSignupContext } from "../../../../Context/InvestorSignupContext";

const investment = [
  "Investment allocated for the year*",
  "Upto 10L",
  "10-25L",
  "25-50L",
  "50L+",
];

const industries = [
  "Select Your Industry*",
  "Aerospace",
  "Agritech",
  "Artificial Intelligence",
  "Automotive",
  "Consumer electronics",
  "Fintech",
  "Deeptech",
  "Edtech",
  "Education",
  "Financial Services",
  "Media",
  "Fintech",
  "Gaming",
  "Government",
  "Healthcare",
  "Mining",
  "Non-profit",
  "Hospitality",
  "Life sciences",
  "Manufacturing",
  "Marketing",
  "Telecomm",
];

const Personal = () => {
  const investor = JSON.parse(localStorage.getItem("investor"));

  const {
    personalDetails,
    personalFormError,
    handlePersonalDetailsChange,
    handlePersonalDetailsSubmit,
    personalImage,
    handlePersonalImageChange,
  } = useContext(InvestorSignupContext);



  return (
    <div className="personal">
      <form>
        <div className="profile-details">
          <div className="right">
            <div className="right">
              <div>
                <img
                  style={{ height: "250px", width: "250px", borderRadius: "50%" }}
                  src={personalImage}
                  alt="Static"
                  onClick={() => document.getElementById('fileInput').click()}
                />
                <input id="fileInput" type="file" onChange={handlePersonalImageChange} style={{ display: 'none' }} />
              </div>

              <div className="text">
                <h6>Upload your company Logo</h6>
                <p>Supported file : JPG, JPEG, PNG</p>
              </div>
            </div>

            <Grid container spacing={{lg:6,md:5,sm:4, xs:4}}>
              <Grid item  xs={12} sm={12} md={12} lg={12}>
                <input
                  type="text"
                  name="website"
                  id=""
                  placeholder="Website"
                  value={personalDetails.website}
                  onChange={handlePersonalDetailsChange}
                />
                {personalFormError.website && (
                  <p style={{ color: "red" }}>{personalFormError.website}</p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  type="text"
                  name="pastInvestment"
                  id=""
                  placeholder="Total number of past Investments"
                  value={personalDetails.pastInvestment}
                  onChange={handlePersonalDetailsChange}
                />
                {personalFormError.pastInvestment && (
                  <p style={{ color: "red" }}>
                    {personalFormError.pastInvestment}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={personalDetails.state}
                  onChange={handlePersonalDetailsChange}
                />
                {personalFormError.state && (
                  <p style={{ color: "red" }}>{personalFormError.state}</p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  type="text"
                  name="linkedin"
                  id=""
                  placeholder="LinkedIn Profile Link*"
                  value={personalDetails.linkedin}
                  onChange={handlePersonalDetailsChange}
                />
                {personalFormError.linkedin && (
                  <p style={{ color: "red" }}>{personalFormError.linkedin}</p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  type="text"
                  name="achievementWish"
                  id=""
                  placeholder="What do you wish to achieve?"
                  value={personalDetails.achievementWish}
                  onChange={handlePersonalDetailsChange}
                />
                {personalFormError.achievementWish && (
                  <p style={{ color: "red" }}>
                    {personalFormError.achievementWish}
                  </p>
                )}
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  type="text"
                  name="yourBio"
                  placeholder="Your Bio"
                  value={personalDetails.yourBio}
                  onChange={handlePersonalDetailsChange}
                />
                {personalFormError.yourBio && (
                  <p style={{ color: "red" }}>{personalFormError.yourBio}</p>
                )}
              </Grid>
            </Grid>
          </div>

          <div className="left">

            <div id="resprofileimg" className="profile-image">
              <div className="text">
              {/*  <input
                  type="file"
                  id="file1"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  style={{ opacity: "0" }}
                />
                */}
                <img
                src={require("../../../../Assets/person.png")}
                alt="Normal Image"
              />
               <div>
               <h6>Upload Profile picture</h6>
               <p>JPG/JPEG (Max 5MB)</p>
               </div>
              </div>
            </div>


            <div className="firstname">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{lg:6,md:5,sm:4, xs:4}}>
                  <Grid item xs={12} sm={12} md={12}>
                    <input
                      placeholder="First Name*"
                      value={investor.firstName}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <input placeholder="Last Name*" value={investor.lastName} />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <input placeholder="Email ID*" value={investor.email} />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <input
                      placeholder="Phone Number*"
                      value={investor.phoneNumber}
                    />
                  </Grid>

                  <Grid item xs={12} sm={8} md={6} lg={12}>
                    <Grid container spacing={4}>
                      <Grid item xs={3} md={3} lg={2} className="choose">
                        <label>Gender:</label>
                      </Grid>

                      <Grid item xs={4} md={4} lg={2.5} className="choose">
                        <input
                          type="radio"
                          value="Male"
                          name="gender"
                          onChange={handlePersonalDetailsChange}
                        />
                        <label>Male</label>
                      </Grid>

                      <Grid item xs={5} md={4} lg={3} className="choose">
                        <input
                          type="radio"
                          value="Female"
                          name="gender"
                          onChange={handlePersonalDetailsChange}
                        />
                        <label>Female</label>
                      </Grid>
                    </Grid>
                    {personalFormError.gender && (
                      <p style={{ color: "red" }}>{personalFormError.gender}</p>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <input
                      placeholder="Current company/Designation"
                      name="currentCompany"
                      value={personalDetails.currentCompany}
                      onChange={handlePersonalDetailsChange}
                    />
                    {personalFormError.currentCompany && (
                      <p style={{ color: "red" }}>
                        {personalFormError.currentCompany}
                      </p>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <input
                      placeholder="Country*"
                      name="country"
                      value={personalDetails.country}
                      onChange={handlePersonalDetailsChange}
                    />
                    {personalFormError.country && (
                      <p style={{ color: "red" }}>
                        {personalFormError.country}
                      </p>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <input placeholder="City*" value={investor.city} />
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <select
                      name="investmentAllocated"
                      onChange={handlePersonalDetailsChange}
                    >
                      {investment.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </select>
                    {personalFormError.investmentAllocated && (
                      <p style={{ color: "red" }}>
                        {personalFormError.investmentAllocated}
                      </p>
                    )}
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <input
                      placeholder="Your Headline"
                      name="yourHeadline"
                      value={personalDetails.yourHeadline}
                      onChange={handlePersonalDetailsChange}
                    />
                    {personalFormError.yourHeadline && (
                      <p style={{ color: "red" }}>
                        {personalFormError.yourHeadline}
                      </p>
                    )}
                  </Grid>

                  <Grid item xs={12} sm={12} md={12}>
                    <select
                      name="industry"
                      onChange={handlePersonalDetailsChange}
                    >
                      {industries.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </select>
                    {personalFormError.industry && (
                      <p style={{ color: "red" }}>
                        {personalFormError.industry}
                      </p>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
        </div>

        <div className="personal-button">
          <button type="submit" onClick={handlePersonalDetailsSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Personal;
