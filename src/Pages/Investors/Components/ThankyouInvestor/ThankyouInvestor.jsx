import React from 'react';
import './ThankyouInvestor.scss';
import Footer from '../../../../Components/Footer/Footer';
import Navbar from '../../../../Components/Navbar/Navbar';
import {Link} from 'react-router-dom';

const ThankyouInvestor = () => {
  return (
    <div className='tq-investor'>
    <Navbar />
    <div className="inv-tq-content">
        <div className="inv-tq-img">
            <img src={require('../../../../Assets/investor-thankyou.png')} alt="" />
        </div>
        <div className="inv-tq-text">
            <div className="inv-text-content">
                <p>Thank you for registering! <br></br>Start looking for investors now!</p>
            </div>
            <Link>Go to dashboard</Link>
        </div>
    </div>
    <Footer />
</div>
  )
}

export default ThankyouInvestor