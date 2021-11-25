import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function App({api}) {
  
  return (
      <>
   <div className='main_div1'>
   {api.map((arr)=>{
       
      return(
            
    <div className='d-inline-block pt-5 col-md-4 col-sm-6 col-xs-8 main_div2'  >
      <MDBCard style={{ maxWidth: '35rem' ,}}>
    <MDBCardImage style={{height:'30rem'}} src={arr.largeImageURL} position='top' alt='...' />
    <MDBCardBody>
      <MDBCardTitle ><h1>Card title</h1></MDBCardTitle>
     <div className='card_div1'>
       <ul >
         <li><strong>View:</strong> 453</li>
         <li><strong>Downloads:</strong> 123</li>
         <li><strong>Likes:</strong> 9800</li>
       </ul>
     </div>
     <div className='card_div2' >
       <span> #dfdg</span>
       <span>#dfr</span>
       <span>#fdkfd</span>

     </div>
    </MDBCardBody>
  </MDBCard>
    </div>
      )

    })}
   </div>
    </>
  );
}