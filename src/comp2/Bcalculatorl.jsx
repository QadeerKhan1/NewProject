import React,{useState,useEffect,useReducer} from 'react';
// import './css/budget.css';
import {MDBBtn} from 'mdb-react-ui-kit';
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";
import { MDBInput } from 'mdb-react-ui-kit';
import Inpute from './inpute';

export default function Bcalculatorl() {
    
    const [Editid,setEditid]=useState();
    const [arr,setarr]=useState({
        charge:'',
        Amount:0

    });
    const initialState={
        total:0,
        Nitem:[]
    }
    const reducer=(state,action)=>{
        switch (action.type) {
            case 'add':               
                
                   if(arr&&Editid){
                    
                    const edit=state.Nitem.filter(c=>c.id!==Editid);
                    let obj1={id:Editid}
                    let neob={...arr,...obj1}
                    let newstate={...state,Nitem:[...edit,neob]};
                    let newTotal = 0;
            newstate.Nitem.forEach(item=>{
               newTotal+=item.Amount;
            });
            newstate.total =newTotal;
            return newstate ; 
                    
                    
                   }else{
                    let id={id:new Date().getTime().toString()};
                    let newob={...id,...arr};         
                    
                  let newstate= {...state,Nitem:[newob,...state.Nitem]}
                 let newTotal = 0;
              newstate.Nitem.forEach(item=>{
               newTotal+=item.Amount;
            });
            newstate.total =newTotal;
            return newstate ; 

                
                        
                    
                    setarr({charge:'',Amount:''})
                   }
                
                
            case 'delete':
                return{
                    Nitem:[...state.Nitem.filter(item=>item.id!==action.id)]
                }
            case 'Edit':
                
                const edit=state.Nitem.filter(ar=>ar.id==action.id);
                edit.map((ar)=>{
                    setarr({charge:ar.charge,Amount:ar.Amount})
                })
                setEditid(action.id);
                return{
                    ...state
                }
                
            
            default:
                break;
        }

    }
   
    const [item, dispatch] = useReducer(reducer, initialState);
    
    const onchange=(e)=>{
        const {name,value}=e.target;
        
        setarr((prev)=>{
            return{
                ...prev,
                [name]:value
            }
            
        })
        
        
    }
  
  
   
    
    return (
        <>
           <div className="row">
           <div className='col-lg-12 col-md-12  col-xs-12 Main mt-5'>
                <h1 style={{fontSize:'4vw'}}>Budget Calculator</h1>
                <div className='container inputfield '>
                <div className='input' style={{ width: '60rem' }}>
      <MDBInput  style={{height:'3rem',fontSize:'2rem'}}  label={<span style={{ fontSize: '1.7rem' }}>Charge</span>} id='formTextExample1' name='charge' value={arr.charge}   onChange={onchange} type='text' aria-describedby='textExample1'   />
      <div id='textExample1' className='form-text'>
      </div>
    </div>
    <div className='input' style={{ width: '33rem' }}>
      <MDBInput style={{height:'3rem',fontSize:'2rem' ,}}  label={<span style={{ fontSize: '1.7rem' }}>Amount</span>} id='formTextExample1' name='Amount' value={arr.Amount}  onChange={onchange} type='number' aria-describedby='textExample1' />
      <div id='textExample1' className='form-text'>
      </div>
    </div>
            
                </div>
                <div className='Sbutton'><MDBBtn onClick={()=>dispatch({type:'add'})} outline color='success' className='btn'  >
        Submite
      </MDBBtn></div>
     <Inpute item={item} dispatch={dispatch}  />
     
      <div className="total">
          <h3>Total Spending :</h3>
          <h3>${item.total}</h3>

      </div>
</div>
           </div>
        </>
    )
}
