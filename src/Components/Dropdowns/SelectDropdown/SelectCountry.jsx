import React from 'react'
import './SelectDropStyle.scss';


const SelectCountry = () => {
  return (
    <div className='select-dropdown'>
        <select className='select'>
           <option value="">India</option>
           <option value="">Pakistan</option>
           <option value="">Bangladesh</option>
        </select>
    </div>
  )
}

export default SelectCountry