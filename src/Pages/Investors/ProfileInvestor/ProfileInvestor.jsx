import React, { useState } from "react";
import "./ProfileInvestor.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import website from "../../../Assets/globe.png";
import linkedin from "../../../Assets/linkedin.png";

import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

import { InvestorProfile } from "./ProfileInvestors";

const ProfileInvestor = () => {
  const [update, setUpdate] = useState({
    name: '',
    industry: '',
    content: '',
    gender: '',
    Designation: '',
    Location: '',
    Education: '',
    Bio: '',
    achieve: '',
  })

  const handleUpdate = e => {
    e.preventDefault()
    console.log(update)
  }

  const updateValue = (e) =>{
    setUpdate({
      ...InvestorProfile, update,
      [e.target.name]: [e.target.value]
    });
  }


  return (
    <>
    
      {InvestorProfile.map((data, index) => {
        const {
          name,
          airgarage,
          logos,
          loom,
          industry,
          content,
          gender,
          Designation,
          Location,
          Education,
          Bio,
          achieve,
          profile,
          banner
        } = data;
        return (
          <>
          <div className="background-color">
          <div className="profile-investor-component" key={index} value={data} >
          <form action="">
            <div className="banner-img">
              
              <img src={banner} alt="BannerImage" />
            </div>
            
          <div className="investor-profile-container" >
            <div className="investor-profile">
              <div className="profile-image">
                <div className="profile-pic">
                  <img src={profile} alt="Investor" />
                </div>
                </div>
                <p>{name}</p>
                <div className="social-network">
                  <img src={linkedin} alt="LinkedIn" />
                  <img src={website} alt="Website" />
                </div>
              
              
                <h4>Post Investment</h4>
                <div className="invest-images">
                  <img src={airgarage} alt="Airecel" />
                  </div>
                  <div className="i0image2">
                  <img src={loom} alt="Carde" />
                  </div>
                  <div className="i-image3">
                  <img src={logos} alt="Loom" />
                </div>
              
              <p className="industry">Industry: <h5>{industry}</h5> </p>
            </div>
            <div className="form-button">
              <div className="edit-button">
                <p>{content}</p>
               <button onClick={handleUpdate}> <Link to='/investor/updated-profile'>
                  <EditIcon className="icon" /> Edit
                  </Link></button>
              </div>
              
              <Box
                sx={{ flexGrow: 1 }}
                className="profile-Info"
                key={index}
                value={data}
              >
                <Grid container spacing={2} className="container-grid">
                  <Grid item xs={6} className="label-index">
                    <label>Gender</label>
                    <input type="text" name="gender" value={gender} onChange={updateValue} />
                  </Grid>

                  <Grid item xs={6} className="label-index">
                    <label htmlFor="">Designation</label>
                    <input type="text" name="Designation" value={Designation} onChange={updateValue}/>
                  </Grid>

                  <Grid item xs={6} className="label-index">
                    <label htmlFor="">Location</label>
                    <input type="text" name="Location" value={Location} onChange={updateValue}/>
                  </Grid>

                  <Grid item xs={6} className="label-index">
                    <label htmlFor="">Education</label>
                    <input type="text" name="Education" value={Education} onChange={updateValue}/>
                  </Grid>

                  <Grid item xs={12} className="label-index">
                    <label htmlFor="">What do you wish to achieve?</label>
                    <textarea
                      name="achieve"
                      id=""
                      cols="5"
                      rows="2"
                      value={achieve}
                      onChange={updateValue}
                    ></textarea>
                  </Grid>

                  <Grid item xs={12} className="label-index">
                    <label htmlFor="">Your Bio</label>
                    <textarea
                      name="Bio"
                      id=""
                      cols="5"
                      rows="3"
                      value={Bio}
                      onChange={updateValue}
                    ></textarea>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>
          </form>
          </div>
          </div>
          </>
        );
      })}
    </>
  );
};

export default ProfileInvestor;
