import React from 'react'
import { useState} from 'react';
import Navbar from './Navbar'
import Search from './search'
import Sidecard from './sidecard';
import {MDBBtn}  from 'mdb-react-ui-kit';
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import Output from './output';
import Newitem from './Newitem';
import List from './List';
export default function shopcart() {
    const intial={quantity:1,name:'juice' ,price:4}
    const [item, setitem] = useState(intial);

return(
        <>
        <Navbar/>
        <div className='wrapper' >
            <div className=' container-fluid row mt-4 '>
                <div className='col-lg-6 col-md-4 col-sm-3 firstdiv'>
                <Search/>
                <h1>Billing List</h1>
                <List/>
                <div className='row'>
                <Sidecard item={item}/>
                <div className='col-lg-6 col-md-4 col-sm-3 cell'>
                <Newitem item={item}/>
                </div>
                    
                
                   
                </div>
                </div>
             <div className="col-lg-6 col-md-4 col-sm-3 output">
             <h1 className='mt-5'><MdAddShoppingCart/>Cart</h1>
             <Output item={intial} />
            
             </div>
                
            </div><br />
            
            </div>
            
        </>
)
    }
