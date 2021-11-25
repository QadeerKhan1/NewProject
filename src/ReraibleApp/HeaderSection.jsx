import React from 'react'

export default function HeaderSection() {
    const Classname=['first','second','third','fourth','fifth','sixth'];
    return (
        <>
        <div className="row mt-2 ">
            <div className="col-lg-5  border-2 FirstCol ">
              <div className='FirstSubcol'>

              </div>

            </div>
            <div className="col-lg-7   SecondCol ml-3 ">
                <div className="row ">
                    {Classname.map((name)=>{
                        return( <div className={`col-md-3  Ssubcol ${name} m-2`}>
    
                        </div>)
                    })}
               
                   </div>
            

            </div>

        </div>
            
        </>
    )
}
