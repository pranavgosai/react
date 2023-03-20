import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function LoginForm()
{
    //create state variable using useState
   
   const ctrateDigts = ()=>{
    const digits = [];
    for (let i = 1; i < 10; i++){
      digits.push(
        <button key={i}>{i}</button>
      )

    }
    return digits;
   }

   
 

  

    return (
     <div className="calculator">
      <div className="display">
        <span>(0)</span> 0
      </div>
      <div className="operators">
        <button>/</button>
        <button>*</button>
        <button>+</button>
        <button>-</button>
        <button>DEl</button>
      </div>
      <div className="digits">
        {ctrateDigts()}
        <button>0</button>
        <button>.</button>
        <button>=</button>
      </div>
     </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);