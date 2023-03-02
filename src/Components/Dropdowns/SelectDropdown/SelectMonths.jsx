import React from 'react'
import './SelectStyles.scss';


const SelectMonths = () => {
  return (
    <div className='select-dropdown'>
            <select className='select' style={{width: '100%', backgroundColor: '#023122', color: 'white'}}>
              <optgroup className='optional-group'>
              <option value="" >January</option>
               <option value="">February</option>
               <option value="">March</option>
               <option value="">April</option>
               <option value="">May</option>
               <option value="">June</option>
               <option value="">July</option>
               <option value="">August</option>
               <option value="">September</option>
               <option value="">October</option>
               <option value="">November</option>
               <option value="">December</option>
              </optgroup>
            </select>
        </div>
  )
}

export default SelectMonths