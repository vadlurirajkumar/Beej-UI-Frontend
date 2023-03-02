import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Signuppage from './Components/Signuppage/Signuppage';
import './Signup.scss';

const Signup = () => {
  return (
    <div className='signup'>
        <Navbar />
        <Signuppage />
        <Footer />
    </div>
  )
}

export default Signup