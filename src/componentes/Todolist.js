import React from 'react'

function Todolist(props) {
  return (
    <div>
      <li className='list-item'>
     {props.item}
     <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" onClick={e=>{props.deletItem(props.index)}}></i>
     </span>
      </li>
    </div>
  )
}

export default Todolist
