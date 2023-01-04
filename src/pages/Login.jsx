import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'

export default function Login() {
    const [values,setvalues] = useState({
        email:"",
        password:"",
    });
    
  return (
    <div className='container' >
        <h2>Login Account</h2>
        <form onSubmit={(e)=>handlesubmit(e)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' placeholder='Email'  onChange={(e)=>setvalues({...values,[e.target.name]:e.target.value})}  />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' placeholder='Password' onChange={(e)=>setvalues({...values,[e.target.name]:e.target.value})} />
            </div>
            <button type='submit' >Submit</button>
            <span>
                Alredy have an Account? <Link to="/Register" >Register</Link>
            </span>
        </form>
        <ToastContainer/>
    </div>
  )
}
