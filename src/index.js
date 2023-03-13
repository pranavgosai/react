import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Todoinput from './componentes/Todoinput';
import Todolist from './componentes/Todolist';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Resturant(){
    const [listTodo,setListTodo]= useState([]);
    let addList = (inputText) =>{
        if(inputText!=='')
        setListTodo([...listTodo,inputText]);
    }
    const deletListItem=(key)=>{
        let newListTodo = [...listTodo];
        newListTodo.splice(key,1)
        setListTodo([...newListTodo])
    }
    return(
    <div className="main-container">
        <div className="center-container">
            <Todoinput addList={addList}/>
            <h1 className='app-heading'>TODO</h1>
            <hr />
            {listTodo.map((listItem,i)=>{
                return(
                    <Todolist key={i} index={i} item={listItem} deletItem={deletListItem}/>
                )
            })}

        </div>
    </div>
    
    );
}
root.render(<Resturant />);