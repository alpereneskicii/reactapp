import React from 'react'
import '../assets/template.css';

const Contract = () => {
  function hiddenDiv(event) {
    var div_check = event.target.checked
    if(div_check) {
        document.getElementById('v2').hidden = false;
    }
    else {
        document.getElementById('v2').hidden = true;
    }   
}
return (
  <div className="contract"id="v1">
    <div>
      <label className="label" htmlFor="contract">Sözleşme Koşullarini Kabul et</label>
    </div>
    <div className="checkboxDiv">
      <input className="checkbox" type="checkbox" id="contract" onClick={ hiddenDiv }/>
    </div>
  </div>
  )
}


export default Contract