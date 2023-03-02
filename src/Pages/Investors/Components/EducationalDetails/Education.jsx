
import React, { useState } from "react";
import "./Education.scss";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";


import { useContext } from "react";
import { InvestorSignupContext } from "../../../../Context/InvestorSignupContext";

const Education = () => {
  const {
    educationDetails,
    eductionDetailsList,
    educationDetailsError,
    educationDetailsListError,
    handleAddEducation,
    handleEducationDelete,
    handleEducationChange,
    handleEducationSubmit,
  } = useContext(InvestorSignupContext);

  return (
    <div className="education">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 4, sm: 5, md: 5, lg: 6 }}>
          <Grid item xs={12} md={12}>
            <input
              placeholder="Institute*"
              name="institute"
              value={educationDetails.institute}
              onChange={handleEducationChange}
            />
            {educationDetailsError.institute && (
              <p style={{ color: "red" }}>{educationDetailsError.institute}</p>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <input
              placeholder="Degree*"
              name="degree"
              value={educationDetails.degree}
              onChange={handleEducationChange}
            />
            {educationDetailsError.degree && (
              <p style={{ color: "red" }}>{educationDetailsError.degree}</p>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <input
              placeholder="Year To"
              name="yearTo"
              value={educationDetails.yearTo}
              onChange={handleEducationChange}
            />
            {educationDetailsError.yearTo && (
              <p style={{ color: "red" }}>{educationDetailsError.yearTo}</p>
            )}
          </Grid>
          <Grid item xs={12} md={12}>
            <input
              placeholder="Year From"
              name="yearFrom"
              value={educationDetails.yearFrom}
              onChange={handleEducationChange}
            />
            {educationDetailsError.yearFrom && (
              <p style={{ color: "red" }}>{educationDetailsError.yearFrom}</p>
            )}
          </Grid>
        </Grid>
      </Box>

      <button onClick={handleAddEducation} id="add">
        + Add more
      </button>
      <div className="edu-cards">
        <h3>Education Details</h3>
        {eductionDetailsList.length === 0 ? (
          <p>Please add a record !</p>
        ) : (
          <div className="educ-card-flex">
            {eductionDetailsList &&
              eductionDetailsList.map((item, index) => {
                const { institute, degree, yearTo, yearFrom } = item;
                return (
                  <Card sx={{ width: 400 }}>
                    <CardContent>
                      <Typography >
                        Institute: {institute}
                      </Typography>
                      <Typography>Degree : {degree}</Typography>
                      <Typography>Year To : {yearTo}</Typography>
                      <Typography>Year From : {yearFrom}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => handleEducationDelete(item)}>
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
          </div>
        )}
      </div>

      <div className="ed-button">
        <button onClick={handleEducationSubmit}>Submit</button>
      </div>
      {educationDetailsListError.message && (
        <p style={{ color: "red" }}>{educationDetailsListError.message}</p>
      )}
    </div>
  );
};

export default Education;
