import React,{useContext} from 'react'
import img from "../../../../../Assets/imgicon.png"
import "./Financialinformation.scss"
import { SideBarContext } from "../../../../../AdminSidebarContex/SidebarContext";

const FinancialInformation = () => {
  const { Close } = useContext(SideBarContext);
  const viewport_width = document.documentElement.clientWidth;

    const images=[
        {
          id:1,
         title:"Upload financial documents for last 1 year(provide provisional if company is less than 1 year old)",
         img:img,
         label:"Drop your file here or Browse",
         filetype:"Supported files : pdf, doc, pptx",
         
      },
      {
        id:2,
       title:"Upload projections for next 2 years",
       img:img,
       label:"Drop your file here or Browse",
       filetype:"Supported files : pdf, doc, pptx",
      },
    ]
  return (
    <div className='FinancialInformation'>
     
      <h3>Financial Information</h3>
      {viewport_width > "1240" ? (
            <>
            <div className="financialinfoContainer"  style={{
                  width: Close ? "87vw" : "80vw"}}>
      {
        images.map((item)=>{
          return(
            
           <div className="boxes" >
              <div className="title"> 
                <span>{item.title}</span>
              </div>
              <div className="file">
                <div className="image">
                  <img src={item.img} alt=""/>
                </div>
                <div className="content">
                  <label htmlFor='file'>{item.label}</label>
                  <input type="file" id="file" name="" style={{display:"none"}}/>
                  <span>{item.filetype}</span>
                </div>
              </div>
              </div>
             
          
          )
        })
      }
      </div>
            </>
      ):(
      <div className="financialinfoContainer"  style={{
                  width: "98vw"}}>
      {
        images.map((item)=>{
          return(
            
           <div className="boxes" >
              <div className="title"> 
                <span>{item.title}</span>
              </div>
              <div className="file">
                <div className="image">
                  <img src={item.img} alt=""/>
                </div>
                <div className="content">
                  <label htmlFor='file'>{item.label}</label>
                  <input type="file" id="file" name="" style={{display:"none"}}/>
                  <span>{item.filetype}</span>
                </div>
              </div>
              </div>
             
          
          )
        })
      }
      </div>
      )}
      <div className="buttons">
   
        {/* <button type="submit">Back</button> */}
        <button type="submit">Save</button>
      </div>
    </div>
    
  )
}

export default FinancialInformation