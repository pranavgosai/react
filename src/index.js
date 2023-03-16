import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './componants/Navbar';
import Header from './componants/Header';
import List from './componants/List';




function LoginForm()
{
    //create state variable using useState
    


  
    return (<div>
        <Navbar/>
        <Header/>
        <List/>
       
 
       
    </div>

    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LoginForm />);