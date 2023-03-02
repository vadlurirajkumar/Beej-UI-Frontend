import React from 'react'
import IRRGraph from './IRRGraph/IRRGraph'
import MyinvestimentGraphBar from './MyInvestmentsGraph/MyinvestimentGraphBar'

import './MyInvestmentGraph.scss';

const MyInvestmentGraphs = () => {
  return (
    <div className='ivestiment-graph-parent'>
        <MyinvestimentGraphBar/>
        <IRRGraph/>
    </div>
  )
}

export default MyInvestmentGraphs