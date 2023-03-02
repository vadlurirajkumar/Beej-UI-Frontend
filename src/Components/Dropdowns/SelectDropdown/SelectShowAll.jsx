import React from 'react'
import './SelectStyles.scss';


const SelectShowAll = () => {
  return (
    <div className='select-dropdown'>
    <select className='select' style={{width: '100%', backgroundColor: '#023122', color: 'white'}}>
       <option value="">Show All</option>
       <option value="">Show Due</option>
       <option value="">Show Paid</option>
    </select>
</div>
  )
}

export default SelectShowAll