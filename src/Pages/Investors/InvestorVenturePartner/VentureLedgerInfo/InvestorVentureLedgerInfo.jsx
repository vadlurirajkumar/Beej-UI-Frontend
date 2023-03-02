import React from "react";
import { Portfolio } from "./InvestorVenturePartner";
import "./VentureStyle.scss";

//---------------- { MUI MATERIAL IMPORT } ------------
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SelectMonths from "../../../../Components/Dropdowns/SelectDropdown/SelectMonths";
import SelectRefferal from "../../../../Components/Dropdowns/SelectDropdown/SelectRefferal";
import SelectShowAll from "../../../../Components/Dropdowns/SelectDropdown/SelectShowAll";

const InvestorVentureLedgerInfo = () => {
  return (
    <div className="Venturepartner-investmentor">
      <h2>Ledger</h2>
      <div className="drop-downs">
        <SelectMonths />
        <div className="left">
          <SelectRefferal />
          <SelectShowAll />
        </div>
      </div>
      <TableContainer
        component={Paper}
        sx={{ maxHeight: 600 }}
        className="Venture-container"
      >
        <Table stickyHeader aria-label="sticky table" className="venture-data">
          <TableHead>
            <TableRow className="Venturehead">
              <TableCell className="Venturecell">Date</TableCell>
              <TableCell className="Venturecell">Transaction Type</TableCell>
              <TableCell className="Venturecell">Payment Details</TableCell>
              <TableCell className="Venturecell">Payout Fee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Portfolio.map((portfo) => {
              const {
                id,
                Date,
                TransactionType,
                PaymentDetails,
                claim,
                serveice,
                PayoutFee,
                link,
              } = portfo;
              return (
                <>
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    className="table-rows"
                  >
                    <TableCell className="Venturecell">
                      <p>{Date}</p>
                    </TableCell>
                    <TableCell className="Venturecell">
                      <p>{TransactionType}</p>
                    </TableCell>
                    <TableCell className="Venturecell">
                      <p>{PaymentDetails}</p>{" "}
                      <p>
                        {claim} in {link}
                      </p>{" "}
                      <p>{serveice}</p>
                    </TableCell>
                    <TableCell className="Venturecell">
                      <p>{PayoutFee}</p>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
        <div className="total">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <p>5014</p>
          </div>
        </div>
      </TableContainer>

      <div className="mobile-Ledgerinfo">
        {Portfolio.map((portfo) => {
          const {
            id,
            Date,
            TransactionType,
            PaymentDetails,
            claim,
            serveice,
            PayoutFee,
            link,
          } = portfo;
          return (
            <>
              <div className="mobile-Ledger" key={id}>
                {/* <div className="mobile-flex">
                  <h3>Date</h3> <span>:</span><p>{Date}</p>
                </div>

                <div className="mobile-flex">
                  <h3>Transaction Type</h3> <span>:</span><p>{TransactionType}</p>
                </div>

                <div className="mobile-flex">
                  <h3>Payment Details</h3> <span>:</span>
                  <p>
                    {PaymentDetails}{" "}
                    <span>
                      {claim} in {link}
                    </span>{" "}
                    <span>{serveice}</span>
                  </p>
                </div>

                <div className="mobile-flex">
                  <h3>Payout Fee</h3> <span>:</span><p>{PayoutFee}</p>
                </div> */}

                <div className="mobile-ledger-left">
                  <h3>Date</h3>
                  <h3>Transaction Type</h3>
                  <h3>Payment Details</h3> 
                  <h3>Payout Fee</h3>
                </div>
                <div className="mobile-ledger-center">
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div className="mobile-ledger-right">
                <p>{Date}</p>
                <p className="reffereal">{TransactionType}</p>
                <p className="para-span">
                    {PaymentDetails}{" "}
                    <span>
                      {claim} in {link}
                    </span>{" "}
                    <span>{serveice}</span>
                  </p>
                  <p>{PayoutFee}</p>
                  
                </div>
              </div>
            </>
          );
        })}

        <div className="total">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <p>5014</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default InvestorVentureLedgerInfo;
