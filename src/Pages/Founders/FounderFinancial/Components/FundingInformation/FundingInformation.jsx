import React, { useState } from "react";
import "./fundinginformation.scss";

const FundingInformation = () => {
  const [form, setform] = useState({
    instrument: "",
    fundinground: "",
    gap: "",
    discount: "",
    target: "",
    commitments: "",
    investername: "",
    leadinvester: "",
    previousfunding: "",
    valuationamount: "",
    valuationfloor: "",
    remark: "",
    fundasktarget: "",
    commitedamount: "",
  });
  const updateform = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="FundingInformation">
    <h3>Funding Information</h3>
      <form onSubmit={handlesubmit}>
      <div className="inputs">
        <div className="input1" >
          <label>Instruments</label>
          <select
            type="text"
            name="instrument"
            value={form.instrument}
            onChange={updateform}
            id="instrument"
          >
            <option value="Compulsory Convertible Preference shares (CCPS)">
              Compulsory Convertible Preference shares (CCPS)
            </option>
            <option value="Compulsory Convertible Debentures (CCD)">
              Compulsory Convertible Debentures (CCD)
            </option>
            <option value="Equity Shares">Equity Shares</option>
            <option value="Safe Note">Safe Note</option>
          </select>
        </div>
    
    
        <div className="input">
          <label>Funding Round</label>
          <select
            type="text"
            name="fundinground"
            value={form.fundinground}
            
            onChange={updateform}
            id="fundinground"
          >
            <option value="All">All</option>
            <option value="Pre-Seed">Pre-Seed</option>
            <option value="Seed">Seed</option>
            <option value="Pre-Series A">Pre-Series A</option>
            <option value="Series A">Series A</option>
            <option value="Pre-Series B">Pre-Series B</option>
            <option value="Series B">Series B</option>
          </select>
        </div>
        </div>
        <div className="Inputs">
        
        <div className="input">
          <label>Valuation Gap</label>
          <input
            type="text"
            name="gap"
            value={form.gap}
            onChange={updateform}
          />
        </div>
        <div className="input">
          <label>Discount</label>
          <input
            type="text"
            name="discount"
            value={form.discount}
            onChange={updateform}
          />
        </div>
    
        <div className="input">
          <label>Fund Ask Target(min)</label>
          <input
            type="text"
            name="target"
            value={form.target}
            onChange={updateform}
          />
        </div>
        <div className="input">
          <label>Existing Commitments</label>
          <input
            type="text"
            name="commitments"
            value={form.commitments}
            onChange={updateform}
          />
        </div>
        <div className="input">
          <label>Investor Name</label>
          <input
            type="text"
            name="investername"
            value={form.investername}
            onChange={updateform}
          />
        </div>
        <div className="input" id="radio">
          <label>Is He/she the lead Investor</label>
          <div className="radiobutton">
         
          <input type="radio" id="Yes" name="leadinvester" value={form.leadinvester} onChange={updateform}/>
          <label for="Yes">Yes</label>
          
          <input type="radio" id="No" name="leadinvester" value={form.leadinvester} onChange={updateform}/>
          <label for="No">No</label>
          </div>
          
          {/* <input
            type="text"
            name="leadinvester"
            value={form.leadinvester}
            onChange={updateform}
          /> */}
        </div>
        <div className="input">
          <label>Previous Funding</label>
          <input
            type="text"
            name="previousfunding"
            value={form.previousfunding}
            onChange={updateform}
          />
        </div>
        <div className="input">
          <label>Valuation Amount</label>
          <input
            type="text"
            name="valuationamount"
            value={form.valuationamount}
            onChange={updateform}
          />
        </div>
        <div className="input">
          <label>Valuation Floor</label>
          <input
            type="text"
            name="valuationfloor"
            value={form.valuationfloor}
            onChange={updateform}
          />
        </div>
        <div className="input">
          <label>Remark</label>
          <input
            type="text"
            name="remark"
            value={form.remark}
            onChange={updateform}
          />
        </div>
        <div className="input">
          <label>Fund ask target</label>
          <input
            type="text"
            name="fundasktarget"
            value={form.fundasktarget}
            onChange={updateform}
          />
        </div>
        <div className="input">
          <label>Commited amount</label>
          <input
            type="text"
            name="commitedamount"
            value={form.commitedamount}
            onChange={updateform}
          />
        </div>
        </div>
        
        <div className="buttons">
        {/* <button type="submit">Back</button> */}
        <button type="submit">Save</button>
      </div>
        
      </form>

    </div>
  );
};

export default FundingInformation;
