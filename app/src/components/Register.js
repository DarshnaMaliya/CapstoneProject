import { useState } from 'react';
import { FormLabel, TextField, Box, Button } from '@mui/material';
import axios from "axios";
import { useNavigate} from 'react-router-dom';

//import "./register.css";

const Register = () => {

// States for registration
const history = useNavigate();
const [inputs, setInputs] = useState({
  fullName : "",
  email: "",
 // role: "",
  password: ""
});

//const [submitted, setSubmitted] = useState(false);
//let name, value;
// const handleChange = (e) => {
// 	console.log(e);
// 	// name = e.target.name;
// 	// value = e.target.value;
// 	// setInputs({...inputs, [name]:value});
// 	setInputs(e.target.value);
// 	//setSubmitted(true);
// }
const handleChange= (e) => {
	setInputs((prevState) => ({
		...prevState,
		[e.target.name]: e.target.value,

	}));
};

const sendRequest = async () => {
	await axios.post("http://localhost:5000/register/signup", {
		fullName:String(inputs.fullName),
		email:String(inputs.email),
	//	role:String(inputs.role),
		password:String(inputs.password),
		
	}).then(res => res.data);

}
// Handling the form submission

const handleSubmit = (e) => {
	e.preventDefault();
	console.log(inputs);
	//const {fullName, email, password} = inputs;
	sendRequest().then(()=>history('/login'));
};

    return (
    <form onSubmit={handleSubmit}>
    <Box displsy="flex" flexDirection="column"
    justifyContent={"center"} 
    maxWidth={600}
    alignContent={"center"}
    alignSelf="center"
    marginLeft={"auto"}
    marginTop={8}
    marginRight={"auto"} 
    > <h3>User Registration</h3>
    <br/>
    <FormLabel>Name</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined' name='fullName' value={inputs.fullName} onChange={handleChange}></TextField>
    <FormLabel>Email</FormLabel>
    <TextField margin='normal' fullWidth variant='outlined'  name='email' value={inputs.email} onChange={handleChange}></TextField>
	{/* <FormLabel>Role</FormLabel>
	<TextField margin='normal' fullWidth variant='outlined' autoComplete='off' name='role' value={inputs.role} onChange={handleChange}></TextField> */}
    <FormLabel>Password</FormLabel>
    <TextField type={'password'} margin='normal' fullWidth variant='outlined'  name='password' value={inputs.password} onChange={handleChange}></TextField>
	<Button type='submit' variant='contained'>Register</Button>
    </Box>
</form>
);
 }

 export default Register;
