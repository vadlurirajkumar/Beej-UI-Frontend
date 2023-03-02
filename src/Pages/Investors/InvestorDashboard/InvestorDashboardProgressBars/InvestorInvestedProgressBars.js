import React from 'react'
import InvestedAmountBar from './InvestedAmount/InvestedAmountBar'
import InvestorCategoriesBar from './InvestorCategories/InvestorCategoriesBar'

import './InvestorInvestedBarsStyle.scss';

const InvestorInvestedProgressBars = () => {
  return (
    <div className='investor-invested-bars'>
        <InvestedAmountBar/>
        <InvestorCategoriesBar/>
    </div>
  )
}

export default InvestorInvestedProgressBars