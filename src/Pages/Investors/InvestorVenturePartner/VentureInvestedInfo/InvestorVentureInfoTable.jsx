import React from "react";
import InvestInfos from "./InvestorInfoData.json";
import "./InvestorInfoVenture.scss";

//---------------- { MUI MATERIAL IMPORT } ------------
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const InvestorVentureInfoTable = () => {
  return (
    <div className="investmentor-Venturepartner">
      <h2>INVESTOR INFO</h2>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 550 }}
        className="table-container"
      >
        <Table stickyHeader aria-label="sticky table" className="table-data">
          <TableHead className="table-head">
            <TableRow className="table-head-row">
              <TableCell className="tablecell">Sr No.</TableCell>
              <TableCell className="tablecell">Name</TableCell>
              <TableCell className="tablecell">Status</TableCell>
              <TableCell className="tablecell">Number of Investments</TableCell>
              <TableCell className="tablecell">Amount Invested</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {InvestInfos.map((portfo) => {
              const {
                id,
                SrNo,
                Name,
                Status,
                NumberofInvestments,
                AmountInvested,
              } = portfo;
              return (
                <>
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="t-rows"
                  >
                    <TableCell className="tcell">{SrNo}</TableCell>
                    <TableCell className="tcell">{Name}</TableCell>
                    <TableCell className="tcell">{Status}</TableCell>
                    <TableCell className="tcell">
                      {NumberofInvestments}
                    </TableCell>

                    <TableCell className="tcell">{AmountInvested}</TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <div className="mobile-ventureinfo">
        {InvestInfos.map((portfo) => {
          const {
            id,
            SrNo,
            Name,
            Status,
            NumberofInvestments,
            AmountInvested,
          } = portfo;
          return (
            <>
              <div className="mobile-venture" key={id}>
              <div className="mobile-venture-left">
                  <h3>Sr No.</h3>
                  <h3>Name</h3>
                  <h3>Status</h3> 
                  <h3>Number of Investments</h3>
                  <h3>Amount Invested</h3>
                </div>
                <div className="mobile-venture-center">
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                 
                </div>
                <div className="mobile-venture-right">
                <p >{SrNo}</p>
                <p >{Name}</p>
                  <p>{Status}</p>
                  <p>{NumberofInvestments}</p>
                  <p>{AmountInvested}</p>
                </div>
              </div>
             
            </>
          );
        })}
      </div>
    </div>
    // </div>
  );
};

export default InvestorVentureInfoTable;
