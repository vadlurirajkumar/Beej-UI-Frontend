import React from 'react';
import './LoginForm.scss';
import {
    // CardContent,
    Grid,
    TextField,
    Typography,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
  } from "@mui/material";
  import { Container} from "@mui/system";
  // import Buttons from '../../../Components/Buttons/Buttons';
  import { Link } from "react-router-dom";
  
  

const LoginForm = () => {
    const [country, setCountry] = React.useState("");


    const handleChange = (event) => {
        setCountry(event.target.value);
      };
  return (
    <div className='loginform'>
      <div className="login-title">
      <h2 id="loginform-title">Login</h2>
      </div>
        
      {/* <CardContent style={{ maxWidth: 532, margin: "0 auto" }}> */}
       <div className="login-form">
        <form>
          <Grid container spacing={2}>
            <Container xs={12} item className='email-field'>
              <TextField
                type="email"
                label="Email Id"
                placeholder="Enter Your Email ID"
                variant="outlined"
                fullWidth
                required
                
              ></TextField>
            </Container>
            <Typography variant="p">Or</Typography>
            <Container className="container-gap" >
              <Grid item xs={4}>
                <FormControl sx={{ minWidth:120 }}>
                  <InputLabel id="demo-select-small">Select</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={country}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={+91}>India +91</MenuItem>
                    <MenuItem value={+93}>Afghanistan  +93</MenuItem>
                    <MenuItem value={+355}>Albania  +355</MenuItem>
                    <MenuItem value={+213}>Algeria  +213</MenuItem>
                    <MenuItem value={+61}>Australia  +61</MenuItem>
                    <MenuItem value={+55}>Brazil  +55</MenuItem>
                    <MenuItem value={+86}>China  +86</MenuItem>
                    <MenuItem value={+49}>Germany  +49</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  label="Mobile Number"
                  placeholder="Enter Your Mobile Number"
                  variant="outlined"
                  required
                  fullWidth
                ></TextField>
              </Grid>
            </Container>
            {/* <Grid item xs={12}>
              <Link to="/otp"><Buttons type="submit" >Send OTP</Buttons></Link>
            </Grid> */}
          </Grid>
        </form>
        </div>
        <Link className="sendotp" to="/otp"><button className='sendotp' >Send OTP</button></Link>
      {/* </CardContent> */}
      <Typography  variant="p">New member? <Link to="/signup">SignUp</Link></Typography>
    </div>
  )
}

export default LoginForm