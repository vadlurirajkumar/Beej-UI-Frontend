import React from "react";
import "./InvestorMyportfolio.scss";

//---------------- { MUI MATERIAL IMPORT } ------------
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Portfolio } from "./InvestorMyportfolio";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";



const InvestorPortfolio = () => {
  return (
    <div className="investment-deals">
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 950 }}
        className="table-container"
      >
        <Table stickyHeader aria-label="sticky table" className="table-data">
          <TableHead className="head-table">
            <TableRow>
              <TableCell align="center" className="tablehead">
                Startup
              </TableCell>
              <TableCell align="center" className="tablehead">
                Date
              </TableCell>
              <TableCell align="center" className="tablehead">
                {" "}
                Round
              </TableCell>
              <TableCell align="center" className="tablehead">
                My Investment
              </TableCell>
              <TableCell align="center" className="tablehead">
                Profit Earned
              </TableCell>
              <TableCell align="center" className="tablehead">
                {" "}
                Behalf Of
              </TableCell>
              <TableCell align="center" className="tablehead">
                InvestmentType
              </TableCell>
              <TableCell align="center" className="tablehead">
                Show Publicly
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Portfolio.map((portfo) => {
              const {
                id,
                Startup,
                Date,
                Round,
                MyInvestment,
                ProfitEarned,
                BehalfOf,
                InvestmentType,

                // ShowPublicly,
              } = portfo;

              return (
                <>
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="table-rows"
                  >
                    <TableCell align="center" className="tablecell">
                      <img src={Startup} alt="" />
                    </TableCell>
                    <TableCell align="center" className="tablecell">
                      {Date}
                    </TableCell>
                    <TableCell align="center" className="tablecell">
                      {Round}
                    </TableCell>
                    <TableCell align="center" className="tablecell">
                      {MyInvestment}
                    </TableCell>
                    <TableCell align="center" className="tablecell">
                      {ProfitEarned}
                    </TableCell>
                    <TableCell align="center" className="tablecell">
                      {BehalfOf}
                    </TableCell>
                    <TableCell align="center" className="tablecell">
                      {InvestmentType}
                    </TableCell>
                    <TableCell align="center" className="tablecell">
                      <input type="checkbox" name="" id="" />
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {/* -------------- MOBILE VIEW OF SLIDERS -------- */}

  <div className="swiper">
     <Swiper
        slidesPerView={1}
        spaceBetween={50}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Pagination]}
        className="investor-slider"
        pagination={{
          clickable: true,
        }}

      >
          {Portfolio.map((portfolio) => {
            const {
              Startup,
              Date,
              Round,
              MyInvestment,
              ProfitEarned,
              BehalfOf,
              InvestmentType,
            } = portfolio;
            return (
              <>
                <Swiper className="porfolio-swiper-cards">
                <SwiperSlide className="swiper-slide">
                <div className="mobile-porfolio">
                    <div className="left-data">
                      <p>Startup</p>
                      <p>Date</p>
                      <p>Round</p>
                      <p>My Investment</p>
                      <p>Profit Earned</p>
                      <p>Behalf Of</p>
                      <p>Investment Type</p>
                      <p >Show Publicly</p>
                    </div>
                    <div className="right-data">
                      <img src={Startup} alt="" />
                      <p>{Date}</p>
                      <p>{Round}</p>
                      <p>{MyInvestment}</p>
                      <p>{ProfitEarned}</p>
                      <p>{BehalfOf}</p>
                      <p>{InvestmentType}</p>
                      <p>
                      <input type="checkbox" name="" id="" />
                    </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              </>
            );
          })}
        </Swiper>
      </div>
     
  

       
    </div>
  );
};

export default InvestorPortfolio;
