import React from 'react'
import { MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function card({number}) {
    return (
        <>
          <div className='d-flex MainCard ' style={{backgroundColor:""}}>
            <div className='cardNumber'>{number}</div>
            <div className="cardimage">
              <img src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt="Error" />
            </div>
            <div className="cardContent">
              <ul>
                <li>Art Blocks</li>
                <li>$23,54,22</li>
              </ul>
            </div>
        
      </div>
            
        </>
    )
}









{/* <div className='para'><p>{number}</p></div>
   <div > <MDBCard style={{ maxWidth: '390px' }}>
      <MDBRow className='g-0'>
     
        <MDBCol md='4'>
          
          <MDBCardImage src='https://mdbcdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg' alt='...' fluid  className='Cimg'/>
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody className='cardbody' >
            <MDBCardTitle className='font-weight-bold color-black '>Art Blocks</MDBCardTitle>
            <MDBCardText>
              $23,54,22
            </MDBCardText>
            
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard></div> */}