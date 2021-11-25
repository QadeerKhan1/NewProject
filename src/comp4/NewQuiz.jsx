import React, { Component } from 'react';
import './Nquiz.css';
import quiz1 from './quiz1.jpg';
import { MDBBtn } from 'mdb-react-ui-kit';
import Firstpage from './firstpage';
import Secondpage from './Secondpage';
import {Categories} from '../data/catagory';
export default class NewQuiz extends Component {
    state={
        PageN0:1,
        score:0,
        Catogrie:0,
        Difficulty:'',
        name:'',
        api:''
    }
   
    parentCallBack=(cat,diff,name)=>{
        console.log(cat,'=',diff,'=',name)
     
        this.setState({ Catogrie:cat,Difficulty:diff,name:name})
     }
     
     Handlepage=(arg,score)=>{
        
         if(arg=='Next')
         {this.setState({PageN0:3})
         this.setState({score:score})
          
        }
         else
        { this.setState({PageN0:1})}
     }
    
     
     ChangePage=()=>{
     
        const url=`https://opentdb.com/api.php?amount=5${this.state.Catogrie && `&category=${this.state.Catogrie}`}&${this.state.Difficulty && `&difficulty=${this.state.Difficulty}`}&type=multiple`;
        const Getapi= async()=>{
            const data= await fetch(url);
            const api= await data.json();
            const result= await api.results;
            this.setState({api:result})
            console.log(result)
           
        }
    
        Getapi();
         
         this.setState({PageN0:this.state.PageN0+1})
      
        

    }
    
    GetApi=()=>{
       
    }
   
    
    render() {
       
        
        switch (this.state.PageN0) {
            case 1:
                return(
                    <>
                    <Firstpage 
                    ChangePage={this.ChangePage}
                     Categories={Categories}
                     ChildCallback={this.parentCallBack}
                     
                     />
                    </>
                )
                case 2:
                    return(
                        <>
                       
                        <Secondpage name={this.state.name} arr={this.state.api} Handlepage={this.Handlepage}/>
                        </>
                    )
                case 3:
                return(
                    <>
                     
                    <div className='container-fluid LastPage'>
                    <h1>Thank You {this.state.name} </h1>
                    <h3> Your Total Score Is : {this.state.score} </h3>
                      <h5>Lets Try Again</h5>
                      <MDBBtn onClick={()=>this.setState({PageN0:1})} className='btn-lg  A_Mdbbt two' color='warning' > Play Again</MDBBtn>

                    </div>
                    </>
                )            
        
            default:
                break;
        }
    }
}

