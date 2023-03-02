import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './InvestorKYC.scss';

import { InvestorProfile } from '../../ProfileInvestors';
import SelectCountry from '../../../../../Components/Dropdowns/SelectDropdown/SelectCountry';
import SelectBankType from '../../../../../Components/Dropdowns/SelectDropdown/SelectBankType';
import SelectBank from '../../../../../Components/Dropdowns/SelectDropdown/SelectBank';

const InvestorKYC = () => {
  return (
    <div className='investor-kyc'>

{InvestorProfile.map((kyc, index)=>{
  const {investorType, applicationName, applicationPanNo, address, pincode,  uploadGovtId, fatherORspouse, fatherNameOrSpouseName, occupation, accountNumber,bankbranch, ifsccode, swiftcode } = kyc;

  return(
    <>
  <Box sx={{ flexGrow: 1 }} className='kyc-Info' key={index}>
  <Grid container spacing={2} className='form-container'>
    <Grid item xs={12} className='label-index'>
    <h4>KYC Details</h4>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Investor Type</label>
      <input type="text" value={investorType}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Applicant's Name</label>
      <input type="text" value={applicationName}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Applicant's PAN Number</label>
      <input type="text" value={applicationPanNo}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Adress</label>
      <input type="text" value={address}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
    <label htmlFor="">Pincode</label>
      <input type="text" value={pincode}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Country</label>
      <SelectCountry/>
      {/* <input type="text" value={country}/> */}
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Upload Govt ID</label>
      <input type="text" value={uploadGovtId}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Select Father/Spouse</label>
      <input type="text" value={fatherORspouse}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Father/Spouse Name</label>
      <input type="text" value={fatherNameOrSpouseName}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Occupation</label>
      <input type="text" value={occupation}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Select Bank Type</label>
      <SelectBankType/>
      {/* <input type="text" value={banktype}/> */}
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Bank Name</label>
      <SelectBank/>
      {/* <input type="text" value={bankName}/> */}
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Account Number</label>
      <input type="text" value={accountNumber}/>
    </Grid>
    <Grid item xs={4} className='label-index'>
      <label htmlFor="">Bank Branch/ Adress</label>
      <input type="text" value={bankbranch}/>
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
    <button className='investor-kyc-button'>Save</button>
</Box>
    </>
  )

})}

    </div>
  )
}

export default InvestorKYC