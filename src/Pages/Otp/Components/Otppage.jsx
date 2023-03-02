import React from 'react';
import './Otppage.scss';
import { useState } from "react";
import OTPInput, {ResendOTP} from "otp-input-react"
// import Buttons from '../../../Components/Buttons/Buttons';
import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';

const Otppage = () => {
    const [OTP, setOTP] = useState("");
    return (
      <div className='otppage'>
      {/* <div className="otpwrapper"> */}
      <div className="otpdetails">
       <h2>Enter OTP</h2>
      <p>OTP sent to +91 1234567890 <Link to="/login"><span>Change</span></Link></p>
       </div>
      <div className="otpnumber">
      <OTPInput style={{ width: "100%" }} value={OTP} onChange={setOTP} autoFocusnp OTPLength={6n } otpType="number" disabled={false} />
     
     <ResendOTP onResendClick={() => console.log("Resend clicked")} />
      </div>
   
     <div className="otpsubmit">
         <Link to = "/founderProfile"><button type="submit" className="otpbutton">Submit</button></Link>
     </div>
      </div>
      
      // </div>
    )
  }

export default Otppage