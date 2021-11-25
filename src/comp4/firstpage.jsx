import React,{useState} from 'react';

import { MDBInput,MDBBtn } from 'mdb-react-ui-kit';


function firstpage({ChangePage,Categories,ChildCallback}) {
    const [Cat, setCat] = useState('');
    const [Diff,setDiff]=useState('');
    const [name, setname]=useState('');
    const [erorr,seterorr]=useState(false)
    const SubmiteData=()=>{
        ChildCallback(Cat,Diff,name);

    }
    
    const handlcatch=()=>{
        if(!Cat || !Diff || !name){
            seterorr(true);
        }
        else{
            seterorr(false)
            SubmiteData();ChangePage()
        }
    }
    
    return (
        <>
          
        <h1 className='Top_h1' >Best Quiz App Ever</h1>
                         <span className='line'></span>
                      <div className="container-fluid">
                      <div className='row top '>
                         <div className=' col-md-6 col-sm-12 image'>
                             <div className="form-img">
                             </div>
                         </div>
                         <div className=' col-md-6 col-sm-12 form'>
                             <h2 style={{fontSize:'4rem',fontWeight:'bold',color:'black'}}>Quiz Setting</h2>
                             {erorr && <h3 style={{color:'red'}}>Please Fill All Inputs</h3>}
                             <div className='input'>
                             <MDBInput className='Finpute' value={name} onChange={(e)=>setname(e.target.value)}  label='Enter Your Name' id='form1' type='text' style={{height:'4rem', color:'black' }} />
                             </div>
                         <div className="selecter one">
                         <select value={Cat} onChange={(e)=>setCat(e.target.value)} className="form-select" aria-label="Default select example" style={{height:'4rem', color:'black'}}>
                         <option  className=' bg-danger' value='' >Select Catagory</option>
                             {Categories.map((c,index)=>{
                                 return (<option className='font-weight-bold text-black' value={c.value} key={index} >{c.category}</option>)
                             })}
                        
                        </select>

                         </div>
                       <div className='selecter two'>
                       <select value={Diff} onChange={(e)=>setDiff(e.target.value)}  className="form-select" style={{height:'4rem',color:'black'}}>
                        <option  className='font-weight-bold text-black' value=''  >Chose Difficulty</option>
                        <option  className='font-weight-bold text-black' value='Hard'>Hard</option>
                        <option  className='font-weight-bold text-black' value='Medium'>Medium</option>
                        <option  className='font-weight-bold text-black' value='Easy'>Easy</option>
                    
                        </select>
                       </div>
                       <div >
                       <MDBBtn onClick={handlcatch}  className='btn-lg  mt-4 w-100 Mdbbtn' color='warning' style={{height:'4rem'}}>Start Quiz</MDBBtn>
                       
                       </div>


                         </div>
                          
                      </div>
                      </div>
                      <span className='line two'></span>
            
        </>
    )
}
export default React.memo(firstpage)

