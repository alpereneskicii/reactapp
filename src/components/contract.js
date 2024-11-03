import React from 'react'
import '../assets/contract.css';

const Contract = ({ checked, handleChange }) => {

  return (
    <div className="contract card" >
      <div>
        Sözleşme koşullarını kabul et.
      </div>
      <div>
        <input value={checked} type="checkbox" onChange={handleChange} />
      </div>
    </div>
  )
}


export default Contract