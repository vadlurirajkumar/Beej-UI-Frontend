import React from 'react'
import './Mystartup.scss';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import data from './mystartupdata'
import LanguageIcon from '@mui/icons-material/Language';
import logo11 from '../../../../../../../Assets/logo-1.png' 
import { Link } from 'react-router-dom';    
import { useContext } from 'react';
import { SideBarContext } from '../../../../../../../AdminSidebarContex/SidebarContext';

const Mystartup = () => {
const{Close}  = useContext(SideBarContext)
  
    return (
    <div className='company-details-sectio'>
      
      <div className='company-details-card'>
      <div className='company-details-card-section'>
        <h3>Company Details</h3>
        </div>
     <div>
    <Link to="/founder/startupprofile"><DriveFileRenameOutlineIcon/></Link> 
  
     </div>
      </div>

     <div className='image-companydetails'>
     <div className='Image-comapanydetails'>
  <div>
  {data.map ( (item) => {
        return(
            <div className='image-border' key={item.id}>
            <img src={logo11} alt="imageno" width={102} style={{position :"absolute" , left:Close ? "6px" : "3px"  }}/>
             </div>   
            )})
}
  </div>

  <div className='companyname-vertical-section'>
  {data.map ( (item) => {
        return(
            <div className='image-bor' key={item.id}>
              <div><h2 className='smal'> {item.companyname}</h2></div>
             <div><p>{item.Founder}</p></div>
             <div><p>{item.companylevel}</p> </div>
             </div>   
            )})
        }
  </div>
  </div>
   
   <div className='style-startup'>
    <p>Startup</p>
   </div>
     </div>
  
        <div>
{data.map ( (item) => {
        return(
            <div className='description-section' key={item.id}>
             <div className='description-style'>
             <div className='span-ele'> <div className='left'><h4>Description:</h4></div>  <div className='right'><p>{item.Description}</p></div> </div>
             <div className='span-ele'><div className='left'><h4>Proudct Decription :</h4></div> <div className='right'><p>{item.products}</p></div></div>
             <div className='span-ele2'> <div className='span-ele'><div className='left1'><h4>Incorporated At : </h4></div> <div className='right'><p>{item.Incorporated}</p></div></div>
            <div className='span-ele3'><div> <LanguageIcon/> </div><div><h4>{item.Link}</h4></div></div>
</div>

             </div>
             </div>   
            )})
}
        </div>

<div >
{data.map ( (item) => {
// data
        return(
            <div className='features-buttons'>
              <div className='style-startup'  key={item.id}>
            <p>{item.companyFeatures1} </p>  
             </div>
             <div className='style-startup' key={item.id}>
            <p>{item.companyFeatures2} </p>  
             </div>
             <div className='stylestartups' key={item.id}>
             <p>{item.companyFeatures3} </p> 
             </div>
            </div>
             
            )})
}
</div>     
    </div>
    
  )
}

export default Mystartup