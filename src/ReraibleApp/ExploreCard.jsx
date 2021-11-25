import React from 'react';
import {MDBBtn, MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';



export default function ExploreCard({Ricon,Title}) {
  
    return (
        <>
            <MDBDropdown >
      <MDBDropdownToggle className='Toggle '><MDBBtn outline rounded className='ExpButton' >
       <span style={{fontSize:"1.4rem"}}>{Ricon}</span> {Title} 
      </MDBBtn>
      </MDBDropdownToggle>
      <MDBDropdownMenu className='dropdownMenu'>
        <MDBDropdownItem >
          <MDBDropdownLink  href="#" style={{fontWeight:'bold'}}>All</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#" style={{fontWeight:'bold'}}>Share</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#"style={{fontWeight:'bold'}}>Report</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
                    
            
        </>
    )
}
