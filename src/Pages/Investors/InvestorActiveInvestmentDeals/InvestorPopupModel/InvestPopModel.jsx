import React from 'react'
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import './InvestPopup.scss'
import investAmount from "./investLatestValution.json";

import {useState} from 'react'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function InvestPopup() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="invest-popmodel">
      <button className="pop-btn" onClick={handleClickOpen}>
        invest
      </button>
      <BootstrapDialog 
      className="dialog-pop"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
            StartUp
        </BootstrapDialogTitle>
        <DialogContent >
          {investAmount.map((pop) => {
            const {
              LatestValuation,
              FundPlatform,
              FundTotal,
              CommittedAmount,
            } = pop;

           
            return (
             <div className="popup-container">
                 <div className="popup-data-card">
                <div className="popup-card-label">
                  <label>Latest Valuation</label>
                  <label>Fund ask-target(Platform)</label>
                  <label>Fund ask-target(Total)</label>
                  <label>Committed amount</label>
                </div>
                <div className="popup-card" key={pop}>
                  <p>{LatestValuation}</p>
                  <p>{FundPlatform}</p>
                  <p>{FundTotal}</p>
                  <p>{CommittedAmount}</p>
                </div>
              </div>
              <form action="">
                <input type="text" placeholder="Enter the amount you want to invest*"/>
              </form>
             </div>
            );
          })}
        </DialogContent>
        <DialogActions style={{justifyContent: 'center'}}>
          <button  onClick={handleClose} className='pop-btn'>
            Invest
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
