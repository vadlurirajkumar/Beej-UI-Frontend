import "./BasicInformation.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { useContext } from "react";
import { FounderSignupContext } from "../../../../Context/FounderSignupContext";
import TextareaAutosize from '@mui/material/TextareaAutosize';


const BasicInformation = () => {

  const industryRadio = ["Aerospace", "Agritech", "Artificial Intelligence", "Automotive", "Consumer electronics", "Fintech", "Deeptech", "Edtech", "Education", "Financial Services", "Media", "Fintech", "Gaming", "Government", "Healthcare", "Mining", "Non-profit", "Hospitality", "Life sciences", "Manufacturing", "Marketing", "Telecom", "Others"]

  const fundingCycle = ["Seed", "Growth", "Maturity", "Late"]

  const areYou = ["Portfolio Member Startup", "Community Menmber Startup"]

  const {
    basicform,
    handleBasicFormChange,
    handleBasicFormSubmit,
    basicFormError,
    basicImage,
    handleBasicImageChange,
  } = useContext(FounderSignupContext);

 

  return (
    <div className="basicinfo">
      <div className="basic">
        <div className="title">
          <h3>Basic Information</h3>
        </div>


        <div className="top">
          <div className="left">

            <div className="inputs">
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ lg: 6, md: 6, sm: 5, xs: 4 }} >

                  <Grid className="brandname" item xs={12} sm={6} md={4}>
                    <input
                      type="text"
                      placeholder="Brand Name*"
                      name="brandName"
                      value={basicform.brandName}
                      onChange={handleBasicFormChange}
                      required
                    />
                    {basicFormError.brandName && <p style={{ color: "red" }}>{basicFormError.brandName}</p>}
                  </Grid>

                  <Grid className="brandname" item xs={12} sm={6} md={6}>
                    <input
                      type="text"
                      placeholder="Registered Company Name"
                      name="registeredCompanyName"
                      value={basicform.registeredCompanyName}
                      onChange={handleBasicFormChange}
                    />
                    {basicFormError.registeredCompanyName && <p style={{ color: "red" }}>{basicFormError.registeredCompanyName}</p>
                    }
                  </Grid>

                  <Grid className="brandname" item xs={12} sm={6} md={4}>
                    <input
                      type="tel"
                      placeholder="Year of incorporation"
                      name="yearOfIncorporation"
                      value={basicform.yearOfIncorporation}
                      onChange={handleBasicFormChange}
                    />
                    {basicFormError.yearOfIncorporation && <p style={{ color: "red" }}>{basicFormError.yearOfIncorporation}</p>}

                  </Grid>

                  <Grid className="brandname" item xs={12} sm={6} md={6}>
                    <input
                      type="text"
                      placeholder="Startup's LinkedIn URL"
                      name="startupLinkedinUrl"
                      value={basicform.startupLinkedinUrl}
                      onChange={handleBasicFormChange}
                    />
                    {basicFormError.startupLinkedinUrl && <p style={{ color: "red" }}>{basicFormError.startupLinkedinUrl}</p>}

                  </Grid>

                  <Grid className="brandname" item xs={12} sm={4} md={4}>
                    <select value={basicform.companyRole} name="companyRole" onChange={handleBasicFormChange} className=" ">
                      <option value="" disabled selected>Company role</option>
                      <option value="Founder">Founder</option>
                      <option value="Co-founder">Co-founder</option>
                    </select>
                    {basicFormError.companyRole && <p style={{ color: "red" }}>{basicFormError.companyRole}</p>}

                  </Grid>

                  <Grid className="brandname" item xs={12} sm={8} md={6}>
                    <input
                      type="text"
                      placeholder="Website URL"
                      name="websiteUrl"
                      value={basicform.websiteUrl}
                      onChange={handleBasicFormChange}
                    />
                    {basicFormError.websiteUrl && <p style={{ color: "red" }}>{basicFormError.websiteUrl}</p>}

                  </Grid>

                  <Grid className="brandname" item xs={12} sm={12} md={12}>
                    <input
                      type="text"
                      placeholder="Product Demo URL"
                      name="productDemoUrl"
                      value={basicform.productDemoUrl}
                      onChange={handleBasicFormChange}
                    />
                    {basicFormError.productDemoUrl && <p style={{ color: "red" }}>{basicFormError.productDemoUrl}</p>}
                  </Grid>

                  <Grid className="brandname" item xs={12} sm={12} md={12}>
                    <TextareaAutosize
                      name="briefDescriptionOfProduct"
                      placeholder="Brief description of the product/offering/service*"
                      value={basicform.briefDescriptionOfProduct}
                      onChange={handleBasicFormChange}
                      style={{ resize: 'none' }}
                    />
                    {basicFormError.briefDescriptionOfProduct && <p style={{ color: "red" }}>{basicFormError.briefDescriptionOfProduct}</p>}

                  </Grid>

                  <Grid className="brandname" item xs={12} sm={12} md={12}>
                    <input
                      type="text"
                      name="briefDescriptionOfCompany"
                      placeholder="Brief description about the company"
                      value={basicform.briefDescriptionOfCompany}
                      onChange={handleBasicFormChange}
                    />
                    {basicFormError.briefDescriptionOfCompany && <p style={{ color: "red" }}>{basicFormError.briefDescriptionOfCompany}</p>}

                  </Grid>

                </Grid>
              </Box>
            </div>
          </div>



          {/* Image */}
          <div className="right">
            <div>
              <img
              className="logo-image"
                src={basicImage}
                alt="Static"
                onClick={() => document.getElementById('fileInput').click()}
              />
              <input id="fileInput" type="file" onChange={handleBasicImageChange} style={{ display: 'none' }} />
            </div>

            <div className="text">
              <h6>Upload your company Logo</h6>
              <p>Supported file : JPG, JPEG, PNG</p>
            </div>
          </div>
        </div>
      </div>


      <div className="industry">
        <div className="title">
          <h3>Select your Industry*</h3>
        </div>

        <div className="radio">
          <Box sx={{ flexGrow: 1 }}>
            {basicFormError.typeOfIndustry && <p style={{ color: "red" }}>{basicFormError.typeOfIndustry}</p>}
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {
                industryRadio.map((item) => (
                  <Grid item xs={12} sm={4} md={4} lg={3} className="choose">
                    <input type="radio" name="typeOfIndustry" value={item}
                      onChange={handleBasicFormChange} />
                    <label>{item}</label>
                  </Grid>
                ))
              }
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} className="other">
              <input
                type="text"
                placeholder="Other Industry Sector"
                name="otherIndustrySector"
                value={basicform.otherIndustrySector}
                onChange={handleBasicFormChange}
              />


            </Grid>
          </Box>
        </div>
      </div>

      <div className="funding">
        <div className="title">
          <h3>Funding Cycle*</h3>
        </div>


        <div className="options">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {
                fundingCycle.map((item) => (
                  <Grid item xs={6} sm={3} md={2} lg={2} className="funding-choose">
                    <input type="radio" name="fundingCycle" value={item}
                      onChange={handleBasicFormChange} />
                    <label>{item}</label>
                  </Grid>
                ))
              }

            </Grid>
          </Box>
          {basicFormError.fundingCycle && <p style={{ color: "red" }}>{basicFormError.fundingCycle}</p>}
        </div>
      </div>

      <div className="areyou">
        <div className="title">
          <h3>Are you a* ?</h3>
        </div>
        <div className="areyou-options">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {
                areYou.map((item) => (
                  <Grid item xs={12} sm={6} md={5} lg={4} className="areyou-choose">
                    <input type="radio" name="typeOfMembership" value={item}
                      onChange={handleBasicFormChange} />
                    <label>{item}</label>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
          {basicFormError.typeOfMembership && <p style={{ color: "red" }}>{basicFormError.typeOfMembership}</p>}

        </div>
      </div>

      <div className="accountinfo">
        <div className="title">
          <h3>Startup Bank Account Info*</h3>
        </div>
        <div className="account-options">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 5, sm: 6, md: 8 }}>
              <Grid item xs={12} sm={6} md={4} className="account-option">
                <select value={basicform.bankType} name="bankType" onChange={handleBasicFormChange}>
                  <option value="" disabled selected>Bank Type</option>
                  <option value="Ordinary">Ordinary</option>
                  <option value="NRE">NRE</option>
                  <option value="NRO">NRO</option>
                </select>
                {basicFormError.bankType && <p style={{ color: "red" }}>{basicFormError.bankType}</p>}
              </Grid>

              <Grid item xs={12} sm={6} md={4} className="account-option">
                <input
                  type="text"
                  placeholder="Bank Name"
                  name="bankName"
                  value={basicform.bankName}
                  onChange={handleBasicFormChange}
                />
                {basicFormError.bankName && <p style={{ color: "red" }}>{basicFormError.bankName}</p>}

              </Grid>
              <Grid item xs={12} sm={6} md={4} className="account-option">
                <input
                  type="text"
                  placeholder="Account Number"
                  name="accountNumber"
                  value={basicform.accountNumber}
                  onChange={handleBasicFormChange}
                />
                {basicFormError.accountNumber && <p style={{ color: "red" }}>{basicFormError.accountNumber}</p>}

              </Grid>
              <Grid item xs={12} sm={6} md={4} className="account-option">
                <input
                  type="text"
                  placeholder="Bank Branch/Address"
                  name="bankBranch"
                  value={basicform.bankBranch}
                  onChange={handleBasicFormChange}
                />
                {basicFormError.bankBranch && <p style={{ color: "red" }}>{basicFormError.bankBranch}</p>}

              </Grid>
              <Grid item xs={12} sm={6} md={4} className="account-option">
                <input
                  type="text"
                  placeholder="IFSC Code"
                  name="IFSCcode"
                  value={basicform.IFSCcode}
                  onChange={handleBasicFormChange}
                />
                {basicFormError.IFSCcode && <p style={{ color: "red" }}>{basicFormError.IFSCcode}</p>}

              </Grid>
              <Grid item xs={12} sm={6} md={4} className="account-option">
                <input
                  type="text"
                  placeholder="SWIFT Code"
                  name="SwiftCode"
                  value={basicform.SwiftCode}
                  onChange={handleBasicFormChange}
                />
                {basicFormError.SwiftCode && <p style={{ color: "red" }}>{basicFormError.SwiftCode}</p>}
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>



      <div className="next">
        <button onClick={handleBasicFormSubmit}>Next</button>
      </div>
    </div>
  );
};

export default BasicInformation;
