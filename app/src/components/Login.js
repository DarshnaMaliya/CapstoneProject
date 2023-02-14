import React, { useState } from "react";
import {Box, TextField, FormLabel, Button } from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
const history = useNavigate();
const [loggedIn, setIsLoggedIn] = useState(false);
const [inputs, setInputs] = useState({
  //fullName : "",
  email: "",
  password: "",
  //role: ""
}
);
//const[isSubmitted, setIsSubmitted] = useState(false);
const handleChange= (e) => {
	setInputs((prevState) => ({
    ...prevState,
		[e.target.name] : e.target.value
	}));
};

const sendRequest = async () => {
     await axios.post("http://localhost:5000/register/login", {
      //fullName:String(inputs.fullName),
      email: String(inputs.email),
      password: String(inputs.password)     
      //role: String(inputs.role)
      
  }).then((res) => {
    if(res?.data?.success===1){
      setIsLoggedIn(true);
    }
  } );
  
  //const data = await res.data;

}
const handleSubmit= (e) => {
  e.preventDefault();
  
  //setIsSubmitted(true);
  console.log(inputs);
  

  sendRequest().then(()=>history('/home'));
  //isLoggedIn(true);
};
return (
  
  <div>
    {/* { !isLoggedIn ? ( */}
      <>
          <form onSubmit={handleSubmit}>
    <Box displsy="flex" flexDirection="column"
    justifyContent={"center"} 
    maxWidth={600}
    alignContent={"center"}
    alignSelf="center"
    marginLeft={"auto"}
    marginTop={8}
    marginRight={"auto"} 
    > <h3>Login</h3>
    <br/>
    {/* <FormLabel>Name</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined' name='fullName' value={inputs.fullName} onClick={handleChange} ></TextField> */}
    <FormLabel>Email</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined' name='email' value={inputs.email} onChange={handleChange}></TextField>
    <FormLabel>Password</FormLabel>
    <TextField  type={'password'} margin='normal' fullWidth variant='outlined' name='password' value={inputs.password} onChange={handleChange} ></TextField>
    <Button type='submit' variant='contained'>Login</Button>
    </Box>
    </form>
    </>
    {/* </>)  
    :
    (
    <Button type='submit' variant='contained'>Logout</Button>
    )} */}
    </div>
  
)
  }

export default Login;
 
