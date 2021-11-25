import React,{useState,useEffect, useCallback} from 'react';
import { MDBInput,MDBBtn ,MDBSpinner} from 'mdb-react-ui-kit';
import Option from './option';

 function Secondpage({name,arr,Handlepage}) {
    const [Qnumber,setQnumber]=useState(0);
    const [option, setoption]=useState();
    const [selected,setselected]=useState()
    const [score,setscore]=useState(0);
console.log(arr)
    const handlcheck=(item)=>{
         
            setselected(item);
        
        if(item==arr[Qnumber].correct_answer){
             setscore(score+1)
             
        }

          
    
    }
    const handlesect=(item)=>{
        
           console.log(selected,' =',item)
        if (selected==item && selected==arr[Qnumber].correct_answer){
            return 'select';

        }
        else if (selected==item && selected!==arr[Qnumber].correct_answer){
            return 'wrong';
        }
        else if (item==arr[Qnumber].correct_answer){
            return 'select'
        }
       

    }

     
    useEffect(() => {
        
        setoption(arr &&
            handlshuffle([...arr[Qnumber].incorrect_answers,arr[Qnumber].correct_answer]))
    }, [arr,Qnumber])


    const handlshuffle=(optionss)=>{
     return optionss.sort(()=>Math.random()-.5)

    }
    const HandleNext=()=>{
       
        if(selected){
            setQnumber(Qnumber+1);
            setselected('');
        }
        else if(!selected){
            alert('Please Select Any Of One Answer')

        }
    }
    
    return (
        <>
        {!arr?<div className='setcenter'><MDBSpinner className='mx-2 loader ' color='warning'>
        <span className='visually-hidden '>Loading...</span>
      </MDBSpinner></div>:<> <h1 className='Top_h1' >Best Quiz App Ever</h1>
                         <span className='line'></span>
                         <div className=" container-fluid quiz_main">
                             <h1 className='AQ_Logo'>{name}</h1>
                             <div className="row">
                                 <h1 style={{color:'black',fontWeight:'bold'}}>Question NO :{Qnumber+1} </h1> 
                                 <div className=' container col-md-12 Content col-sm-12'>
                                    <h4 className='text-black font-weight-bold'>{arr[Qnumber].question}</h4>
                                     <div className='Answers col-sm-12'>
                                         <ul>
                                             {!option?'':<Option opt={option} 
                                              handlcheck={handlcheck}
                                             handlesect={handlesect}
                                              selected={selected}
                                              />}
                                             
                                        
                                             
                                         </ul>
                                         <div className='Answer_btn'>
                                         <MDBBtn onClick={()=>Handlepage('Quite',score)}  className='  A_Mdbbt' color='warning' >Quite</MDBBtn>
                                         <MDBBtn onClick={Qnumber>3?()=>Handlepage('Next',score):HandleNext} className=' A_Mdbbt two' color='warning' >Next Question</MDBBtn>

                                         </div>
                                       
                                     </div>
                                 </div>
                             </div>

                         </div>
            </>}
        
        </>
    )
}
export default React.memo(Secondpage)
