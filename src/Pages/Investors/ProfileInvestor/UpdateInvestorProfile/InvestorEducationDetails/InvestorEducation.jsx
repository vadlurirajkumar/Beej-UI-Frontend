import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './InvestorEducation.scss';

import { InvestorProfile } from '../../ProfileInvestors';

const InvestorEducation = () => {

  return (
   <div className='education-container'>
   {InvestorProfile.map((investor, index)=>{
    const {institute, degree, from, to} = investor;
    return(
    <Box sx={{ flexGrow: 1 }} className='education-Info' key={index}>
    <Grid container spacing={2} className='form-container'>
      <Grid item xs={12} className='label-index'>
      <h4>Education Details</h4>
      </Grid>
      <Grid item xs={10} className='label-index'>
        <label htmlFor="">Institute</label>
        <input type="text" value={institute}/>
      </Grid>
      <Grid item xs={5} className='label-index'>
        <label htmlFor="">Degree</label>
        <input type="text" value={degree}/>
      </Grid>
      <Grid item xs={5} className='label-index'>
        <label htmlFor="">Year From</label>
        <input type="text" value={from}/>
      </Grid>
      <Grid item xs={5} className='label-index'>
        <label htmlFor="">Year To</label>
        <input type="text" value={to}/>
      </Grid>
      
    </Grid>
      <button className='investor-education-button'>Save</button>
  </Box>
    )
   })}
   </div>
  )
}

export default InvestorEducation