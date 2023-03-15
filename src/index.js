import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';


function LoginForm()
{
    //create state variable using useState
    let time = new Date().toLocaleTimeString();
    const [ctime,setCtime] = useState(time);

    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time);

    }

    setInterval(UpdateTime,1000)
  
    return (<div className='canteiner text-center mt-5'>
        <h1>{ctime}</h1>
    </div>

    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);