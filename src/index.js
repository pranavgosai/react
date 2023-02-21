import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function PlayerDetail(player)
{
    return (
      <div className='container mt-5'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card shadow'>
                    <div className='card-header'>
                        <h3>{player.name}</h3>
                    </div>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <tr>
                                <td width='25%'>dob</td>
                                <td>{player.dob}</td>
                            </tr>
                            <tr>
                                <td>gender</td>
                                <td>{player.gender}</td>
                            </tr>
                            <tr>
                                <td>bloodgroup</td>
                                <td>{player.bloodgroup}</td>
                            </tr>
                            <tr>
                                <td width='25%'>mobile</td>
                                <td>{player.mobile}</td>
                            </tr>
                            <tr>
                                <td width='25%'>email</td>
                                <td>{player.email}</td>
                            </tr>
                            <tr>
                                <td width='25%'>weight</td>
                                <td>{player.weight}</td>
                            </tr>
                            <tr>
                                <td width='25%'>height</td>
                                <td>{player.height}</td>
                            </tr>
                            <tr>
                                <td width='25%'>hobbies</td>
                                <td>{player.hobbies}</td>
                            </tr>
                            <tr>
                                <td width='25%'>education</td>
                                <td>{player.education}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}
//create javascript object 
let player = {
  name:'pranav',
  dob:'22-06-1999',
  gender:'male',
  bloodgroup:'b+',
  mobile:'123456789',
  email:'pranav@gmail.com',
  weight:'53',
  height:'5.6',
  hobbies:'music',
  education:'b.com',
}
root.render(PlayerDetail(player));