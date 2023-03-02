 import React from 'react'
import { InvestCard } from './InvestCards'
import './StartupCards.scss';

const StartupCards = () => {
  return (
    <div className='startupcards'>
        {InvestCard.map((card, index)=>{
            const {investImg, title, industry, latest} = card;
            return(
                <div className="map-cards" key={index}>
                    <img src={investImg} alt="" />
                    <h5>{title}</h5>
                    <p>Industry : {industry}</p>
                    <p>Latest Valuation : <h4>{latest}</h4></p>

                    <button className='map-btn'>Invest</button>
                </div>
            )
        })}
    </div>
  )
}

export default StartupCards