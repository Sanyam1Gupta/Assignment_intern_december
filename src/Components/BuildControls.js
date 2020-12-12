import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl'; 


const buildControls =(props)=> {

    return (
        
        <div className= "BuildControls">
        
        <table class="table">
    
        <thead>
            <tr>
              <th scope="col">Items({props.totalQty})</th>
              <th scope="col">Price for 1 Qty</th>
              <th scope="col">Discount for 1 Qty</th>
              <th scope="col"></th>
              <th scope="col">Qty</th>
              <th scope="col"></th>
              
              <th scope="col"></th>
            </tr>
        </thead>

        
        <tbody>
        {props.items.map(item =>
              <BuildControl
                key={item.id}
                label={item.label}
                addItems={() =>props.addItems(item.id)}
                removeItems={() =>props.removeItems(item.id)} 
                disable={item.disable}
                qty={item.qty}
                price={item.price} 
                discount={item.discount}
                type_discount={item.type_discount}
                removeWholeItem={() =>props.removeWholeItem(item.id)}  
              />
       )}
       </tbody>
    
       

       </table>

        </div>
    );
}

export default buildControls;