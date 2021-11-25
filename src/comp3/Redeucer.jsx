import React, { useEffect,useState } from 'react'
import Card from './card';
// import './redeucer.css';

export default function Redeucer() {
    const [api,setapi]=useState([]);
    const [inpute, setinpute]=useState('Home');

    const handlchange=(e)=>{
        
        setinpute(e.target.value)
        console.log(inpute);
    }
  

    useEffect(() => {

        const fetchapi=async()=>{
                                                                      
            let result= await fetch(`https://pixabay.com/api/?key=23489244-5c237f007e4104cf8521b7274&q=${inpute}&image_type=photo&pretty=true`);
            let apiss= await result.json();
             setapi(apiss.hits)
           
        }
        fetchapi();
    }, [inpute])
    
    return(
        
        
        <>
        

        <div className="input-group" style={{margin:'5rem'}}>
  <div className="form-outline" >
    <input onChange={handlchange} style={{width:'40rem',height:'4rem',backgroundColor:'white',fontSize:'2rem'}} type="search" id="form1" className="form-control" />
    <label className="form-label " for="form1" style={{fontSize:'2rem'}}>Search</label>
    
  </div>
  <button type="button" className="btn btn-primary" style={{height:'4rem'}}>
    <i className="fas fa-search"></i>
  </button>
</div>
       
        
       <Card api={api}/>

        </>
    )
}
