import React from 'react';
import img from './image/juice.png';
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol ,MDBBtn } from 'mdb-react-ui-kit';


export default function Sidecard({item}) {
  console.log(`$`)
  
  return (
    <div className='col-6'>
      <MDBCard className='sidecard' style={{ maxWidth: '540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={img} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle className='crdtitle'>{item.name}</MDBCardTitle>

            <span> <MDBBtn outline rounded className='mx-2' color='secondary 'className='m-1'>30 ml</MDBBtn></span>
      <span><MDBBtn outline rounded color='success' className='m-1'>30 ml</MDBBtn></span>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>
                    
                    </div>
    
  );
}