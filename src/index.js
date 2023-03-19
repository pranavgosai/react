import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

function LoginForm()
{
    //create state variable using useState
    var [msg,setMsg]=useState('hi');
   var [email,setEmail]=useState('');
   var [password,setPassword]=useState('');
   var [count,setCount] = useState(1);
   
   
  const SubmitForm =(e)=>{
    e.preventDefault();
    console.log(email);
    console.log(password);
    if(email=='pranavgosai01@gmail.com'&&password=='123')
    
    {
      setMsg("loghin ok");
    }else{
      setMsg("no hale");
      setCount(count+1);
    }if(count==3)
    {
        setMsg('aala revadene');
    }

  }

    return (
      <div className="card" >
        <form onSubmit={SubmitForm}>
      <h5 className="card-header">login form</h5>
      <div className="card-body">
        <h5 className="card-title">email</h5>
        <input type="email" placeholder='email' id='email'  value={email} onChange={(e)=>setEmail(e.target.value)}  /><br />
        <h5 className="card-title">password</h5>
        <input type="password" placeholder='password' id='password' value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
        <button href="#" type='submit' className="btn btn-primary mt-2">login</button>
        <h5>{msg}</h5>
      </div>
      </form>
    </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);