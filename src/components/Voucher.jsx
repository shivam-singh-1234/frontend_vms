import React,{useEffect,useState} from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,makeStyles, Theme } from '@material-ui/core';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeIcon from '@mui/icons-material/Mode';
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch} from "react-redux";
import { getVoucher,postVoucher } from "../redux/actions";
import axios from "axios";
 
const useStyles = makeStyles((Theme) => ({
    table: {
      maxHeight: 'calc(100vh - 260px)',
      overflow: 'auto',
    },
    container: {
      maxHeight: 'calc(100vh - 260px)',
    },
    head: {
        backgroundColor: "#fff",
        position: "sticky",
        top: 0
      }
  }));

const Voucher=()=>{
    const classes = useStyles();
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.crudOperation.voucherList.data);
    const[state,setState]=useState({
        voucherName: "",
        code: "",
        discount:"",
      });
    const[logo,setLogo]=useState(null);
    const [icon,setIcon]=useState(null);
    const[isEdit,setEdit]=useState(false);
    const[editId,setEditId]=useState();
    useEffect(()=>{
        dispatch(getVoucher());  
      },[dispatch])

      const inputChange=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setState({...state,[name]:value});
      }
      const inputLogo=(e)=>{
        setLogo(e.target.files[0])
      }
      const inputIcon=(e)=>{
        setIcon(e.target.files[0])
      }
      const onEdit=(elem,id)=>{
        setEdit(true);
        setEditId(id);
        setState({
            voucherName: elem.voucherName,
            code: elem.code,
            discount:elem.discount
          });
          console.log(elem.logo)
          if(elem.logo){ setLogo(elem.logo) 
            console.log(elem.logo)}
          if(elem.icon){setIcon(elem.icon)
            console.log(elem.icon)}
      }
      const onDelete=(elem)=>{
        console.log("elem",elem)
      }
      const onSubmit =async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("icon", icon);
        formData.append("logo", logo);
        formData.append("voucherName",state.voucherName)
        formData.append("code",state.code)
        formData.append("discount",state.discount)
        // let res=await axios.post("voucher/create-voucher",formData);
        // dispatch(getVoucher());  
        dispatch(postVoucher(formData))
      };
      const onEditSubmit=async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("icon", icon);
        formData.append("logo", logo);
        formData.append("voucherName",state.voucherName)
        formData.append("code",state.code)
        formData.append("discount",state.discount)
        console.log(formData)
        let res=await axios.patch(`voucher/update-voucher/${editId}`,formData);
        dispatch(getVoucher());  
      }
return(
<div className="main">
<form method="POST">
    <h2>Create  Vocher</h2>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={4}>
  <div className="form-group">
        <label htmlFor="name" >Voucher Name:</label>
        <input type="text" className="form-control" id="name" name="voucherName" value={state.voucherName} placeholder="Enter Voucher Name" onChange={inputChange}/>
     </div>
  </Grid>
  <Grid item xs={4}>
  <div className="form-group">
        <label >Voucher Code:</label>
        <input type="text" className="form-control" id="code" name="code" value={state.code} placeholder="Enter Voucher Code" onChange={inputChange}/>
     </div>
  </Grid>
  <Grid item xs={4}>
  <div className="form-group">
        <label >Discount:</label>
        <input type="text" className="form-control" id="discount" name="discount" value={state.discount} placeholder="Enter Discount" onChange={inputChange}/>
    </div>
  </Grid>
  <Grid item xs={4}>
  <div className="form-group">
        <label >ICON:</label>
        <input type="file" className="form-control" id="icon" name="icon"  placeholder="Enter Icon" onChange={inputIcon}/>
    </div>
  </Grid>
  <Grid item xs={4}>
  <div className="form-group">
        <label >Logo:</label>
        <input type="file" className="form-control" id="logo" name="logo"  placeholder="Enter logo" onChange={inputLogo}/>
    </div>
  </Grid>
</Grid>
{!isEdit?
<button onClick={onSubmit}>Submit</button>:<button onClick={onEditSubmit}>Edit</button>}
 </form>

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer className={classes.container} component={Paper}>
      <Table className={classes.table} aria-label="scrollable table">
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>VOUCHER NAME</TableCell>
            <TableCell>DISCOUNT</TableCell>
            <TableCell>ICON</TableCell>
            <TableCell>LOGO</TableCell>
            <TableCell>EDIT</TableCell>
            <TableCell>DELETE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((elem,index)=>{
        return(
            <TableRow key={index}>
                <TableCell>{elem.id}</TableCell>
                <TableCell>{elem.voucherName}</TableCell>
                <TableCell>{elem.discount}</TableCell>
                <TableCell>
                    <img src={elem.icon} alt="icon" width="80" height="80"/>
                </TableCell>
                <TableCell>
                    <img src={elem.logo} alt="logo" width="70" height="80"/>
                </TableCell>
                <TableCell><Button onClick={()=>onEdit(elem,elem.id)} variant="outlined" color="secondary" startIcon={<ModeIcon />}>EDIT</Button></TableCell>
                <TableCell><Button onClick={()=>onDelete(elem,elem.id)} variant="outlined" color="error" startIcon={<DeleteIcon />}>Delete</Button></TableCell>
            </TableRow>
        )})}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </div>
    )
}
export default Voucher;