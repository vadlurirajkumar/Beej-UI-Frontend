import React from 'react'
import { PieChart, Pie, Cell } from "recharts";

import './fund.scss'

const Investeddata = [
    { name: "Group A", value: 90 },
   
    { name: "Group B", value: 10 },
    
  ];

  const Balancedata = [
    { name: "Group B", value: 70 },
   
    { name: "Group A", value: 30 },
    
  ];

  const COLORS = ["#02C39A", '#F5F5F5'];
  const COLOR = ["#2EC4B6", '#F5F5F5']
const Fund = () => {
  
    return (
        <div className="funds">
          <h3>Funds Raised</h3>
          
         <div className="nested-bars">
         <div className='bars'>
         <div className="investment-inner">
          <PieChart width={550} height={450}>
              <Pie
                data={Balancedata}
                cx={150}
                cy={200}
                innerRadius={110}
                outerRadius={150}
                fill="#8884d8"
                // paddingAngle={0}
                dataKey="value"
                className='innercircle'
              >
                {Balancedata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLOR[index % COLORS.length]}
                  />
                 
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="outer-bar">
            <PieChart width={500} height={500} className='inner-piechart'>
              <Pie
                data={Investeddata}
                cx={150}
                cy={200}
                innerRadius={110}
                outerRadius={140}
                fill="#8884d8"
                // paddingAngle={0}
                dataKey="value"
                className='outercircle'
              >
                {Investeddata.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                 
                ))}
              </Pie>
            </PieChart>
            </div>
            </div>
            <div className="data">
              <div className="sector-name">
                <div className="color" style={{ backgroundColor: "#2A9D8F" }}></div>
                <p>Weekly target <h5 >2,00,000</h5></p>
              </div>
             
              <div className="sector-name">
                <div className="color" style={{ backgroundColor: "#2EC4B6" }}></div>
                <p>Monthly target <h5>1,50,000</h5></p>
              </div>
              
            </div>
         </div>
           
        </div>
      );
}

export default Fund