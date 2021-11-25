import React,{useState} from 'react'

function option({opt,handlcheck,handlesect,selected}) {
   
    
    
    return (
        <>
                
             {opt.map((item,index)=><li><button 
             className={ `mybtn ${selected && handlesect(item)}`}
             style={{ fontSize:'1.5rem'}}
             onClick={()=>{handlcheck(item)}}
             key={index} 
            disabled={selected}
              >
                  {item}</button></li>)}
            
        </>
    )
}
export default React.memo(option)

