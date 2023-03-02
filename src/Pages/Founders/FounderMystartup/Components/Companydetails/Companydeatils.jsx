import React, { useContext } from 'react'
import Businesshighlights from './Businesshighlights/Businesshighlights'
import Mystartup from './Companydetail/Companydetailssection/Mystartup'
import Teamprofile from './Companydetail/Teamprofile/Teamprofile'
import Investorprofile from './Companydetail/Investorsprofile/Investorprofile'
import Videosection from './Videosection/Videosection'
import Financialperformanceindicator from'./Companydetail/Financialperformanceindicator/Financialperformanceindicator'
import { SideBarContext } from '../../../../../AdminSidebarContex/SidebarContext'
import './Companydetailsstyel.scss'

import FounderNavbar from "../../../../../Components/FounderNavbar/FounderNavabr"

import FounderDashboardSidebar from '../../../../../Components/FounderSidebar/FounderDashboardSidebar'
import ResponsiveFounderNavbar from '../../../../../Components/ResponsivefounderNavbar/ResponsiveFounderNavbar'
import data from '../../Components/Companydetails/Companydetail/Companydetailssection/mystartupdata'
import logo11 from '../../../../../Assets/logo-1.png'
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Link } from 'react-router-dom'; 
import Monthlytablereport from './Businesshighlights/Businesshighlightsection/Monthlyreportcardtable/Monthlytablereport'
import Finanacialperformance from './Businesshighlights/Businesshighlightsection/Finanacialperformance/Finanacialperformance'
import EngagementPerformance from './Businesshighlights/Businesshighlightsection/EngagementPerformanceData/EngagementPerformance'
import BusinessPerformance from './Businesshighlights/Businesshighlightsection/BusinessPerformance/BusinessPerformance'
import BusinessUpdates from './Businesshighlights/Businesshighlightsection/BusinessUpdates/BusinessUpdates'
import Monthlytable from './Businesshighlights/Businesshighlightsection/Monthlyreportcardtable/Monthlytable'


const Companydeatils = () => {
  const {Close} = useContext(SideBarContext)
  const viewport_width = document.documentElement.clientWidth;
  
  return (
    <div className="dashboard-alignment">
      <div className="dashboard-sidebar">
        <FounderDashboardSidebar/>
      </div>
      <div className="dashboard-content">
      <div className="sidebarNavbar" >
          <ResponsiveFounderNavbar/>
        </div>
       
        {viewport_width > "1240" ? (
            <>
            <div className="adminDashboard-Navbar" style={{width: Close ? "95vw" : "82vw", marginLeft:Close ? "5vw": "18vw"}}>
          <FounderNavbar type="MyStartup"/>
        </div>
       <div className="founders-page" style={{width: Close? "95vw" : "82vw", marginLeft: Close ? "5vw" : "18vw",marginTop: '8vh'}}>
       <div className='founder-Mystartup'>
      <div className='companydetails-video'>
        <div className='mystartup-section' >
          <Mystartup/>
        </div>
        <div className='videos-section'>
          <Videosection/>
        </div>

      </div>
      <div className='BusiessHighlights'>
        <div className='Business' >
         <Businesshighlights/>
        </div>
        <div className='investers-profile-style'>
        <Investorprofile/>
        </div>
      </div>


      <div className='financial-indicator-team'>
      <div className='financial-overall-container'>
        <Financialperformanceindicator/>
      </div>
      <div className='team-profile-style'>
        <Teamprofile/>
      </div>

      </div>
</div>


       </div>
       </>
        ):(
          <>
          <div className="adminDashboard-Navbar" style={{width:"100vw", marginTop:"10vh"}}>
          <FounderNavbar type="MyStartup"/>
        </div>
          
       <div className="founders-page" style={{width: "100vw", marginLeft: "0",marginTop: '8vh'}}>
       
       <div className='founder-Mystartup'>
       
      <div className='companydetails-video'>
      <div className='seperate-sec'>
       

     <div className='image-companydetails'>
     <div className='Image-companydetails'>
  <div>
  {data.map ( (item) => {
        return(
            <div className='image-border' key={item.id}>
            <img src={logo11} alt="imageno" width={100} style={{position :"absolute" , left:Close ? "6px" : "3px"  }}/>
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
   
   <div className='style-link'>
   <div className='link'>
    <Link to="/founder/startupprofile"><DriveFileRenameOutlineIcon/></Link> 
  
     </div>
    <p>Startup</p>
   </div>
     </div>
       </div>
        <div className='mystartup-section' >
          <Mystartup/>
        </div>
        <div className='videos-section'>
          <Videosection/>
        </div>

      </div>
      <div className='BusiessHighlights'>
      <div className='business'>
      <div className='business-highlights'>
        <Monthlytable/>
      </div>
      <div className='business-highlights'>
        <Finanacialperformance/>
      </div>
      <div className='business-highlights'>
        <EngagementPerformance/>
      </div>
      <div className='business-highlights'>
      <BusinessPerformance/>
      </div>
      <div className='business-highlights'>
        <BusinessUpdates/>
      </div>
      </div>
        <div className='Business' >

         <Businesshighlights/>
        </div>
        <div className='investers-profile-style'>
        <Investorprofile/>
        </div>
      </div>


      <div className='financial-indicator-team'>
      <div className='financial-overall-container' >
        <Financialperformanceindicator/>
      </div>
      <div className='team-profile-style'>
        <Teamprofile/>
      </div>

      </div>
</div>


       </div>
       </>
        )}
      </div>
    </div>
    
  )
}

export default Companydeatils