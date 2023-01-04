import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import axios from 'axios';
export default function Register() {
    const [values,setvalues] = useState({
        email:"",
        password:"",
    });
    const handlesubmit =async(e)=>{
        e.preventDefault();
        try {
            const{data} = await axios.post("http://0.0.0.0:27017/jwt",{
                ...values,
            },{
                withCredentials:true,
            });
            console.log(data);
            if(data){
                if(data.errors){

                }else{

                }
            }
        }catch(err){
           console.log(err);
        }
    }
  return (
    <div className='container' >
        <h2>Register Account</h2>
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
                Alredy have an Account? <Link to="/login" >Login</Link>
            </span>
        </form>
        <ToastContainer/>
    </div>
  )
}
