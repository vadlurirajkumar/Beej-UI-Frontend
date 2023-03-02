import "./TeamInformation.scss";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import img from "../../../../Assets/founderImg2.png";

import { useContext } from "react";
import { FounderSignupContext } from "../../../../Context/FounderSignupContext";

const TeamInformation = () => {
  const fullTime = ["Yes", "no"];

  const {
    member,
    members,
    memberFormError,
    handleMembersChange,
    handleMembersSubmit,
    handleMemberDelete,
    teamformData,
    teamFormError,
    handleTeamFormChange,
    handleTeamFormSubmit,
    TeamImage,
    handleTeamImageChange,

  } = useContext(FounderSignupContext);

  return (
    <div className="teaminformation">
      <div className="team-info">
        <div className="title">
          <h3>Team Information</h3>
        </div>
        <div className="team-bottom">
          <div className="team-left">
          <div className="team-container">
          <div className="team-grid">
          <Grid container spacing={{ xs: 4, sm: 5, md: 6 }} >
          <Grid item xs={12} md={10} className="membername">
            <input
              placeholder="Team Member Name"
              name="name"
              value={member.name}
              onChange={handleMembersChange}
            />
            {memberFormError.name && (
              <p style={{ color: "red" }}>{memberFormError.name}</p>
            )}
          </Grid>
          <Grid item xs={12} md={10} className="membername">
            <input
              placeholder="Designation"
              name="designation"
              value={member.designation}
              onChange={handleMembersChange}
            />
            {memberFormError.designation && (
              <p style={{ color: "red" }}>{memberFormError.designation}</p>
            )}
          </Grid>
          <Grid item xs={12} md={10} className="membername">
            <input
              placeholder="Email Address"
              name="email"
              value={member.email}
              onChange={handleMembersChange}
            />
            {memberFormError.email && (
              <p style={{ color: "red" }}>{memberFormError.email}</p>
            )}
          </Grid>
          <Grid item xs={12} md={10} className="membername">
            <input
              placeholder="Linkedin URL"
              name="linkenIn"
              value={member.linkenIn}
              onChange={handleMembersChange}
            />
            {memberFormError.linkenIn && (
              <p style={{ color: "red" }}>{memberFormError.linkenIn}</p>
            )}
          </Grid>
          </Grid>
          </div>
          
          {/* Image */}
          <div className="right">
            <div >
              <img
                className="team-image"
                style={{ height: "150px", width: "150px", borderRadius: "50%" }}
                src={TeamImage}
                alt="Static"
                onClick={() => document.getElementById('fileInput').click()}
              />
              <input id="fileInput" type="file" onChange={handleTeamImageChange} style={{ display: 'none' }} />
            </div>

            <div className="text">
              <h6>Upload your company Logo</h6>
              <p>Supported file : JPG, JPEG, PNG</p>
            </div>
          </div>
          </div>
            
              <div className="add-button">
                <button id="button" onClick={handleMembersSubmit}>
                  + Add more
                </button>
              </div>
              <br />
              {teamFormError.message && (
                <p style={{ color: "red", textAlign: "center" }}>
                  {teamFormError.message}
                </p>
              )}
            

            <div className="memers-list">
              <div className="title" id="new">
                <h3>Team members list</h3>
              </div>
              {members.length === 0 ? (
                <p>Please add a record !</p>
              ) : (
                <Grid item xs={12} md={12} className="membername">
                  {members &&
                    members.map((item, index) => (
                      <Card sx={{ width: 350 }}>
                        <CardContent>
                          <Typography>{index + 1}-</Typography>

                          <Typography>Name: {item.name}</Typography>
                          <Typography>
                            Designation: {item.designation}
                          </Typography>
                          <Typography>Email: {item.email}</Typography>
                          <Typography>
                            LinkedIn url: {item.linkenIn}
                          </Typography>
                          <img src={img} alt="" style={{ height: "80px" }} />
                          <CardActions>
                            <DeleteIcon
                              alt=""
                              style={{ height: "40px" }}
                              onClick={() => handleMemberDelete(item)}
                            />
                          </CardActions>
                        </CardContent>
                      </Card>
                    ))}
                </Grid>
              )}
            </div>


            <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
              <Grid item xs={12} md={12} className="membername">
                <TextareaAutosize
                  placeholder="Tell us a bit about how founding team knows each other"
                  name="about"
                  value={teamformData.about}
                  onChange={handleTeamFormChange}
                  style={{ resize: "none" }}
                />
                {teamFormError.about && (
                  <p style={{ color: "red" }}>{teamFormError.about}</p>
                )}
              </Grid>
              <Grid item xs={12} md={12} className="membername">
                <TextareaAutosize
                  placeholder="Why did you decide to start this company?"
                  name="why"
                  value={teamformData.why}
                  onChange={handleTeamFormChange}
                  style={{ resize: "none" }}
                />
                {teamFormError.why && (
                  <p style={{ color: "red" }}>{teamFormError.why}</p>
                )}
              </Grid>
              <Grid item xs={12} md={12} className="membername">
                <TextareaAutosize
                  placeholder="Corporate Office Location"
                  name="officelocation"
                  value={teamformData.officelocation}
                  onChange={handleTeamFormChange}
                  style={{ resize: "none" }}
                />
                {teamFormError.officelocation && (
                  <p style={{ color: "red" }}>{teamFormError.officelocation}</p>
                )}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      <div className="fulltime-founders">
        <div className="title">
          <h3>Are all the founders full-time on this project?</h3>
        </div>
        <div className="yes-no">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {fullTime.map((item) => (
                <Grid item xs={12} sm={6} lg={1.5} className="boolean">
                  <input
                    type="radio"
                    value={item}
                    name="fullTime"
                    onChange={handleTeamFormChange}
                  />
                  <label>{item}</label>
                </Grid>
              ))}
            </Grid>
          </Box>
          <br />
          {teamFormError.fullTime && (
            <p style={{ color: "red" }}>{teamFormError.fullTime}</p>
          )}
        </div>
      </div>

      <div className="submit-button">
        <button onClick={handleTeamFormSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default TeamInformation;