import React from "react";
import { useState, useContext } from "react";
import "./FounderProfileEdit.scss";
import img from "../../../Assets/user.png";
import background from "../../../Assets/background.png";
// import img from "../../../Assets/back.png"
import { SideBarContext } from "../../../AdminSidebarContex/SidebarContext";
import FounderDashboardSidebar from "../../../Components/FounderSidebar/FounderDashboardSidebar";
import FounderNavabr from "../../../Components/FounderNavbar/FounderNavabr";
import ResponsiveFounderNavbar from "../../../Components/ResponsivefounderNavbar/ResponsiveFounderNavbar";

const FounderProfileEdit = () => {
  const [form, setform] = useState({
    img: img,
    name: "John_Deo",
    bio: "",
    location: "",
    designation: "",
    gender: "",
    education: "",
    linkdn: "",
    reference: "",
    industry: "",
    businessmodel: "",
    sales: "",
    competition: "",
    customerbasedin: "",
    headquater: "",
    stageofcomapany: "",
  });
  const updateform = (e) => {
    const { name, value } = e.target;

    setform({
      ...form,
      [name]: value,
    });

    console.log(form.bio);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const { Close } = useContext(SideBarContext);
  const viewport_width = document.documentElement.clientWidth;
  return (
    <>
      <div className="dashboard-alignment">
        <div className="dashboard-sidebar">
          <FounderDashboardSidebar />
        </div>
        <div className="dashboard-content">
        <div className="sidebarNavbar" >
          <ResponsiveFounderNavbar/>
        </div>
         
          {viewport_width > "1240" ? (
            <>
            <div className="adminDashboard-Navbar" style={{width: Close ? "95vw" : "82vw",marginLeft: Close ? "5vw" : "18vw"}}>
            <FounderNavabr type="editfounderProfile" />
          </div>
              <div
                className="founderprofileEdit"
                style={{
                  width: Close ? "93vw" : "80vw",
                  marginLeft: Close ? "6vw" : "19vw",
                  marginTop: "10vh",
                }}
              >
                <div className="backgroundimage">
                  <img src={background} alt="" />
                  <div className="profileimage">
                    <img src={form.img} alt="" />
                    <p>{form.name}</p>
                    <p>
                      Here for : <span>Service</span>
                    </p>
                  </div>
                </div>

                <div
                  className="profileContainer"
                  style={{ width: Close ? "75vw" : "66vw" }}
                >
                  <form onSubmit={handlesubmit}>
                    <div className="input">
                      <label>You bio</label>
                      <textarea
                        type="text"
                        name="bio"
                        value={form.bio}
                        placeholder="A high-net-worth individual who provides financial backing for small startups or entrepreneurs, typically in exchange for ownership equity in the company."
                        onChange={updateform}
                      />
                    </div>
                    <div className="inputs">
                      <div className="input">
                        <label>Location</label>
                        <input
                          type="text"
                          name="location"
                          value={form.location}
                          placeholder="Hyderabad"
                          onChange={updateform}
                        />
                      </div>
                      <div className="input">
                        <label>Current company / Designation</label>
                        <input
                          type="text"
                          name="designation"
                          value={form.designation}
                          placeholder="Chartered financial accountant"
                          onChange={updateform}
                        />
                      </div>
                      <div className="input">
                        <label>Gender</label>
                        <input
                          type="text"
                          name="gender"
                          value={form.gender}
                          placeholder="Male"
                          onChange={updateform}
                        />
                      </div>

                      <div className="input">
                        <label>Education</label>
                        <input
                          type="text"
                          name="education"
                          value={form.education}
                          placeholder="Master"
                          onChange={updateform}
                        />
                      </div>
                      <div className="input">
                        <label>LinkedIn URL</label>
                        <textarea
                          type="text"
                          name="linkdn"
                          value={form.linkdn}
                          placeholder="https://www.linkedin.com/company/vincentcarter/"
                          onChange={updateform}
                          id="inputlinkdnurl"
                        />
                      </div>
                      <div className="input">
                        <label>Reference URL</label>
                        <textarea
                          type="text"
                          name="reference"
                          value={form.reference}
                          placeholder="https://invstt.com/Register/Investor?reference=John"
                          onChange={updateform}
                          id="inputlinkdnurl"
                        />
                      </div>
                      <div className="input">
                        <label>Select your industry</label>
                        <input
                          type="text"
                          name="industry"
                          value={form.industry}
                          placeholder="Product, Service, Food"
                          onChange={updateform}
                        />
                      </div>
                      <div className="input">
                        <label>Business model category</label>
                        <input
                          type="text"
                          name="businessmodel"
                          value={form.businessmodel}
                          placeholder=""
                          onChange={updateform}
                        />
                      </div>
                      <div className="input">
                        <label>Types of sales</label>
                        <input
                          type="text"
                          name="slaes"
                          value={form.sales}
                          placeholder=""
                          onChange={updateform}
                        />
                      </div>
                      <div className="input">
                        <label>Competitors</label>
                        <input
                          type="text"
                          name="competition"
                          value={form.competition}
                          placeholder=""
                          onChange={updateform}
                        />
                      </div>
                      <div className="input">
                        <label>Customer based in</label>
                        <input
                          type="text"
                          name="customerbasedin"
                          value={form.customerbasedin}
                          placeholder=""
                          onChange={updateform}
                        />
                      </div>
                      <div className="input">
                        <label>Head quarter</label>
                        <input
                          type="text"
                          name="headquater"
                          value={form.headquater}
                          placeholder=""
                          onChange={updateform}
                        />
                      </div>
                      <div className="input">
                        <label>Stage of company</label>
                        <input
                          type="text"
                          name="stageofcomapany"
                          value={form.stageofcomapany}
                          placeholder="Startup"
                          onChange={updateform}
                        />
                      </div>
                    </div>
                    <button type="submit">Save</button>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <>
            <div className="adminDashboard-Navbar" style={{width: "100vw"}}>
            <FounderNavabr type="editfounderProfile" />
          </div>
            <div
              className="founderprofileEdit"
              style={{
                width: "100vw",
                marginLeft: 0,
                marginTop: "10vh",
              }}
            >
              <div className="backgroundimage">
                <img src={background} alt="" />
                <div className="profileimage">
                  <img src={form.img} alt="" />
                  <p>{form.name}</p>
                  <p>
                    Here for : <span>Service</span>
                  </p>
                </div>
              </div>

              <div
                className="profileContainer"
                style={{ width: Close ? "75vw" : "66vw" }}
              >
                <form onSubmit={handlesubmit}>
                  <div className="input">
                    <label>You bio</label>
                    <textarea
                      type="text"
                      name="bio"
                      value={form.bio}
                      placeholder="A high-net-worth individual who provides financial backing for small startups or entrepreneurs, typically in exchange for ownership equity in the company."
                      onChange={updateform}
                    />
                  </div>
                  <div className="inputs">
                    <div className="input">
                      <label>Location</label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        placeholder="Hyderabad"
                        onChange={updateform}
                      />
                    </div>
                    <div className="input">
                      <label>Current company / Designation</label>
                      <input
                        type="text"
                        name="designation"
                        value={form.designation}
                        placeholder="Chartered financial accountant"
                        onChange={updateform}
                      />
                    </div>
                    <div className="input">
                      <label>Gender</label>
                      <input
                        type="text"
                        name="gender"
                        value={form.gender}
                        placeholder="Male"
                        onChange={updateform}
                      />
                    </div>

                    <div className="input">
                      <label>Education</label>
                      <input
                        type="text"
                        name="education"
                        value={form.education}
                        placeholder="Master"
                        onChange={updateform}
                      />
                    </div>
                    <div className="input">
                      <label>LinkedIn URL</label>
                      <textarea
                        type="text"
                        name="linkdn"
                        value={form.linkdn}
                        placeholder="https://www.linkedin.com/company/vincentcarter/"
                        onChange={updateform}
                        id="inputlinkdnurl"
                      />
                    </div>
                    <div className="input">
                      <label>Reference URL</label>
                      <textarea
                        type="text"
                        name="reference"
                        value={form.reference}
                        placeholder="https://invstt.com/Register/Investor?reference=John"
                        onChange={updateform}
                        id="inputlinkdnurl"
                      />
                    </div>
                    <div className="input">
                      <label>Select your industry</label>
                      <input
                        type="text"
                        name="industry"
                        value={form.industry}
                        placeholder="Product, Service, Food"
                        onChange={updateform}
                      />
                    </div>
                    <div className="input">
                      <label>Business model category</label>
                      <input
                        type="text"
                        name="businessmodel"
                        value={form.businessmodel}
                        placeholder=""
                        onChange={updateform}
                      />
                    </div>
                    <div className="input">
                      <label>Types of sales</label>
                      <input
                        type="text"
                        name="slaes"
                        value={form.sales}
                        placeholder=""
                        onChange={updateform}
                      />
                    </div>
                    <div className="input">
                      <label>Competitors</label>
                      <input
                        type="text"
                        name="competition"
                        value={form.competition}
                        placeholder=""
                        onChange={updateform}
                      />
                    </div>
                    <div className="input">
                      <label>Customer based in</label>
                      <input
                        type="text"
                        name="customerbasedin"
                        value={form.customerbasedin}
                        placeholder=""
                        onChange={updateform}
                      />
                    </div>
                    <div className="input">
                      <label>Head quarter</label>
                      <input
                        type="text"
                        name="headquater"
                        value={form.headquater}
                        placeholder=""
                        onChange={updateform}
                      />
                    </div>
                    <div className="input">
                      <label>Stage of company</label>
                      <input
                        type="text"
                        name="stageofcomapany"
                        value={form.stageofcomapany}
                        placeholder="Startup"
                        onChange={updateform}
                      />
                    </div>
                  </div>
                  <button type="submit">Save</button>
                </form>
              </div>
            </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default FounderProfileEdit;
