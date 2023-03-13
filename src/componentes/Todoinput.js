import React,{useState} from 'react'

function Todoinput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterpress = () =>{
        if(e.keyCode===13)
            {props.addList(inputText);setInputText("")}
        
    }
  return (
   
    <div>
      <div className="input-container">
        <input type="text" className='input-box-todo' placeholder='Enter your todo' value={inputText} onChange={e=>{setInputText(e.target.value)}}  onKeyDown={handleEnterpress}/>
        <button className='add-btn' onClick={()=>{props.addList(inputText);setInputText("")}}>+</button>
  
      </div>
    </div>
  )
}

export default Todoinput
