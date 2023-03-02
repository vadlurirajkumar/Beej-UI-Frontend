import React, { useContext, useState } from 'react';
import './Kyc.scss';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { InvestorSignupContext } from '../../../../Context/InvestorSignupContext';


const countries = [
  "Country*",
  "India",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Australia",
  "Brazil",
  "China",
  "Germany",
];
const kycbanktype = [
  "Select Bank Type", "Ordinary", "NRE", "NRO",
]


const Kyc = () => {


  const {
    kycformData,
    kycFormError,
    handleKycFormChange,
    handleKycFormSubmit,
  } = useContext(InvestorSignupContext);

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  console.log(selectedFiles)

  return (
    <div className='kyc'>

      <div className="inv-type">
        <div className="title">
          <h3>Investor type:</h3>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={4} md={3} lg={2} className="choose">
              <input type="radio" name='investorType' value="Individual" onChange={handleKycFormChange} />
              <label>Individual</label>
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2} className="choose">
              <input type="radio" name='investorType' value="Entity" onChange={handleKycFormChange} />
              <label>Entity</label>
            </Grid>
          </Grid>
        </Box>
        <br />

        {kycFormError.investorType && <p style={{ color: "red" }}>{kycFormError.investorType}</p>}
      </div>

      <div className="kyc-details">
        <div className="title" id="kyc-title">
          <h3>KYC Details:</h3>
        </div>

        <div className="input-fields">
          <div className="kyc-right">

            <Box sx={{ flexGrow: 1 }}>

              <Grid container spacing={{xs:4,sm:5,md:5,lg:6}}>

                <Grid item xs={12} sm={12} lg={6}>
                  <input placeholder="Applicatants name(as per PAN card)"
                    name="panName"
                    value={kycformData.panName}
                    onChange={handleKycFormChange} />
                  {kycFormError.panName && <p style={{ color: "red" }}>{kycFormError.panName}</p>}

                </Grid>

                <Grid item xs={12} sm={12} lg={6}>
                  <input placeholder="Applicant's PAN number*"
                    name="panNumber"
                    value={kycformData.panNumber}
                    onChange={handleKycFormChange} />
                  {kycFormError.panNumber && <p style={{ color: "red" }}>{kycFormError.panNumber}</p>}

                </Grid>

                <Grid item xs={12} sm={12} lg={6}>
                  <input placeholder="Address*"
                    name="kycAddress"
                    value={kycformData.address}
                    onChange={handleKycFormChange} />
                  {kycFormError.kycAddress && <p style={{ color: "red" }}>{kycFormError.kycAddress}</p>}

                </Grid>


                <Grid item xs={12} sm={12} lg={6}>
                  <input placeholder="PIN code*"
                    name="pinCode"
                    value={kycformData.pincode}
                    onChange={handleKycFormChange} />
                  {kycFormError.pinCode && <p style={{ color: "red" }}>{kycFormError.pinCode}</p>}

                </Grid>

                <Grid item xs={12} sm={12} lg={6}>
                  <select name="country" onChange={handleKycFormChange}>
                    {
                      countries.map((item) => (
                        <option value={item}>
                          {item}
                        </option>
                      ))
                    }
                  </select>
                  <br />
                  {kycFormError.country && <p style={{ color: "red" }}>{kycFormError.country}</p>}

                </Grid>

                <Grid item xs={12} sm={12} lg={6}>
                  <div>
                    <input type="file" multiple onChange={handleFileInputChange} />
                    {selectedFiles.length > 0 && (
                      <ul>
                        {selectedFiles.map((file, index) => (
                          <li key={index}>{file.name}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Grid>

              </Grid>
            </Box>

          </div>
       </div>
      </div>


      <div className="father-spouse">
        <div className="title">
          <h3>Select Father/Spouse: *</h3>
        </div>

        <div className="forschoose">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={4} md={3} lg={2} className="choose">
                <input type="radio" value="Father" name='relation' onChange={handleKycFormChange} />
                <label>Father</label>
              </Grid>
              <Grid item xs={6} sm={4} md={3} lg={2} className="choose">
                <input type="radio" value="Spouse" name='relation' onChange={handleKycFormChange} />
                <label>Spouse</label>
              </Grid>
            </Grid>
          </Box>
          <br />
          {kycFormError.relation && <p style={{ color: "red" }}>{kycFormError.relation}</p>}

        </div>

        <div className="fs-text-fields">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{xs:4, sm:5, md:5, lg:6}}>
              <Grid item xs={12} sm={12} lg={6}>
                <input placeholder="Father/Spouse name*"
                  name="fatherSpouseName"
                  value={kycformData.fatherSpouseName}
                  onChange={handleKycFormChange} />
                {kycFormError.fatherSpouseName && <p style={{ color: "red" }}>{kycFormError.fatherSpouseName}</p>}

              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <input placeholder="Occupation*"
                  name="occupation"
                  value={kycformData.occupation}
                  onChange={handleKycFormChange} />
                {kycFormError.occupation && <p style={{ color: "red" }}>{kycFormError.occupation}</p>}

              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <select name="bankType" onChange={handleKycFormChange}>
                  {
                    kycbanktype.map((item) => (
                      <option value={item}>{item}</option>
                    ))
                  }
                </select>
                <br />
                {kycFormError.bankType && <p style={{ color: "red" }}>{kycFormError.bankType}</p>}

              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <input placeholder="Bank name"
                  name="bankName"
                  value={kycformData.bankDetails.bankName}
                  onChange={handleKycFormChange} />
                {kycFormError.bankName && <p style={{ color: "red" }}>{kycFormError.bankName}</p>}

              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <input placeholder="Account Number"
                  name="accountNumber"
                  value={kycformData.bankDetails.accountNumber}
                  onChange={handleKycFormChange} />
                {kycFormError.accountNumber && <p style={{ color: "red" }}>{kycFormError.accountNumber}</p>}

              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <input placeholder="Branch" name="branch"
                  value={kycformData.bankDetails.branch}
                  onChange={handleKycFormChange} />
                {kycFormError.branch && <p style={{ color: "red" }}>{kycFormError.branch}</p>}

              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <input placeholder="IFSC code"
                  name="ifscCode"
                  value={kycformData.bankDetails.ifscCode}
                  onChange={handleKycFormChange} />
                {kycFormError.ifscCode && <p style={{ color: "red" }}>{kycFormError.ifscCode}</p>}

              </Grid>

              <Grid item xs={12} sm={12} lg={6}>
                <input placeholder="SWIFT code"
                  name="swiftCode"
                  value={kycformData.bankDetails.swiftCode}
                  onChange={handleKycFormChange} />
                {kycFormError.swiftCode && <p style={{ color: "red" }}>{kycFormError.swiftCode}</p>}

              </Grid>
            </Grid>
          </Box>
        </div>
      </div>


      <div className="kyc-button">
        <button onClick={handleKycFormSubmit}>Update</button>
      </div>

    </div>
  )
}

export default Kyc