import React from 'react';
import Contract from './components/contract'
import UserRegister from './components/userRegister'
import './assets/app.css';

function App() {
  const [checked, setChecked] = React.useState(false)
  return (
    <div className="app">
      <div>
        <Contract checked={checked} handleChange={() => {
          setChecked((prev) => {
            return !prev
          })
        }} />
        {checked && <UserRegister />}
      </div>
    </div>
  );
}

export default App;
