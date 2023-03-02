import React from 'react';
import './ThankyouFounder.scss';
import Navbar from '../../../../Components/Navbar/Navbar';
import Footer from '../../../../Components/Footer/Footer';
import {Link} from 'react-router-dom';

const ThankyouFounder = () => {
  return (
    <div className='tq-founder'>
        <Navbar />
        <div className="tq-content">
            <div className="tq-img">
                <img src={require('../../../../Assets/founder-thankyou.png')} alt="" />
            </div>
            <div className="tq-text">
                <div className="text-content">
                    <p>Thank you for registering!<br/> Start looking for investors now!</p>
                </div>
                <Link>Go to dashboard</Link>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ThankyouFounder