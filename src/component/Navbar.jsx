import React from 'react'


import {
  MDBContainer,
  MDBNavbar,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Navbar() {
  return (
    <MDBNavbar dark bgColor='dark'>
      <MDBContainer fluid>
        <form className='d-flex input-group w-auto'>
          <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
          <button className='btn btn-outline-white' type='button'>
            Search
          </button>
        </form>
      </MDBContainer>
    </MDBNavbar>
  );
}
