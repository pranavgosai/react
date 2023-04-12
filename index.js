import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Calculator()
{
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState("");
  
    const handleNum1Change = (event) => {
      setNum1(event.target.value);
    };
  
    const handleNum2Change = (event) => {
      setNum2(event.target.value);
    };
  
    const handleAddition = () => {
      setResult(Number(num1) + Number(num2));
    };
  
    const handleSubtraction = () => {
      setResult(Number(num1) - Number(num2));
    };
  
    const handleMultiplication = () => {
      setResult(Number(num1) * Number(num2));
    };
  
    const handleDivision = () => {
      setResult(Number(num1) / Number(num2));
    };
    return(
        <div>
      <div>
        <input type="number" value={num1} onChange={handleNum1Change} />
        <input type="number" value={num2} onChange={handleNum2Change} />
      </div>
      <div>
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>
      <div>
        <input type="number" value={result} readOnly />
      </div>
    </div>
       
    )
}
root.render(<Calculator />);