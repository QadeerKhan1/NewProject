import React,{useState} from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

export default function Inpute({item,dispatch}) {
  const [total , settotal]=useState(0);
  return (
    <div className='container list row'>
      <ul >
         {item.Nitem.map((it,index)=>{
           
             return(   
               
                  <div className='container fields'  style={{border:'black .2rem solid',width:'70rem'}}>
                  <li>{it.charge}</li>
              <li>{it.Amount}</li>
              <li  className='last one'><FaRegEdit className='chang edit' onClick={()=>dispatch({ type:'Edit',id:it.id})}/></li>
              <li className='last two'><MdDeleteSweep className='chang delete'onClick={()=> dispatch({type:'delete',id:it.id})}/></li>
                  </div>
              
                  
             )
         })}
         </ul>
      </div>
  );
}