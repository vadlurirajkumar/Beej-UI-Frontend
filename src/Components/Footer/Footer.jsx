import React from "react";
import "./Footer.scss";
// import { Container } from "@mui/material";
// import { Grid } from "@mui/material";
// import { Box } from "@mui/material";
// import { Link } from "@mui/material";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <footer>
      {/* <Box sx={{width:"100%", display:"flex", justifyContent:"space-between"}}>
        <Container >
          <Grid container  justifyItems="center"
           rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 10 }} className="grid" >
            <Grid item xs={12} sm={4} md={3}  lg={3} className="grid-item">
              <Box sx={{ fontWeight:"600" , paddingBottom:"10px"}}>Venture Capital</Box>
              <Box>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Box>
            </Grid>
            <Grid item xs={12} sm={3} md={2} lg={2} className="grid-item">
              <Box sx={{ fontWeight:"600", paddingBottom:"10px"}}>Navigation</Box>
              <Box>
                <Link href="/" className="link">People</Link>
              </Box>
              <Box>
                <Link href="/" className="link">Portfolios</Link>
              </Box>
              <Box>
                <Link href="/" className="link">Webinars & Blogs</Link>
              </Box>
            </Grid>
            <Grid item xs={12}  sm={5} md={3} lg={3} className="grid-item">
              <Box sx={{ fontWeight:"600" , paddingBottom:"10px"}}>Get in Touch</Box>
              <Box className="redirection">
                <WebAssetIcon />
                <Link href="/" className="link">todaywebuikit.com</Link>
              </Box>
              <Box className="redirection">
                <EmailOutlinedIcon />
                <Link href="/" className="link">hello@email.com </Link>
              </Box>
              <Box className="redirection">
                <AddIcCallRoundedIcon />
                <Link href="/" className="link">+377 8832 9903</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} className="grid-item">
              <Box sx={{ fontWeight:"600" , paddingBottom:"10px"}}>Terms & Conditions</Box>
              <Box>
                <Link href="/" className="link">Privacy Policy</Link>
              </Box>
              <Box>
                <Link href="/" className="link">Privacy Policy</Link>
              </Box>
              <Box>
                <Link href="/" className="link">Privacy Policy</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={1} lg={1} className="grid-item">
              <Box className="redirection">
                <LinkedInIcon />
                <TwitterIcon />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box> */}
      <div className="venture-capital">
        <h4>Venture Capital</h4>
        <div className="venture-para">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the.
        </p>
        </div>
      </div>
      <div className="navigation">
        <h4>Navigation</h4>
        <div className="navigation-links">
          <p>People</p>
          <p>Portfolios</p>
          <p>Webinars & Blogs</p>
        </div>
      </div>
      <div className="get-in-touch">
        <h4>Get in Touch</h4>
        <div className="com">
          <div className="buikit">
            <WebAssetIcon className="footer-icon" />
            <p>todaywebuikit.com </p>
          </div>
          <div className="buikit">
            <EmailOutlinedIcon className="footer-icon" />

            <p>hello@email.com</p>
          </div>
          <div className="buikit">
            <AddIcCallRoundedIcon className="footer-icon" />

            <p>+377 8832 9903</p>
          </div>
        </div>
      </div>
      <div className="privacy">
        <h4>Privacy Policy</h4>
      </div>
      <div className="terms-conditions">
        <h4>Terms & Conditions</h4>
        <div className="footer-sociallinks">
          <FacebookOutlinedIcon className="footer-icon" />
          <LinkedInIcon className="footer-icon" />
          <TwitterIcon className="footer-icon" />
          <InstagramIcon className="footer-icon" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
