import React, { useEffect, useContext } from 'react';
import Footer from '../../../../Components/Footer/Footer';
import Navbar from '../../../../Components/Navbar/Navbar';
import './InvestorSignup.scss';
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import { useInvestorSignup } from '../../../../Hooks/useInvestorSignup';
import { InvestorSignupContext } from '../../../../Context/InvestorSignupContext';


const countries = ["US(+1)", "Canada(+1)", "UK(+44)", "Australia(+61)", "France(+33)", "Germany(+49)", "Spain(+34)", "China(+86)", "Japan(+81)", "SouthKorea(+82)", "Brazil(+55)", "Mexico(+52)", "India(+91)", "Russia(+7)", "SouthAfrica(+27)", "Nigeria(+234)", "Egypt(+20)", "SaudiArabia(+966)", "UAE(+971)", "Israel(+972)", "Turkey(+90)", "Italy(+39)", "Switzerland(+41)", "Netherlands(+31)", "Sweden(+46)", "Norway(+47)", "Denmark(+45)", "Finland(+358)", "NewZealand(+64)", "Singapore(+65)", "Malaysia(+60)", "Indonesia(+62)", "Philippines(+63)", "Thailand(+66)", "Vietnam(+84)", "Argentina(+54)", "Chile(+56)", "Colombia(+57)", "Peru(+51)", "Venezuela(+58)", "Hong Kong(+852)", "Taiwan(+886)", "Pakistan(+92)", "Myanmar(+95)", "Nepal(+977)", "Qatar(+974)", "Bahrain(+973)", "Bhutan(+975)", "Iran(+98)"]




const ariaLabel = { "aria-label": "description" };


const InvestorSignup = () => {


  const { signupInvestor, error } = useInvestorSignup()

  const { formData,
    setFormData,
    country,
    setCountry,
    signupInvestorError,
    setSignupInvestorError,
    isSignupInvestorSubmit,
    setIsSignupInvestorSubmit } = useContext(InvestorSignupContext)

  function handleCountryChange(event) {
    setCountry(event.target.value);
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value, countryCode: country });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSignupInvestorSubmit(true);
    setSignupInvestorError(handleSignupInvestorValidation(formData));

  }


  const handleSignupInvestorValidation = (formData) => {
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
    if (Object.keys(signupInvestorError).length === 0 && isSignupInvestorSubmit) {
      signupInvestor(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        phoneNumber: "",
      })
      setCountry("")
    }
  }, [signupInvestorError]);


  return (
    <div className='investorjoinform'>
      <Navbar />
      <div className="investorform">
        <div className="left">
          <h2 id="investortitle">Join us as an Investor</h2>
          <img
            src={require("../../../../Assets/investorform.png")}
            alt=""
            className="investorimg"
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
                <Input placeholder="First Name *" inputProps={ariaLabel}
                  name="firstName"
                  className='input'
                  value={formData.firstName}
                  onChange={handleChange} />
                {signupInvestorError.firstName && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupInvestorError.firstName}</p>
                )}
              </div>

              <div className='inputfield'>
                <Input placeholder="Last Name *" inputProps={ariaLabel}
                  name="lastName"
                  className='input'
                  value={formData.lastName}
                  onChange={handleChange} />
                {signupInvestorError.lastName && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupInvestorError.lastName}</p>
                )}
              </div>

            </div>
            <div className="textfield">
              <div className='inputfield'>
                <Input placeholder="Email ID *" inputProps={ariaLabel}
                  name="email"
                  className='input'
                  value={formData.email}
                  onChange={handleChange} />
                {signupInvestorError.email && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupInvestorError.email}</p>
                )}
              </div>
              <div className='inputfield'>
                <Input placeholder="City *" inputProps={ariaLabel}
                  name="city"
                  className='input'
                  value={formData.city}
                  onChange={handleChange} />
                {signupInvestorError.city && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupInvestorError.city}</p>
                )}
              </div>
            </div>


            <div className="textfield">

              <div className='inputfield'>
                <FormControl className='input' id="country-code" variant="standard" >
                  <InputLabel id="demo-simple-select-standard-label">Country code*</InputLabel>
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
                      <MenuItem key={country}
                        value={country}>{country}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                {signupInvestorError.countryCode && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupInvestorError.countryCode}</p>
                )}
              </div>

              <div className='inputfield'>
                <Input placeholder="Phone Number *" inputProps={ariaLabel}
                  name="phoneNumber"
                  className='input'
                  value={formData.phoneNumber}
                  onChange={handleChange} />

                {signupInvestorError.phoneNumber && (
                  <p style={{ color: "red", fontSize: "12px" }}>{signupInvestorError.phoneNumber}</p>
                )}
              </div>
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </Box>

          {error && error.map((item) => {
            return (
              <p key={item.message} style={{ color: "red" }} >Error:- {item.message}</p>
            )
          })}


        </div>
      </div>
      <Footer />
    </div>
  )
}

export default InvestorSignup