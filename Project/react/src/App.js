import './App.css';
import { useState } from 'react';
import GroupButtons from './GroupButtons';

function App() {
  const [data, setData] = useState(null)
  function getData(val) {
    setData(val.target.value)
    console.warn(val.target.value)
  }

  const USD = true;

  return (
    <div className="App">
      <h1>Currency Converter</h1>
      <br></br>
      <h3>As of (present time), 1 {USD ? 'United States Dollar' : 'Euro'} equals</h3>
      <h1> 0.86 Euro</h1>
      <input type = "number" onChange={getData} placeholder="0" 
      step="0.5" min="0" max="100" onChange={getData}></input>
      <select>
        <option value = "USD">USD</option>
        <option value = "EUR">EUR</option>
      </select>
      <br></br>
      <br></br>
      <input type = "number" placeholder="0" step="0.5" min="0" max="100" onChange={getData}></input>
      <select>
        <option value = "USD">USD</option>
        <option value = "EUR">EUR</option>
        </select>
      <br></br>
      <br></br>
        <GroupButtons />
      <br></br>
      <h3>  (dollars/euros) equals 29 (opposite amount)</h3>
    </div>
  );
}

export default App;
