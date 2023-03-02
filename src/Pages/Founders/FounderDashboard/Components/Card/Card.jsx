import React from "react";
import "./card.scss";


import Data from "./data"


const Card = () => {
 

  return (
    <div className="cards">
    {Data && Data.map((item)=>{
      return(
        <div className="card" >
        
        <div className="left">
        <span className="title">{item.title}</span>
        <span className="date">{item.date}</span>

        <span className="amount2">{item.amount}</span>
      </div>
      <div className="right">
      
      <img src={item.img} alt="" />
      </div>
    </div>
       
      )
      
    })}
    </div>
     
  );
};

export default Card;
