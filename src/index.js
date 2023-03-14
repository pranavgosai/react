import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
function Resturant(){
   function add(a,b){
    const sum = a+b;
    return sum;
   }
   function sub(a,b){
    const sub = a-b;
    
    return sub;
   }
   function div(a,b){
    const div = a/b;
   
    return div;
   }
   function mult(a,b){
    const mult = a*b;
    return mult;
   }
   
    return(
    <div>
        <ol className=' text-center mt-5'>
        <h1>sum of tow no is {add(40,10)}</h1>
        <h1>sub of tow no is {sub(40,10)}</h1>
        <h1>div of tow no is {div(40,7)}</h1>
        <h1>mult of tow no is {mult(40,10)}</h1>
      </ol>
    </div>
    
    );
}
root.render(<Resturant />);