import  Axios  from 'axios'
import React,{useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useNavigate} from 'react-router-dom'
import Displaydata from './Displaydata'
var BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL ||
    "http://localhost:5000/api";
// console.log(BACKEND_URL)

const Addtext = () => {
    const [data,setData]=useState("")
    const [email,setEmail]=useState("")
    // const[color1,setColor1] =useState("red")
    // const [err,setErr]=useState("")
    const navigate=useNavigate()
    const add=(e)=>{
        e.preventDefault();
        if(data!=""){
        var body={
            name:data,
            email:email
        }
        // setColor1("green")
        // setErr("SuccessFully Inserted")
        Axios.post(`${BACKEND_URL}/user/add`,body)
        .then((response)=>{
            console.log(response,"res")
        alert("SUCCESSFULLY INSERTED")

             setData("")
             setEmail("")
        })
        .catch((err)=>{
            console.log(err,"err")
        })

    }
    else{
        alert("TEXTFIELD CANNOT BE EMPTY")
        // setErr("text field cannot be empty")
    }
}
    useEffect(()=>{

    },[data])
  return (
    <div>
<Button variant="contained" onClick={()=>navigate('/search')} style={{float: "right"}}> SEARCH A WORKER</Button>

        <div>
            <h1> ADD A USER</h1>
          
                {/* <input type="text" value={data} onChange={e=>setData(e.target.value)}/> */}
                <TextField id="filled-basic" style={{marginBottom:"20px"}} label="ENTER A NAME" variant="filled" value={data} onChange={e=>setData(e.target.value)} /><br/>
                <TextField id="filled-basic" style={{marginBottom:"20px"}} label="ENTER A EMAIL" variant="filled" value={email} onChange={e=>setEmail(e.target.value)} />
              <br/>
              {/* <p style={{color: {color1}}}>{data ? "" : err}</p> */}
          
            
{/* <button type="button" onClick={add}>Add</button> */}
<Button variant="contained" onClick={add}> Add Text</Button>

          
        </div>
        <Displaydata/>
    </div>
  )
}

export default Addtext