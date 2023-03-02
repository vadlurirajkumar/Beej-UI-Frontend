import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Investor from "./Investor";

import { useState } from "react";

import InvestPopModel from "../InvestorActiveInvestmentDeals/InvestorPopupModel/InvestPopModel";
import SearchIcon from "@mui/icons-material/Search";
import "./InvestimentDeals.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const investTable_heading = [
  {
    field: "Startup",
    headerName: "Startup",
    editable: true,
    width: 150,
    renderCell: (params) => {
      return (
        <div className="tablecell">
          <img src={params.row.Startup} alt="" className="cellImg" />
        </div>
      );
    },
  },

  {
    field: "LatestValuation",
    headerName: "Latest valuation",
    editable: true,
    width: 200,
  },
  {
    field: "FundingRounds",
    headerName: "Funding rounds",
    editable: true,
    width: 200,
  },
  { field: "RoundType", headerName: "Round type", editable: true, width: 150 },
  {
    field: "InterestedAmount",
    headerName: "Interested Amount",
    editable: true,
    width: 250,
  },
  {
    field: "InterestedInvestors",
    headerName: "Interested investors",
    editable: true, 
    width: 280,
  },
];

const InvestButton = [
  {
    field: "button",
    headerName: "",
    width: 230,
    renderCell: () => {
      return (
        <div className="cellAction">
          <InvestPopModel />
        </div>
      );
    },
  },
];

export const InvestmentDealsTable = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Box
        sx={{ 
          height: 700,
          width: "100%", 
          marginTop: "10vh",
          paddingBottom: "35px",
        }}
        className="data-grid"
      >
        <div className="investor-search-input">
          <form>
            <input
              type="search"
              placeholder="Search for startup"
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchIcon className="icon" />
          </form>
        </div>

        <DataGrid
          rowHeight={70}
          rows={Investor}
          headerHeight={80}
          columns={investTable_heading.concat(InvestButton)}
          // pageSize={10}
          //  rowsPerPageOptions={[9]}
          // checkboxSelection
          className="deals-table"
        />
      </Box>

      <div className="responsive-sliders">
        <div className="active-swiper">
          <Swiper
          slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="active-mySwiper"
            style={{ marginTop: "10vh" }}
          >
            {Investor.map((investor) => {
              const {
                Startup,
                LatestValuation,
                FundingRounds,
                RoundType,
                InterestedAmount,
                InterestedInvestors,
              } = investor;
              return (
                <>
                  <SwiperSlide className="swiper-card">
                    <div className="mobile-active-deals">
                      <div className="deals-data">
                        <p>Startup</p>
                        <img src={Startup} alt="" />
                      </div>
                      <div className="deals-data">
                        <p>Latest Valuation</p>
                        <p>{LatestValuation}</p>
                      </div>
                      <div className="deals-data">
                        <p>Funding rounds</p>
                        <p>{FundingRounds}</p>
                      </div>
                      <div className="deals-data">
                        <p>Round type</p>
                        <p>{RoundType}</p>
                      </div>
                      <div className="deals-data">
                        <p>Interested Amount</p>
                        <p>{InterestedAmount}</p>
                      </div>
                      <div className="deals-data">
                        <p>InterestedInvestors</p>
                        <p>{InterestedInvestors}</p>
                      </div>
                    </div>
                    <div className="bottom">
                      <button>Invest</button>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>

        </div>
      </div>
    </>
  );
};
