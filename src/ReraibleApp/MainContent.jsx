
import React from 'react';
import Card from './card';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function MainContent() {
  const arr=[1,2,3,4,5];

    return (
        <>
       <div >
       <div className='ContentTop ' style={{color:'black'}} >
          <div style={{marginLeft:"30px",color:'black'}}><h1 className='text-nowrap' style={{fontWeight:'bold'}}>Top Collection</h1></div>
            <div className='ml-4 select'><select className=' font-weight-bold' style={{color:'blue'}} >
  <option selected>days</option>
  <option value="1">1 day</option>
  <option value="2">2 days</option>
  <option value="3">one week</option>
</select></div>
<div className='SellAlldiv'>
<MDBBtn rounded className='SellAllbtn ' color='light' >
See All
</MDBBtn>
</div>
        </div>
         <div className='row '>
         
          {arr.map((item,index)=>{
            return( 
              <div className="col-lg-2 col-md-3  myCard">
              <Card number={item} key={index}/>
              
            </div>
            )
          })}
        </div> 
      
       </div>
            
        </>
    )
}
