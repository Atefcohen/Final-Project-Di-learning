import { useState, useEffect,useContext } from "react";
import { Link ,useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';





const LoginRegisterForm = ({title}) =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [msg, setMsg] = useState('')
    const navigate = useNavigate('');


    useEffect(()=>{
        setMsg('')
    
    
    
    },[]);




    const handleAction = async (id) =>{
        if (id == 'Register'){
            try{
                    let response = await axios.post('/register',{
                        email,password
                    },{
                        withCredentials:true,
                        headers: {
                            'Access-control-allow-origin': '*',
                            'Content-Type': 'application/json'
                        }
                    });
                    console.log(response.data)
                    setMsg(response.data.msg)
            }catch(e){
                console.log(e.response.data.msg)
                setMsg(e.response.data.msg)
            }
        
        
        }else if (id == 'Login'){
            try{
                     let response = await axios.post('/login',{
                    email,password
                },{
                    withCredentials:true,
                    headers: {
                        'Access-control-allow-origin': '*',
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data)
                navigate('/'); //navigate to home page!
                
            }catch(e){
            console.log(e.response.data.msg)
            setMsg(e.response.data.msg)
        }
        }
        
    }
    return(
        <>
        <div> 
            <div>
        <h3>{title} Form</h3>
            </div>
        <Box component="form" sx={{m:1}} noValidate autoComplete="off">
            <TextField sx={{m:1}}  id="email" label="Enter Email" variant="outlined" 
            onChange={(e)=>setEmail(e.target.value)}/>
            <TextField sx={{m:1}}  id="password" label="Enter password" variant="outlined" 
            onChange={(e)=>setPassword(e.target.value)}/>  
        </Box>
        <Button variant="contained" onClick={()=>handleAction(title)}>{title}</Button>
        </div>
        <div>
           <p>{msg}</p> 
        </div>
        <div>
            {title=='Register'?
            <Link to='/login'>login</Link>
            :<Link to='/Register'>Register</Link>}
        </div>
       
        </>
    )
    }
    
    export default LoginRegisterForm