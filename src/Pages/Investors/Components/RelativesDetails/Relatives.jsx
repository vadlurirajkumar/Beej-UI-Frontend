import React, { useContext } from "react";
import "./Relatives.scss";

import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";
import { InvestorSignupContext } from "../../../../Context/InvestorSignupContext";

const countries = [
  "Country",
  "India",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Australia",
  "Brazil",
  "China",
  "Germany",
];
const Relbanktype = ["Select Bank Type*", "Ordinary", "NRE", "NRO"];

const countryCodes = [
  "US(+1)", "Canada(+1)", "UK(+44)", "Australia(+61)", "France(+33)", "Germany(+49)", "Spain(+34)", "China(+86)", "Japan(+81)", "SouthKorea(+82)", "Brazil(+55)", "Mexico(+52)", "India(+91)", "Russia(+7)", "SouthAfrica(+27)", "Nigeria(+234)", "Egypt(+20)", "SaudiArabia(+966)", "UAE(+971)", "Israel(+972)", "Turkey(+90)", "Italy(+39)", "Switzerland(+41)", "Netherlands(+31)", "Sweden(+46)", "Norway(+47)", "Denmark(+45)", "Finland(+358)", "NewZealand(+64)", "Singapore(+65)", "Malaysia(+60)", "Indonesia(+62)", "Philippines(+63)", "Thailand(+66)", "Vietnam(+84)", "Argentina(+54)", "Chile(+56)", "Colombia(+57)", "Peru(+51)", "Venezuela(+58)", "Hong Kong(+852)", "Taiwan(+886)", "Pakistan(+92)", "Myanmar(+95)", "Nepal(+977)", "Qatar(+974)", "Bahrain(+973)", "Bhutan(+975)", "Iran(+98)"
];
const relationship = [
  "Select Relation*",
  "Spouse",
  "Mother",
  "Father",
  "Children",
];

const Relatives = () => {
  const {
    relativeDetails,
    relatives,
    relativeDetailsError,
    relativesError,
    addRelative,
    deleteRelative,
    handleRelativeChange,
    handleRelativeSubmit,
  } = useContext(InvestorSignupContext);

  return (
    <div className="relatives">
      <div className="edu-ip-fields">
        <div className="left">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 4, sm: 5, md: 5, lg: 6 }}>
              <Grid className="relativeinputs" item xs={12} sm={12} lg={12}>
                <select name="relation" onChange={handleRelativeChange}>
                  {relationship.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
                <br />
                {relativeDetailsError.relation && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.relation}
                  </p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={5.5}
                sm={5}
                md={5}
                lg={5}
              >
                <select name="countryCode" onChange={handleRelativeChange}>
                  {countryCodes.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
                <br />
                {relativeDetailsError.countryCode && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.countryCode}
                  </p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={6.5}
                sm={7}
                md={7}
                lg={7}
              >
                <input
                  placeholder="Phone Number*"
                  name="phone"
                  value={handleRelativeChange.phone}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.phone && (
                  <p style={{ color: "red" }}>{relativeDetailsError.phone}</p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder="PAN Number"
                  name="panNumber"
                  value={handleRelativeChange.panNumber}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.panNumber && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.panNumber}
                  </p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder="Address"
                  name="address"
                  value={handleRelativeChange.address}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.address && (
                  <p style={{ color: "red" }}>{relativeDetailsError.address}</p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder="PIN code"
                  name="pincode"
                  value={handleRelativeChange.pincode}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.pincode && (
                  <p style={{ color: "red" }}>{relativeDetailsError.pincode}</p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <select name="bankType" onChange={handleRelativeChange}>
                  {Relbanktype.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
                <br />
                {relativeDetailsError.bankType && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.bankType}
                  </p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder="Account Number"
                  name="accountNumber"
                  value={relativeDetails.accountNumber}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.accountNumber && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.accountNumber}
                  </p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder="IFSC code"
                  name="ifsccode"
                  value={relativeDetails.ifsccode}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.ifsccode && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.ifsccode}
                  </p>
                )}
              </Grid>
            </Grid>
          </Box>
        </div>

        <div className="right">
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              className="relativeinputs"
              container
              spacing={{ xs: 4, sm: 5, md: 5, lg: 6 }}
            >
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <input
                  placeholder="Name"
                  name="name"
                  value={relativeDetails.name}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.name && (
                  <p style={{ color: "red" }}>{relativeDetailsError.name}</p>
                )}
              </Grid>
              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder=" Email ID*"
                  name="email"
                  value={relativeDetails.email}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.email && (
                  <p style={{ color: "red" }}>{relativeDetailsError.email}</p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder="Father's Name*"
                  name="fatherName"
                  value={relativeDetails.fatherName}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.fatherName && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.fatherName}
                  </p>
                )}
              </Grid>
              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder="Occupation"
                  name="occupation"
                  value={relativeDetails.occupation}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.occupation && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.occupation}
                  </p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <select name="country" onChange={handleRelativeChange}>
                  {countries.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
                <br />
                {relativeDetailsError.country && (
                  <p style={{ color: "red" }}>{relativeDetailsError.country}</p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder=" Bank name"
                  name="bankname"
                  value={relativeDetails.bankname}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.bankname && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.bankname}
                  </p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder="Branch"
                  name="branch"
                  value={relativeDetails.branch}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.branch && (
                  <p style={{ color: "red" }}>{relativeDetailsError.branch}</p>
                )}
              </Grid>

              <Grid
                className="relativeinputs"
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <input
                  placeholder="SWIFT code"
                  name="swiftcode"
                  value={relativeDetails.swiftcode}
                  onChange={handleRelativeChange}
                />
                {relativeDetailsError.swiftcode && (
                  <p style={{ color: "red" }}>
                    {relativeDetailsError.swiftcode}
                  </p>
                )}
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>

      <button id="addmorefields" onClick={addRelative}>
        +Add more
      </button>


      <div className="rel-cards">
        {" "}
        <h3>Relatives' Details</h3>
        {relatives.length === 0 ? (
          <p>Please add a record !</p>
        ) : (
          <div className="rel-card-flex">
            {relatives &&
              relatives.map((item, index) => {
                const {
                  relation,
                  name,
                  phone,
                  email,
                  panNumber,
                  fathername,
                  address,
                  occupation,
                  pincode,
                  country,
                  bankType,
                  bankname,
                  accountNumber,
                  branch,
                  ifsccode,
                  swiftcode,
                } = item;

                return (
                  <Card sx={{ width: 400 }}>
                    <CardContent>
                      <Typography>Name - {name}</Typography>
                      <Typography>Relation - {relation}</Typography>
                      <Typography>Phone Number - {phone}</Typography>
                      <Typography>Email - {email}</Typography>
                      <Typography>Pan Number - {panNumber}</Typography>
                      <Typography>Father's name{fathername}</Typography>
                      <Typography>Address - {address}</Typography>
                      <Typography>Occumpation - {occupation}</Typography>
                      <Typography>PinCode - {pincode}</Typography>
                      <Typography>Country - {country}</Typography>
                      <Typography>Bank Type - {bankType}</Typography>
                      <Typography>Bank Name - {bankname}</Typography>
                      <Typography>Account Number - {accountNumber}</Typography>
                      <Typography>Branch - {branch}</Typography>
                      <Typography>IFSC Code - {ifsccode}</Typography>
                      <Typography>Swift Code - {swiftcode}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => deleteRelative(item)}>
                        Delete
                      </Button>
                    </CardActions>
                  </Card>
                );
              })}
          </div>
        )}
       
      </div>
      <div className="rel-button">
      <button onClick={handleRelativeSubmit}>Update</button>
    </div>
    {relativesError.message && (
      <p style={{ color: "red" }}>{relativesError.message}</p>
    )}
    </div>
  );
};

export default Relatives;
