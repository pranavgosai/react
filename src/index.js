
import React from 'react';
import ReactDOM from 'react-dom/client';
import Teacher from './index1';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function Team()
{
    return (
        <div className='container'>
            <div className='row'>
                <Teacher name="pranav" age='38' />
                <Teacher name="shivani" age='18' />
                <Teacher name="bob" age='25' />
                
            </div>
        </div>
    )
}
root.render(<Team />);