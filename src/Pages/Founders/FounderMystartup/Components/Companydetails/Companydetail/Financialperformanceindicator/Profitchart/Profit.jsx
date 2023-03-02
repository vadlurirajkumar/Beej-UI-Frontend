import React from 'react'
import {LineChart,Line ,XAxis,YAxis, ResponsiveContainer} from 'recharts';
import './Profitchart.scss'

const Profit = () => {
    const revenuedata = [
        {
            id:"1",
          month:'Jan',
         revenue:2
    },
    {
        id:"2",
      month:'Feb',
     revenue:6
},
{
    id:"3",
  month:'March',
 revenue:10
},
{
    id:"4",
  month:'April',
 revenue:15
},
{
    id:"5",
  month:'May',
 revenue:11
},
{
    id:"6",
  month:'June',
 revenue:16
},
{
    id:"7",
  month:'July',
 revenue:20
},
{
    id:"8",
  month:'Aug',
 revenue:18
},
{
    id:"9",
  month:'Sep',
 revenue:16
},
{
    id:"10",
  month:'Oct',
  revenue:13
},
{
    id:"11",
  month:'Nov',
 revenue:16
},
{
    id:"12",
  month:'Dec',
 revenue:28
}   ]
  return (
    <div className='chart-main'>
<div className='revenue-content'><h3>Profit</h3>
</div>
<div>
<ResponsiveContainer width="100%"  aspect={3} className="Revnuemainclass">
<LineChart data={revenuedata} width={400} height={600}>
    <XAxis dataKey="month"/>
    <YAxis dataKey="revenue"/>
<Line dataKey="revenue" type="monotone" strokeWidth={3}/>
</LineChart>
</ResponsiveContainer>
<div className='xaxisunits'><p>Months</p></div>
<div className='yaxisunits'><p>Profit Month</p></div>

</div>
    </div>
  )
}

export default Profit