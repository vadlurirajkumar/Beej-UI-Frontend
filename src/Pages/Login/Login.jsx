import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from './Components/LoginForm';
// import Loginform1 from './Components/Loginform1';
import './Login.scss';

const Login = () => {
  return (
    <div className='login'>
        <Navbar />
        <LoginForm />
        <Footer />
    </div>
  )
}

export default Login