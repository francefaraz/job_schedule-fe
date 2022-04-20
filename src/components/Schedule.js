import React, { useState, useEffect } from 'react';
import '../../src/App.css';
import Axios from 'axios';
import { Days } from "./Days";
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'



function Schedule() {
    const [name, setName] = useState("");
    const [day, setDay] = useState([]);
    const [start, setStart] = useState([]);
    const [end, setEnd] = useState([]);
    const [setData] = useState("");
    const navigate=useNavigate()

    var BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL ||
    "http://localhost:5000/api";
    const handleName = (e) => {
        setName(e.target.value);
        
      };

    const handleDay = (e) => {
        let pos=day.indexOf(e.target.value);
        console.log(pos)
        if(pos===-1) {
            
            setDay(
                arr=>[...arr,e.target.value]
                );
        }
        else{
            
            let temp=day.pop(pos)
            console.log(temp)
            setDay(day)
        }
        
        
      };  

    const handleStart = (e) => {
        setStart(arr=>[...arr,e.target.value]);
        console.log("Start",start)
      }; 
      
    const handleEnd = (e) => {
        setEnd(arr=>[...arr,e.target.value]);
        console.log("End",end)
      };  
     
      const getForm=async(e)=>{

        e.preventDefault()
        console.log("hello")
        if(start.length!==0 && name!='' && end.length!==0  && day.length!==0 ){
            console.log("entered in if block")
        var body={
        "name":name, 
        "days_avail":day,
        "start_times":start,
        "end_times":end
        }
        Axios.post(`${BACKEND_URL}/worker/add`,body)
        .then((response)=>{
        console.log(response,"res")
        alert("SUCCESSFULLY INSERTED")
        })
        .catch((err)=>{
        console.log(err,"err")
        alert("NOT SUCCESSFULLY INSERTED")

        })
        }
        else{
        alert("FORM MUST NEED TO FILL!!")
        }
        }
      
        


    return (
      <div className="App">
        <form >
     <label>Name</label>
     <input value={name} onInput={handleName}/>
     <h1>Select Days</h1>
     {Days.map(({Day}, index) => {
         return (
          <><div className='row'> 
          <div className= "col" ><input
                 type="checkbox"
                 id={index}
                 value={Day}
                 onChange={handleDay} />
                 <label htmlFor={`-${index}`}>{Day}</label> </div>
                     <div  className= "col" >Start Time <input type="time" value={start.index} onChange={handleStart} /></div>
                     <div className= "col" >End Time <input type="time" value={end.index} onInput={handleEnd}/></div>
                    </div>  </>
         )})
     }
        <input type="submit" className="submitButton"  onClick={getForm}  />
        <Button variant="contained" style={{backgroundColor:"green",width:"100%"}}  onClick={()=>navigate('/')} > GO BACK</Button>

       </form>

      </div>
    );
  }
  
  export default Schedule;