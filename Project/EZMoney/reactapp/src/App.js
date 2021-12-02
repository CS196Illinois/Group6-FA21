import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #3939ab;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: #283593;
  }
`

function click() {
  alert("clicked");
}
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
      <h2>1 {USD ? 'United States Dollar' : 'Euro'} equals</h2>
      <h1> {data} Euro</h1>
      <input type = "number" min="0" max="1000000" step="5" onChange={getData}></input>
      <select>
        <option value = "USD">USD</option>
        <option value = "EUR">EUR</option>
        <option value = "NZD">NZD</option>
        <option value = "AUD">AUD</option>
        <option value = "SGD">SGD</option>
        <option value = "CAD">CAD</option>
        <option value = "CHF">CHF</option>
        <option value = "GBP">GBP</option>
        <option value = "KWD">KWD</option>
      </select>
      <br></br>
      <br></br>
      <input type = "number" min="0" max="1000000" step="5" onChange={getData}></input>
      <select>
        <option value = "USD">USD</option>
        <option value = "EUR">EUR</option>
        <option value = "NZD">NZD</option>
        <option value = "SGD">SGD</option>
        <option value = "CAD">CAD</option>
        <option value = "CHF">CHF</option>
        <option value = "GBP">GBP</option>
        <option value = "KWD">KWD</option>
      </select>
      <br></br>
      <br></br>
      <Button onClick={click}>
        Convert
      </Button>
    </div>
  );
}

export default App;