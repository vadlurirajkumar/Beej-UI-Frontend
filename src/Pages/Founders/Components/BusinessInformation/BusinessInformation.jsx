import "./BusinessInformation.scss";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {  useContext, useState, useRef } from "react";
import { FounderSignupContext } from "../../../../Context/FounderSignupContext";
import image from "../../../../Assets/businessFormImg.png"

const BusinessInformation = () => {

  const businessModel = ["B2B", "B2C", "B2G", "C2C", "B2B2C"]
  const raisedFunding = ["Yes", "No"]
  const round = ["Seed", "Pre-Seed", "Series A", "Series B", "Pre-Series A", "Pre-Series B"]
  const customerBase = ["Africa (excluding North Africa)", "India", "East Asia", "Europe", "Latin America", "Middle East & North Africa", "North America"]

  const {
    businessform,
    handleBusinessFormChange,
    handleTargetChange,
    handleBusinessFormSubmit,
    businessFormError,
  } = useContext(FounderSignupContext);


  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileInputChange = (event) => {
    const files = event.target.files;
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const fileInputRef = useRef(null);

  return (

    <div className="business-information">
      <div className="business-info">
        <div className="title">
          <h3>Business Information</h3>
        </div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 4, lg: 6 }}>
            <Grid item xs={12} sm={12} md={8}>
              <TextareaAutosize
                placeholder="Business Video Link"
                name="businessVideoLink"
                value={businessform.businessVideoLink}
                onChange={handleBusinessFormChange}
                style={{ resize: 'none' }}
              />
              {businessFormError.businessVideoLink && <p style={{ color: "red" }}>{businessFormError.businessVideoLink}</p>}
            </Grid>
          </Grid>
        </Box>
      </div>


      {/* Image */}
      <div className="product-screenshots">
        <div className="title">
          <h3>Product Application Screenshots</h3>
        </div>
        <div className="file-input-container">
          <img
            src={image}
            alt="Upload"
            className="file-input-icon"
            onClick={handleImageClick}
            style={{cursor:"Pointer"}}
          />
          <input
            type="file"
            multiple
            ref={fileInputRef}
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
          />
          {selectedFiles.length > 0 && (
            <ul>
              {selectedFiles.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          )}
        </div>


        <div className="note">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={8}>
              <Grid item xs={6} md={12}>
                <TextareaAutosize
                  placeholder="Describe Your Business Model"
                  name="describeBusinessModel"
                  value={businessform.describeBusinessModel}
                  onChange={handleBusinessFormChange}
                  style={{ resize: 'none' }}
                />
              </Grid>
            </Grid>
          </Box>
          <p>
            Note: dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation .
            Duis autem vel eum iriure dolor in hendrerit in
          </p>
          {businessFormError.describeBusinessModel && <p style={{ color: "red" }}>{businessFormError.describeBusinessModel}</p>}
        </div>
      </div>



      <div className="business-model">
        <div className="title">
          <h3>Business Model</h3>
        </div>
        <div className="model-choose">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {
                businessModel.map((item) => (
                  <Grid item xs={4} sm={2} md={2} lg={1.5} className="bus-model">
                    <input type="radio" value={item} name="businessModel" onChange={handleBusinessFormChange} />
                    <label>{item}</label>
                  </Grid>
                ))
              }

            </Grid>

          </Box>
          <br />
          {businessFormError.businessModel && <p style={{ color: "red" }}>{businessFormError.businessModel}</p>}
        </div>
      </div>


      <div className="target-customers">
        <div className="title">
          <h3>Where are your target customers based?</h3>
        </div>

        <div className="target-checkbox">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {
                customerBase.map((item) => (
                  <Grid item xs={12} sm={6} md={6} lg={4} className="bus-model">
                    <input type="checkbox" value={item} onChange={handleTargetChange} />
                    <label>{item}</label>
                  </Grid>
                ))
              }

            </Grid>
          </Box>
          <br />
          {businessFormError.targetCustomer && <p style={{ color: "red" }}>{businessFormError.targetCustomer}</p>}
        </div>

        <div className="details">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 4, sm: 5, md: 6, lg: 8 }}>
              <Grid item xs={12} md={12}>
                <TextareaAutosize
                  placeholder="Go to market channels"
                  name="marketChannel"
                  value={businessform.marketChannel}
                  onChange={handleBusinessFormChange}
                  style={{ resize: 'none' }}
                />
                {businessFormError.marketChannel && <p style={{ color: "red" }}>{businessFormError.marketChannel}</p>}
              </Grid>
              <Grid item xs={12} md={12}>
                <TextareaAutosize
                  placeholder="What problem or use case does your company address"
                  name="useCase"
                  value={businessform.useCase}
                  onChange={handleBusinessFormChange}
                  style={{ resize: 'none' }}
                />
                {businessFormError.useCase && <p style={{ color: "red" }}>{businessFormError.useCase}</p>}
              </Grid>
              <Grid item xs={12} md={12}>
                <TextareaAutosize
                  placeholder="Major competitors"
                  name="majorCompetitors"
                  value={businessform.majorCompetitors}
                  onChange={handleBusinessFormChange}
                  style={{ resize: 'none' }}
                />
                {businessFormError.majorCompetitors && <p style={{ color: "red" }}>{businessFormError.majorCompetitors}</p>}
              </Grid>
              <Grid item xs={12} md={12}>
                <TextareaAutosize
                  placeholder="What makes your company stand out amongst that competition?"
                  name="companyStandout"
                  value={businessform.companyStandout}
                  onChange={handleBusinessFormChange}
                  style={{ resize: 'none' }}
                />
                {businessFormError.companyStandout && <p style={{ color: "red" }}>{businessFormError.companyStandout}</p>}
              </Grid>

              <Grid item xs={12} md={4}>
                <TextareaAutosize
                  placeholder="Incorporated at"
                  name="incorporationAt"
                  value={businessform.incorporationAt}
                  onChange={handleBusinessFormChange}
                  style={{ resize: 'none' }}
                />
                {businessFormError.incorporationAt && <p style={{ color: "red" }}>{businessFormError.incorporationAt}</p>}
              </Grid>

              <Grid item xs={12} md={4}>
                <TextareaAutosize
                  placeholder="Branch/Offices Locations"
                  name="branchOrOfficeLocation"
                  value={businessform.branchOrOfficeLocation}
                  onChange={handleBusinessFormChange}
                  style={{ resize: 'none' }}
                />
                {businessFormError.branchOrOfficeLocation && <p style={{ color: "red" }}>{businessFormError.branchOrOfficeLocation}</p>}
              </Grid>

              <Grid item xs={12} md={4}>
                <TextareaAutosize
                  placeholder="Corporate Office Location"
                  name="corporateOfficeLocation"
                  value={businessform.corporateOfficeLocation}
                  onChange={handleBusinessFormChange}
                  style={{ resize: 'none' }}
                />
                {businessFormError.corporateOfficeLocation && <p style={{ color: "red" }}>{businessFormError.corporateOfficeLocation}</p>}
              </Grid>
            </Grid>
          </Box>
        </div>

      </div>



      <div className="outside-funding">
        <div className="title">
          <h3>Have you already raised any outside funding? </h3>
        </div>
        <div className="yes-no">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {
                raisedFunding.map((item) => (
                  <Grid item xs={6} sm={4} md={3} lg={2} className="boolean">
                    <input type="radio" value={item} name="raisedOutsideFunding" onChange={handleBusinessFormChange} />
                    <label>{item}</label>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
          <br />
          {businessFormError.raisedOutsideFunding && <p style={{ color: "red" }}>{businessFormError.raisedOutsideFunding}</p>}
        </div>
      </div>


      <div className="which-round">
        <div className="title">
          <h3>Which round ?</h3>
        </div>
        <div className="round-choose">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {
                round.map((item) => (
                  <Grid item xs={12} sm={4} md={4} lg={2} className="bus-model">
                    <input type="radio" value={item} name="typeOfRound" onChange={handleBusinessFormChange} />
                    <label>{item}</label>
                  </Grid>
                ))
              }
            </Grid>
          </Box>
          <br />
          {businessFormError.typeOfRound && <p style={{ color: "red" }}>{businessFormError.typeOfRound}</p>}

        </div>
      </div>


      <div className="total-amount">
        <div className="title">
          <h3>Total amount raised</h3>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6} md={4}>
              <TextareaAutosize
                placeholder="(Rupees)"
                name="totalAmountRaised"
                value={businessform.totalAmountRaised}
                onChange={handleBusinessFormChange}
                style={{ resize: 'none' }}
              />
              {businessFormError.totalAmountRaised && <p style={{ color: "red" }}>{businessFormError.totalAmountRaised}</p>}

            </Grid>
          </Grid>
        </Box>
      </div>


      <div className="next-button">
        <button onClick={handleBusinessFormSubmit}>Next</button>
      </div>
    </div>
  );
};

export default BusinessInformation;
