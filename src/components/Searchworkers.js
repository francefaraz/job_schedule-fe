import React,{useState,useEffect} from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Axios from 'axios'
export default function Searchworkers() {
  var BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL ||
    "http://localhost:5000/api";
  // const [date,setDate]=useState("")
  const weekday=["sun","mon","tue","wed","thu","fri","sat"]
  const [date1,setDate1]=useState("")
  const [startTime,setStartTime]=useState("")
  const [endTime,setEndTime]=useState("")
  const [data,setData]=useState("")
  const getResults=async()=>{
    console.log(startTime,"pressed",(new Date(date1).getDay()))
    let day=weekday[new Date(date1).getDay()]
    console.log(day)
    console.log(startTime,"sdf",typeof startTime)
    console.log(endTime)
    if(startTime!='' && endTime!='' && date1!=''){
    var body={
        "days":day,
        "start_time":startTime,
        "end_time":endTime
      
  }
  // setColor1("green")
  // setErr("SuccessFully Inserted")
  Axios.post(`${BACKEND_URL}/worker/search`,body)
  .then((response)=>{
      console.log(response,"res")
     setData(response.data)
  alert("SUCCESSFULLY INSERTED")

       setDate1("")
       setStartTime("")
       setEndTime("")
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
  return (
    <div>
    <h1> SEARCH A WORKER</h1>
  
        {/* <input type="text" value={data} onChange={e=>setData(e.target.value)}/> */}
        <TextField id="filled-basic" type="date" style={{marginBottom:"20px"}} label="Select a date"  InputLabelProps={{shrink: true,}} variant="filled" value={date1} onChange={e=>setDate1(e.target.value)} /><br/>

        
        <TextField id="filled-basic" type="time" style={{marginBottom:"20px"}} label="select start time" variant="filled" value={startTime} onChange={e=>setStartTime(e.target.value)} InputLabelProps={{shrink: true,}} /> <br/>
        <TextField id="filled-basic" type="time" style={{marginBottom:"20px"}} label="select end time" variant="filled" value={endTime} onChange={e=>setEndTime(e.target.value)} InputLabelProps={{shrink: true,}} />
      <br/>
      {/* <p style={{color: {color1}}}>{data ? "" : err}</p> */}
      {
              data?.length>0 ? data.map((d)=>{
                    return <tr key={d._id}>
                        <td>{d.name}</td>
                        <td>{d.days_avail}</td>
                        <td colSpan="2">
                        {/* <Button variant="contained" style={{backgroundColor:"orange"}} onClick={()=>handleClickOpen(d._id,d.name,d.email)} startIcon={<EditIcon/>}>EDIT</Button> &nbsp;
                        <Button variant="contained" style={{backgroundColor:"red"}} startIcon={<DeleteIcon />} onClick={()=>handleClickOpen1(d._id)}>DELETE</Button> */}

                        </td>
                    </tr>
                })  : "THERE IS NO DATA PLEASE INSERT"
            }
    
{/* <button type="button" onClick={add}>Add</button> */}
<Button variant="contained" onClick={(e)=>{getResults()}}> Seach</Button>
</div>

  )
}
