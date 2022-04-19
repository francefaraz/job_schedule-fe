import React,{useEffect,useState}  from 'react'
import Axios from 'axios'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import EditIcon from '@mui/icons-material/Edit';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';


export default function Displaydata() {
  const [dictonary,setDictonary]=useState();
    useEffect(() =>{
   getData()
    },[dictonary])

    const [id,setId]=useState("")
    const [data,setData]=useState("")
    const [email,setEmail]=useState("")
    const [open,setOpen]=useState(false)


    var BACKEND_URL =
    process.env.REACT_APP_BACKEND_URL ||
    "http://localhost:5000/api";
// console.log(BACKEND_URL)
const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = (a1) => {
    setId(a1);
    setOpen1(true);
    
  };

  const handleClose1 = () => {
    setOpen1(false);
    setId("")
  };


    const getData=async()=>{
        Axios.get(`${BACKEND_URL}/user`)
        .then((res)=>{
            // console.log("res",res)
            setDictonary(res.data)
        })
        .catch((err)=>{
            console.log("err",err)
        })
    }


    const handleClickOpen = (id,nm,eml) => {
        setData(nm)
        setEmail(eml)
        setId(id)
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

    const updateData = async()=>{
         console.log("entered in update method",id,data)
         const body={
             "name":data,
             "email":email
         }
       await Axios.put(`${BACKEND_URL}/user/${id}`,body)
        .then((response)=>{
            console.log(response,"response of update")
            alert("successfully updated")
        })
        .catch((err)=>{
            console.log(err,"error of update ")
        })
        setId("")
        setData("")
       await handleClose()
    }



    const deleteData = async()=>{
     

        setOpen1(false)
        // console.log(e)
        Axios.delete(`${BACKEND_URL}/user/${id}`,)
        .then((response)=>{
            // console.log(response,"res")
            // updateData()
           getData()
        })
        .catch((err)=>{
            console.log(err,"err")
        })
        setId("")
        alert("data delted successfully")
        
    }

  return (

    <div className="">
        <div style={{marginBottom:"20px"}}>
        <h1>DISPLAYING ALL USERS</h1>

        </div>
    <br/>
    <table className="cont1" border="1">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
              dictonary?.length>0 ? dictonary.map((d)=>{
                    return <tr key={d._id}>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td colSpan="2">
                        <Button variant="contained" style={{backgroundColor:"orange"}} onClick={()=>handleClickOpen(d._id,d.name,d.email)} startIcon={<EditIcon/>}>EDIT</Button> &nbsp;
                        <Button variant="contained" style={{backgroundColor:"red"}} startIcon={<DeleteIcon />} onClick={()=>handleClickOpen1(d._id)}>DELETE</Button>

                        </td>
                    </tr>
                })  : "THERE IS NO DATA PLEASE INSERT"
            }
            </tbody>
    </table>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>UPDATE YOUR DETAILS</DialogTitle> 
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Update Your Name"
            type="email"
            fullWidth
            value={data}
            onChange={e=>setData(e.target.value)}
            variant="standard"
          />
               <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Update Your Email"
            type="email"
            fullWidth
            value={email}
            onChange={e=>setEmail(e.target.value)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>updateData()}>Update</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={open1}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"ARE YOU SURE WANT TO DELETE"}
        </DialogTitle>
        
        <DialogActions>
          <Button onClick={handleClose1}>NO</Button>
          <Button onClick={deleteData} autoFocus>
            YES, DELETE
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
