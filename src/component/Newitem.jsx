import React, { useState } from 'react';
import {MDBBtn}  from 'mdb-react-ui-kit';

export default function Newitem({item}) {
    const [quantity,setquantity]=useState([
        {
            qunt:1,
            price:3,
            fname:'juice'
        }
    ]
    );
   
    const add=(e)=>{
        
        let nobj={qunt:2,price:4,fname:'botle'};
        let arr=quantity.concat(nobj);
        setquantity(arr);
        
    }
    
    const sub=()=>{
       

     
    }

    
         
    const Additem=input=>()=>{
        
        
        
    }
    console.log(quantity)
    return (
        <>
        
         
         <ul>
                            <li className='d-flex '>
                                <p style={{marginRight:'5px',hover:'cursor'}} onClick={sub} >-</p> 
                                {quantity.qunt}
                                 <p style={{marginLeft:'5px'}} onClick={add}>+</p>
                                 </li>
                            <li>${quantity.price}</li>
                            <li onClick={Additem('juice')}><MDBBtn  outline rounded color='warning' >
        Add
      </MDBBtn></li>
                        </ul>
                      
                      
          
            
        </>
    )
}
