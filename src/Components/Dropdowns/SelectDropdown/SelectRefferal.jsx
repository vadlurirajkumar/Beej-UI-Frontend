import React from 'react'
import './SelectStyles.scss';

const SelectRefferal = () => {
  return (
    <div className='select-dropdown'>
            <select className='select' style={{width: '100%', backgroundColor: '#023122', color: 'white'}}>
               <option value="">All</option>
               <option value="">Referral Payment</option>
            </select>
        </div>
  )
}

export default SelectRefferal