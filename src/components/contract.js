import React, { Component } from 'react'
function hiddenDiv(event) {
    var div_check = event.target.checked
    if(div_check) {
        document.getElementById('v2').hidden = false;
    }
    else {
        document.getElementById('v2').hidden = true;
    }   
}
export class contract extends Component {
  render() {
    return (
    <div id="v1">
        <input type="checkbox" id="contract" onClick={ hiddenDiv }/>
        <label htmlFor="contract">Sözleşme Koşullarini Kabul et</label>
    </div>
    )
  }
}

export default contract