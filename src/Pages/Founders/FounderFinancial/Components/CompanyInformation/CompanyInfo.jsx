import React from "react";
import "./Companyinfo.scss";
import img from "../../../../../Assets/imgicon.png"

const CompanyInfo = () => {
 const images=[
  {
    id:1,
   title:"Upload your latest Pitch Deck",
   img:img,
   label:"Drop your file here or Browse",
   filetype:"Supported files : pdf, doc, pptx",
},
{
  id:2,
 title:"Upload your latest capitalization",
 img:img,
 label:"Drop your file here or Browse",
 filetype:"Supported files : pdf, doc, pptx",
},
{
  id:3,
  title:"Your key Clients",
  img:img,
  label:"Drop your file here or Browse",
  filetype:"Supported files : pdf, doc, pptx",
},
{
  id:4,
  title:"Upload your Investment terms",
  img:img,
  label:"Drop your file here or Browse",
  filetype:"Supported files : pdf, doc, pptx",
}
]

  return (
    <div className="ComapanyInfo">
      <h3> Company Product Information</h3>
      <div className="companyinfoContainer">
      {
        images.map((item)=>{
          return(
           <div className="boxes">
              <div className="title"> 
                <span>{item.title}</span>
              </div>
              <div className="file">
                <div className="image">
                  <img src={item.img} alt=""/>
                </div>
                <div className="content">
                  <label htmlFor="file">{item.label}</label>
                  <input type="file" id="file" name=""/>
                  <span>{item.filetype}</span>
                </div>
              </div>
              </div>
          
          )
        })
      }
      </div>
      <div className="buttons">
        {/* <button type="submit">Back</button> */}
        <button type="submit">Save</button>
      </div>
    </div>
  );
};

export default CompanyInfo;
