import React, { useContext, useState } from "react";
import Footer from "../../../../Components/Footer/Footer";
import Navbar from "../../../../Components/Navbar/Navbar";
import "./FounderSignup.scss";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

import { useFounderSignup } from "../../../../Hooks/useFounderSignup";
import { useEffect } from "react";
import { FounderSignupContext } from "../../../../Context/FounderSignupContext";

const countries = ["US(+1)", "Canada(+1)", "UK(+44)", "Australia(+61)", "France(+33)", "Germany(+49)", "Spain(+34)", "China(+86)", "Japan(+81)", "SouthKorea(+82)", "Brazil(+55)", "Mexico(+52)", "India(+91)", "Russia(+7)", "SouthAfrica(+27)", "Nigeria(+234)", "Egypt(+20)", "SaudiArabia(+966)", "UAE(+971)", "Israel(+972)", "Turkey(+90)", "Italy(+39)", "Switzerland(+41)", "Netherlands(+31)", "Sweden(+46)", "Norway(+47)", "Denmark(+45)", "Finland(+358)", "NewZealand(+64)", "Singapore(+65)", "Malaysia(+60)", "Indonesia(+62)", "Philippines(+63)", "Thailand(+66)", "Vietnam(+84)", "Argentina(+54)", "Chile(+56)", "Colombia(+57)", "Peru(+51)", "Venezuela(+58)", "Hong Kong(+852)", "Taiwan(+886)", "Pakistan(+92)", "Myanmar(+95)", "Nepal(+977)", "Qatar(+974)", "Bahrain(+973)", "Bhutan(+975)", "Iran(+98)"]

const ariaLabel = { "aria-label": "description" };

const FounderSignup = () => {
  const { signupFounder, error } = useFounderSignup();

  const {
    formData,
    setFormData,
    country,
    setCountry,
    signupFounderError,
    setSignupFounderError,
    isSignupFounderSubmit,
    setIsSignupFounderSubmit,
  } = useContext(FounderSignupContext)

  function handleCountryChange(event) {
    setCountry(event.target.value);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      countryCode: country,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSignupFounderSubmit(true);
    setSignupFounderError(handleSignupFounderValidation(formData));
  }

  const handleSignupFounderValidation = (formData) => {
    const errors = {};
    const { firstName, lastName, email, city, phoneNumber, countryCode } =
      formData;

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phoneRegex = /^\d{10}$/;

    if (!firstName) {
      errors.firstName = "This field is required!";
    }
    if (!lastName) {
      errors.lastName = "This field is required!";
    }
    if (!firstName) {
      errors.firstName = "This field is required!";
    }
    if (!email) {
      errors.email = "This field is required!";
    }
    if (!city) {
      errors.city = "This field is required!";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "This field is required!";
    }
    if (!countryCode) {
      errors.countryCode = "This field is required!";
    }
    if (!emailRegex.test(email)) {
      errors.email = "Please provide a valid email!";
    }
    if (!phoneRegex.test(phoneNumber)) {
      errors.phoneNumber = "Please provide a valid phone number!";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(signupFounderError).length === 0 && isSignupFounderSubmit) {
      signupFounder(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        phoneNumber: "",
      })
      setCountry("")
    }
  }, [signupFounderError]);

  return (
    <div>
      <Navbar />
      <div className="founderform">
        <div className="left">
          <h2 className="foundertitle">Join us as a Founder</h2>
          <img
            src={require("../../../../Assets/founderform.png")}
            alt=""
            className="founderimg"
          />
        </div>
        <div className="right">
          <h3>Please fill in your details</h3>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="textfield">
              <div className='inputfield'>
                <Input
                  placeholder="First Name *"
                  inputProps={ariaLabel}
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className='input'
                />
                {signupFounderError.firstName && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupFounderError.firstName}</p>
                )}
              </div>
              <div className='inputfield'>
                <Input
                  placeholder="Last Name *"
                  inputProps={ariaLabel}
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className='input'
                />
                {signupFounderError.lastName && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupFounderError.lastName}</p>
                )}
              </div>

            </div>

            <div className="textfield">
              <div className='inputfield'>
                <Input
                  placeholder="Email ID *"
                  inputProps={ariaLabel}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className='input'
                />
                {signupFounderError.email && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupFounderError.email}</p>
                )}
              </div>

              <div className='inputfield'>
                <Input
                  placeholder="City *"
                  inputProps={ariaLabel}
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className='input'
                />
                {signupFounderError.firstName && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupFounderError.firstName}</p>
                )}
              </div>
            </div>

            <div className="textfield">
              <div className='inputfield'>
                <FormControl
                  variant="standard"
                  className='input' id="country-code"
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    Country code*
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={country}
                    onChange={handleCountryChange}
                    label="Country code*"
                  >
                    <MenuItem value="">
                      <em>Country code*</em>
                    </MenuItem>

                    {countries.map((country) => (
                      <MenuItem key={country} value={country}>
                        {country}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {signupFounderError.countryCode && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupFounderError.countryCode}</p>
                )}
              </div>
              <div className='inputfield'>
                <Input
                  placeholder="Phone Number *"
                  inputProps={ariaLabel}
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className='input'
                />
                {signupFounderError.phoneNumber && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupFounderError.phoneNumber}</p>
                )}

              </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </Box>
          {error &&
            error.map((item) => {
              return <p key={item.message} style={{ color: "red" }} >Error:- {item.message}</p>;
            })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FounderSignup;
