import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function LoginForm()
{
    //create state variable using useState
   const [count,setCount]= useState(0);
   const [time,setTime]=useState(new Date());
    useEffect(()=>{
        setTime(new Date());
    })

    return (<div>

        <h1>current time: {time.toUTCString()}</h1>
      
       
    </div>

    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);