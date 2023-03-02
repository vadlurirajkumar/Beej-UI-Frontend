import React, { useContext } from 'react'
import './StartupProfile.scss'
import { useState } from 'react'
import { SideBarContext } from '../../../../../AdminSidebarContex/SidebarContext'
import ResponsiveFounderNavbar from '../../../../../Components/ResponsivefounderNavbar/ResponsiveFounderNavbar'
import AdminNavbar from '../../../../../Components/AdminNavbar/AdminNavbar'
import logo from '../../../../../Assets/logo-1.png'
import FounderDashboardSidebar from '../../../../../Components/FounderSidebar/FounderDashboardSidebar'
import FounderNavabr from '../../../../../Components/FounderNavbar/FounderNavabr'
const StartupProfile = () => {
  const viewport_width = document.documentElement.clientWidth;
  const [form, setform] = useState({
    brandname:"",
    companyname:"",
    companytagline:"",
    companywebsite:"",
    employeecity:"",
    branchofficelocation:"",
    corporateofficelocation:"",
    incorporated:"",
    yearofincorporation:"",
    selectyourindustry:"",
    stageofcompany:"",
    banktype:"",
    bankname:"",
    accountnumber:"",
    branchaddress:"",
    ifsccode:"",
    swiftcode:"",
    corporatefundinglife:"",
    growth:"",
    maturity:"",
    shakeout:"",
    startup:"",
  });

  const updateform = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });

  };


    const handlesubmit=(e)=>{
      e.preventDefault()
        console.log(form)
    }

    


  const {Close} = useContext(SideBarContext)
  return (
    <>
    <div className="dashboard-alignment">
      <div className="dashboard-sidebar">
        <FounderDashboardSidebar/>
      </div>
      <div classNanpm startme="dashboard-content">
      <div className="sidebarNavbar" >
          <ResponsiveFounderNavbar/>
        </div>
        {viewport_width > "1240" ? (
            <>
            <div className="adminDashboard-Navbar" style={{width: Close ? "95vw" : "82vw",marginLeft: Close ? "5vw" : "18vw"}}>
          <FounderNavabr type="startupProfile" />
        </div>
      <div className='form-section'>
      <form onSubmit={handlesubmit} >

<div className='statup-profile-section' style={{width: Close? "95vw" : "85vw", marginLeft: Close ? "5vw" : "15vw",marginTop: '5vh'}}>
<div className='startup-profile-main-section'>
<div className='startup-profile-image-form-sections'>
<div className='startup-profile-image-section'>
<div className='startup-profile-image' >
<div>
  <img src={logo} alt="images" height={36} width={132} />
</div>
</div>
<p id="p1">Upload a startup logo</p>
<p id="p2">Supported file: JPG, JPEG (5.0 MB)</p>

</div>
<div className='right-section'>
<div className='startup-profile-form-section'>
    <div className='startup-profile-form-inputs'>
    <div id="right-input">
    <p>Brand Name</p>
    <input type="text" name='brandname' value={form.brandname} onChange={updateform} />
    </div>
    <div id="right-input">
        <p>Register company name</p>
        <input type="text" name='companyname' value={form.companyname} onChange = {updateform}/>
    </div>
    </div>
    <div className='startup-profile-form-input'>
        <p>Company tagline</p>
        <input type="text" name='companytagline' value={form.companytagline} onChange = {updateform}/>
    </div>
    <div className='startup-profile-form-inputs'>
    <div id="right-input">
    <p>Company website</p>
    <input type="text" name='companywebsite' value={form.companywebsite} onChange = {updateform}/>
    </div>
    <div id="right-input">
        <p>Employee</p>
        <input type="text" name='employeecity' value={form.employeecity} onChange = {updateform} />
    </div>
    </div>
    <div className='startup-profile-form-inputs'>
    <div id="right-input">
    <p>Branch office location</p>
    <input type="text" name='branchofficelocation' value={form.branchofficelocation} onChange = {updateform} />
    </div>
    <div id="right-input">
        <p>Corporate office location</p>
        <input type="text" name='corporateofficelocation' value={form.corporateofficelocation} onChange = {updateform} />
    </div>
    </div>
    <div className='startup-profile-form-inputs'>
    <div id="right-input">
    <p>Incorporated</p>
    <input type="text" name='incorporated' value={form.incorporated} onChange = {updateform} />
    </div>
    <div id="right-input">
        <p>Year of incorporation</p>
        <select name="banktype" id="banktype" value={form.banktype} onChange = {updateform}>
       <option value="Product">1-3 Years</option>
       <option value="Ordinary">3-6 Years</option>
       <option value="FOS">6-8 Years</option>
        </select>
    </div>
    </div>
</div>


</div>

</div>
</div>

{/* // second part// */}
<div className='startup-profile-form-section-bottom'>
<div className='product-video-section'>
<p>Product video</p>
<input type="text" name='productvideosection' disabled />
<p>Note: Use YouTube long URL only. For example https://www.youtube.com/results?search_query=xxxxx</p>
</div>
<div className='product-video-section'>
<p>Elevator pitch video</p>
<input type="text" name='productvideosection' disabled />
<p>Note: Use YouTube long URL only. For example https://www.youtube.com/results?search_query=xxxxx</p>
</div>
<div className='setindustrysection'>
<p>Select Your Industry</p>
<select name="selectyourindustry" id="industryselect" value={form.selectyourindustry} onChange = {updateform}>
<option value="product">Product</option>
<option value="service">Service</option>
<option value="food">Food</option>
<option value="product,service,food">product,service,food</option>
</select>
</div>
<div className='radio-section-main'>
<h3>Stage of company</h3>
<div className='radio-section'>
<div >
<input type="radio" id="first" name="growth"  value={form.corporatefundinglife} onChange = {updateform}/>
<label for="first">Corporate funding life cycle</label>
</div>
<div>
<input type="radio" id="second" name="growth" value={form.growth} onChange = {updateform} />
<label for="second">Growth</label>
</div>
<div>
  <input type="radio" id="third" name="growth" value={form.maturity} onChange = {updateform} />
<label for="third">Maturity</label>
</div>
<div>
<input type="radio" id="shakeout" name="growth" value={form.shakeout} onChange = {updateform} />
<label for="shakeout">Shake-Out</label>
</div>
<div>
<input type="radio" id="startup" name="growth"  value={form.startup} onChange = {updateform} />
<label for="startup">startup</label>
</div>
</div>



</div>
<div className='bankaccountinfo'>
<h2>startup bank account information</h2>
<div className='inner-section'>
<div className='bankselect'>
<p>Select Bank Type</p>
<select name="banktype" id="banktype" value={form.banktype} onChange = {updateform}>
<option value="Product">Product</option>
<option value="Ordinary">Ordinary</option>
<option value="FOS">FOS</option>
<option value="FOR">FOR</option>
</select>
</div>
<div className='bankselect'>
<p>Bank Name</p>
<select name="bankname" id="bankname" value={form.bankname} onChange = {updateform}>
<option value="SBH">SBH</option>
<option value="CANARA">Canara</option>
<option value="HDFC">HDFC</option>
<option value="YESBANK">YESBANK</option>
</select>
</div>
<div className='bankselect'>
<p>Account Number</p>
<input type="text" name="accountnumber" value={form.accountnumber} onChange = {updateform}/>
</div>
</div>
 <div className='inner-section'>
<div className='bankselect'>
<p>Bank Branch/Address</p>
<input type="text" name="branchaddress" value={form.branchaddress} onChange={updateform} />
</div>
<div className='bankselect'>
<p>IFSC code</p>
<input type="text" name="ifsccode" value={form.ifsccode} onChange={updateform} />
</div>
<div className='bankselect'>
<p>Swift code</p>
<input type="text" name="swiftcode" value={form.swiftcode} onChange={updateform} />
</div>

</div>
</div>

<div className='start-up-btn'>
<button className='btn-style'>Save</button>
</div>
</div>

</div>
</form>  
      </div>
      </>
        ):(
          <>
          <div className="adminDashboard-Navbar" style={{width: "100vw",marginTop:"10vh"}}>
          <FounderNavabr type="startupProfile" />
        </div>
          
      <div className='form-section'>
      <form onSubmit={handlesubmit} >

<div className='statup-profile-section' style={{width: "100vw", marginLeft:"0",marginTop: '10vh'}}>
<div className='startup-profile-main-section'>
<div className='startup-profile-image-form-sections'>
<div className='startup-profile-image-section'>
<div className='startup-profile-image' >
<div>
  <img src={logo} alt="images" height={36} width={132}  />
</div>
</div>
<p id="p1">Upload a startup logo</p>
<p id="p2">Supported file: JPG, JPEG (5.0 MB)</p>

</div>
<div className='right-section'>
<div className='startup-profile-form-section'>
    <div className='startup-profile-form-inputs'>
    <div id='right-input'>
    <p>Brand Name</p>
    <input type="text" name='brandname' value={form.brandname} onChange={updateform} />
    </div>
    <div id='right-input'>
        <p>Register company name</p>
        <input type="text" name='companyname' value={form.companyname} onChange = {updateform}/>
    </div>
    </div>
    <div className='startup-profile-form-input'>
        <p>Company tagline</p>
        <input type="text" name='companytagline' value={form.companytagline} onChange = {updateform}/>
    </div>
    <div className='startup-profile-form-inputs'>
    <div id='right-input'>
    <p>Company website</p>
    <input type="text" name='companywebsite' value={form.companywebsite} onChange = {updateform}/>
    </div>
    <div id='right-input'>
        <p>Employee</p>
        <input type="text" name='employeecity' value={form.employeecity} onChange = {updateform} />
    </div>
    </div>
    <div className='startup-profile-form-inputs'>
    <div id="right-input">
    <p>Branch office location</p>
    <input type="text" name='branchofficelocation' value={form.branchofficelocation} onChange = {updateform} />
    </div>
    <div id='right-input'>
        <p>Corporate office location</p>
        <input type="text" name='corporateofficelocation' value={form.corporateofficelocation} onChange = {updateform} />
    </div>
    </div>
    <div className='startup-profile-form-inputs'>
    <div id='right-input'>
    <p>Incorporated</p>
    <input type="text" name='incorporated' value={form.incorporated} onChange = {updateform} />
    </div>
    <div id='right-input'>
        <p>Year of incorporation</p>
        <select name="banktype" id="banktype" value={form.banktype} onChange = {updateform}>
       <option value="Product">1-3 Years</option>
       <option value="Ordinary">3-6 Years</option>
       <option value="FOS">6-8 Years</option>
        </select>
    </div>
    </div>
</div>


</div>

</div>
</div>

{/* // second part// */}
<div className='startup-profile-form-section-bottom'>
<div className='product-video-section'>
<p>Product video</p>
<input type="text" name='productvideosection' disabled />
<p>Note: Use YouTube long URL only. For example https://www.youtube.com/results?search_query=xxxxx</p>
</div>
<div className='product-video-section'>
<p>Elevator pitch video</p>
<input type="text" name='productvideosection' disabled />
<p>Note: Use YouTube long URL only. For example https://www.youtube.com/results?search_query=xxxxx</p>
</div>
<div className='setindustrysection'>
<p>Select Your Industry</p>
<select name="selectyourindustry" id="industryselect" value={form.selectyourindustry} onChange = {updateform}>
<option value="product">Product</option>
<option value="service">Service</option>
<option value="food">Food</option>
<option value="product,service,food">product,service,food</option>
</select>
</div>
<div className='radio-section-main'>
<h3>Stage of company</h3>
<div className='radio-section'>
<div >
<input type="radio" id="first" name="growth"  value={form.corporatefundinglife} onChange = {updateform}/>
<label for="first">Corporate funding life cycle</label>
</div>
<div>
<input type="radio" id="second" name="growth" value={form.growth} onChange = {updateform} />
<label for="second">Growth</label>
</div>
<div>
  <input type="radio" id="third" name="growth" value={form.maturity} onChange = {updateform} />
<label for="third">Maturity</label>
</div>
<div>
<input type="radio" id="shakeout" name="growth" value={form.shakeout} onChange = {updateform} />
<label for="shakeout">Shake-Out</label>
</div>
<div>
<input type="radio" id="startup" name="growth"  value={form.startup} onChange = {updateform} />
<label for="startup">startup</label>
</div>
</div>



</div>
<div className='bankaccountinfo'>

<h2>startup bank account information</h2>
<div className='inner-section'>
<div className='bankselect'>
<p>Select Bank Type</p>
<select name="banktype" id="banktype" value={form.banktype} onChange = {updateform}>
<option value="Product">Product</option>
<option value="Ordinary">Ordinary</option>
<option value="FOS">FOS</option>
<option value="FOR">FOR</option>
</select>
</div>
<div className='bankselect'>
<p>Bank Name</p>
<select name="bankname" id="bankname" value={form.bankname} onChange = {updateform}>
<option value="SBH">SBH</option>
<option value="CANARA">Canara</option>
<option value="HDFC">HDFC</option>
<option value="YESBANK">YESBANK</option>
</select>
</div>
<div className='bankselect'>
<p>Account Number</p>
<input type="text" name="accountnumber" value={form.accountnumber} onChange = {updateform}/>
</div>
</div>
<div className='inner-section'>
<div className='bankselect'>
<p>Bank Branch/Address</p>
<input type="text" name="branchaddress" value={form.branchaddress} onChange={updateform} />
</div>
<div className='bankselect'>
<p>IFSC code</p>
<input type="text" name="ifsccode" value={form.ifsccode} onChange={updateform} />
</div>
<div className='bankselect'>
<p>Swift code</p>
<input type="text" name="swiftcode" value={form.swiftcode} onChange={updateform} />
</div>

</div>
</div>

<div className='start-up-btn'>
<button className='btn-style'>Save</button>
</div>
</div>

</div>
</form>  
      </div>
      </>
        )}
          
   </div>
    </div>
    
    
    </>
    
  )
}

export default StartupProfile

