import React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import {  MDBBtn} from 'mdb-react-ui-kit';
import { AiFillDelete } from "react-icons/ai";

import Sidecard from './sidecard';

export default function output({item}) {
    return (
        <>
         
             
                    
                    <div className='smallnav2 d-flex '>
              <Sidecard item={item}/>
              <h1 className='position-absolute' style={{left: '45%'}}><MDBBtn floating size='lg' tag='a' className='bg-danger'>
              <h3><AiFillDelete/></h3>
</MDBBtn></h1>

              </div>
              
              

         <div className='foter'>
         <h2>Total :</h2>
<h2> $11.34</h2>  


         </div>
         <div className='buton my-5'>
         <MDBBtn color='warning' style={{width:'400px',height:'50px'}}> Checkout </MDBBtn>
         </div>
            
        </>
    )
}
