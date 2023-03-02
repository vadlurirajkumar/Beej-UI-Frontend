import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import './Otp.scss';
import Otppage from './Components/Otppage';

const Otp = () => {
  return (
    <div className='otp'>
        <Navbar />
        <Otppage />
        <Footer />
    </div>
  )
}

export default Otp