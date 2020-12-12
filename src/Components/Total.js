import React from 'react';
import './Total.css';

const Total =(props)=> {
    
   
    let order_total, totalPrice, totalDiscount, totalTypeDiscount;
    if(props.totalQty!==0){
        totalPrice= 'Rs '+(props.totalPrice.toFixed(2));
        totalDiscount= 'Rs '+(props.totalDiscount.toFixed(2));
        totalTypeDiscount= 'Rs '+(props.totalTypeDiscount.toFixed(2));
        order_total= 'Rs '+((props.totalPrice-props.totalDiscount-props.totalTypeDiscount).toFixed(2));
    }else{
        totalPrice= 'Rs 0.00';
        totalDiscount= 'Rs 0.00';
        totalTypeDiscount= 'Rs 0.00';
        order_total= 'Rs 0.00s';
    }
    
 
    return (    
        <div className="body">
        <b className="total">Total</b>
        
        <hr/>
        
        <p>Items({props.totalQty}):&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;{totalPrice}</p>
        <p>Discount:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;-{totalDiscount}</p>
        <p>Type discount:&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;-{totalTypeDiscount}</p>
    
        <hr/>
            
        <p><b>Order total</b>:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;{order_total}</p>
        </div>
       )
       
}

export default Total;