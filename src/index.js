import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyRouter()
{
    const [name,setName]= useState();
        const Textchang =(e)=>{
            setName(e.target.value);
    }
    
    
    return(
        <div>
    
    <input type="text" placeholder='text' onChange={Textchang} />
      <p>hi{name}</p>

        </div>
       
    )
}
root.render(<MyRouter />);