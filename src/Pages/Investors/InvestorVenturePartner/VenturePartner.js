import React from 'react'
import InvestorVentureInfoTable from './VentureInvestedInfo/InvestorVentureInfoTable'
import InvestorVentureLedgerInfo from './VentureLedgerInfo/InvestorVentureLedgerInfo'
import './VenturePartnerStyle.scss';

const VenturePartner = () => {
  return (
    <div className='VenturePartnerStyle' style={{marginTop: '90px'}}>
      <InvestorVentureLedgerInfo/>
        <InvestorVentureInfoTable/>
    </div>
  )
}

export default VenturePartner