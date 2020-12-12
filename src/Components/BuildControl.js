import React from 'react';
import './BuildControl.css';

const buildControl =(props)=> {
 
    return (   
        <tr>
          <td >
            <span>
              <span>
          <img src="https://place-hold.it/40.jpg" alt="Girl in a jacket" />
          </span>
          <span className= "Label">
            {props.label}
            </span>
            </span>
            </td>
          <td>{props.price} Rs</td>
          <td>{props.discount} Rs + {props.type_discount} Rs (TD)</td>
          <td><button disabled={props.disable} className="btn btn-warning" onClick={props.removeItems}>-</button></td>
          <td>{props.qty}</td>
          <td><button className='btn btn-success' onClick={props.addItems}>+</button></td>
          
          <td><button className='btn btn-danger' onClick={props.removeWholeItem}>Delete</button></td>
        </tr>
       )

    
}

export default buildControl;