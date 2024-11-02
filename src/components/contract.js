import React from 'react'
import '../assets/contract.css';

const Contract = () => {
  function hiddenDiv(event) {
    var div_check = event.target.checked
    if (div_check) {
      document.getElementById('v2').hidden = false;
    }
    else {
      document.getElementById('v2').hidden = true;
    }
  }
  return (
    <div className="contract card" id="v1">
      <div>
        Sözleşme koşullarını kabul et.
      </div>
      <div>
        <input className="checkbox" type="checkbox" id="contract" onClick={hiddenDiv} />
      </div>
    </div>
  )
}


export default Contract