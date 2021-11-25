import React from 'react';
import {
    MDBInputGroup,
    MDBInputGroupText,
    MDBInputGroupElement,
    MDBIcon
  } from 'mdb-react-ui-kit';

export default function search() {
    return (
        <>
             <MDBInputGroup className='mb-3'>
        <MDBInputGroupText noBorder>
          <MDBIcon fas icon='search' />
        </MDBInputGroupText>
        <MDBInputGroupElement type='text' placeholder='Search' />
      </MDBInputGroup>
        </>
    )
}
