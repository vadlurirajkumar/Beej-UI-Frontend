import React from "react";
import "./Businessinfo.scss"
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BusinessInfo = () => {
  return (
    <div className="BusinessInfo">
    <div className="BusinessInformation">
     
      <div className="businessContainer">
      <h3>Business Information</h3>
      <div className="revenue">
        <h4>Revenue</h4>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch"},
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Jan 2022" variant="standard" />
          <TextField id="standard-basic" label="Feb 2022" variant="standard" />
          <TextField id="standard-basic" label="Mar 2022" variant="standard" />
          <TextField id="standard-basic" label="Apr 2022" variant="standard" />
          <TextField id="standard-basic" label="May 2022" variant="standard" />
          <TextField id="standard-basic" label="Jun 2022" variant="standard" />
        </Box>
        </div>
        <div className="profit">

        <h4>Profit</h4>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
         <TextField id="standard-basic" label="Jan 2022" variant="standard" />
          <TextField id="standard-basic" label="Feb 2022" variant="standard" />
          <TextField id="standard-basic" label="Mar 2022" variant="standard" />
          <TextField id="standard-basic" label="Apr 2022" variant="standard" />
          <TextField id="standard-basic" label="May 2022" variant="standard" />
          <TextField id="standard-basic" label="Jun 2022" variant="standard" />
        </Box>
        </div>
      </div>
      <div className="businessContainer">
      <div className="revenue">
        <h4>GMV / Collection</h4>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
            <TextField id="standard-basic" label="Jan 2022" variant="standard"/>
          <TextField id="standard-basic" label="Feb 2022" variant="standard" />
          <TextField id="standard-basic" label="Mar 2022" variant="standard" />
          <TextField id="standard-basic" label="Apr 2022" variant="standard" />
          <TextField id="standard-basic" label="May 2022" variant="standard" />
          <TextField id="standard-basic" label="Jun 2022" variant="standard" />
          <TextField id="standard-basic" label="Jul 2022" variant="standard" />
          <TextField id="standard-basic" label="Aug 2022" variant="standard" />
          <TextField id="standard-basic" label="Sep 2022" variant="standard" />
          <TextField id="standard-basic" label="Oct 2022" variant="standard" />
          <TextField id="standard-basic" label="Nov 2022" variant="standard" />
          <TextField id="standard-basic" label="Dec 2022" variant="standard" />
        </Box>
        </div>
        <div className="profit">

        <h4>Transaction</h4>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Jan 2022" variant="standard"/>
          <TextField id="standard-basic" label="Feb 2022" variant="standard" />
          <TextField id="standard-basic" label="Mar 2022" variant="standard" />
          <TextField id="standard-basic" label="Apr 2022" variant="standard" />
          <TextField id="standard-basic" label="May 2022" variant="standard" />
          <TextField id="standard-basic" label="Jun 2022" variant="standard" />
          <TextField id="standard-basic" label="Jul 2022" variant="standard" />
          <TextField id="standard-basic" label="Aug 2022" variant="standard" />
          <TextField id="standard-basic" label="Sep 2022" variant="standard" />
          <TextField id="standard-basic" label="Oct 2022" variant="standard" />
          <TextField id="standard-basic" label="Nov 2022" variant="standard" />
          <TextField id="standard-basic" label="Dec 2022" variant="standard" />
        </Box>
        </div>
        
      </div>
      </div>
      <div className="buttons">
      <button type="submit">Save</button>
        {/* <button type="submit">+Add</button> */}
        </div>
    </div>
  );
};

export default BusinessInfo;
