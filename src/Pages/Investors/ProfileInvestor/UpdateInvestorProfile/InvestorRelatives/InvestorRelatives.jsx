import React from 'react'
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import './InvestorRelatives.scss';
import { InvestorProfile } from '../../ProfileInvestors';
import SelectCode from '../../../../../Components/Dropdowns/SelectDropdown/SelectCode';
import SelectCountry from '../../../../../Components/Dropdowns/SelectDropdown/SelectCountry';
import SelectBank from '../../../../../Components/Dropdowns/SelectDropdown/SelectBank';
import SelectBankType from '../../../../../Components/Dropdowns/SelectDropdown/SelectBankType';

const InvestorRelatives = () => {
  return (
    <>
    {InvestorProfile.map((relative, index)=>{

      const {selectRelation, Name, mailId, fathersName, Occupation, phone, address, pincode, bankbranch, accountNumber, applicationPanNo, ifsccode, swiftcode } = relative;

return(
  <>
  
    <Box sx={{ flexGrow: 1 }} className='relative-info' key={index}>
    <Grid container spacing={2} className='form-container'>
      <Grid item xs={12} className='label-index'>
      <h4>Relatives</h4>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">Select Relation</label>
        <input type="text" value={selectRelation}/>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">Name</label>
        <input type="text" value={Name}/>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">Mail</label>
        <input type="text" value={mailId}/>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">Father's Name</label>
        <input type="text" value={fathersName}/>
      </Grid>
      <Grid item xs={3} className='label-index'>
      <label htmlFor="">Occupation</label>
        <input type="text" value={Occupation}/>
      </Grid>
      <Grid item xs={2} className='label-index'>
        <label htmlFor="">Country Code</label>
        <SelectCode/>
      </Grid>
      <Grid item xs={3} className='label-index'>
        <label htmlFor="">Contact Number</label>
        <input type="text" value={phone}/>
      </Grid>
      <Grid item xs={6} className='label-index'>
        <label htmlFor="">Address</label>
        <input type="text" value={address}/>
      </Grid>
      <Grid item xs={3} className='label-index'>
        <label htmlFor="">Pincode</label>
        <input type="text" value={pincode}/>
      </Grid>
      <Grid item xs={3} className='label-index'>
        <label htmlFor="">Country</label>
        <SelectCountry/>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">Select bank type</label>
        <SelectBankType/>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">Bank Name</label>
        <SelectBank/>
        {/* <input type="text" value={bankName}/> */}
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">Bank/Branch address</label>
        <input type="text" value={bankbranch}/>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">Account Number</label>
        <input type="text" value={accountNumber}/>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">Pan Number</label>
        <input type="text" value={applicationPanNo}/>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">IFSC Code</label>
        <input type="text" value={ifsccode}/>
      </Grid>
      <Grid item xs={4} className='label-index'>
        <label htmlFor="">SWIFT Code</label>
        <input type="text" value={swiftcode}/>
      </Grid>
    </Grid>
      <button className='investor-relative-button'>Save</button>
  </Box>
  
  </>
)

    })}
    </>
  )
}

export default InvestorRelatives