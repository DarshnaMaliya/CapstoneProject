import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Checkbox, FormLabel, TextField, FormControlLabel } from '@mui/material';
//import { Box } from '@mui/system';


const BookDetail  = () => {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
    const [checked, setChecked] = useState(false);
    const history = useNavigate();
   // console.log(id);
    useEffect(()=> { 
        const fetchHandler = async() => {
            await axios.get(`http://localhost:5000/books/${id}`).then(res => (res.data)).then(data=>setInputs(data.book));
        }
        fetchHandler().then((data) => setInputs(data.book));
    },[id]);
    const sendRequest = async() => {
        await axios.put(`http://localhost:5000/books/${id}`,{
            name:String(inputs.name),
            author:String(inputs.author),
            description:String(inputs.description),
            price:Number(inputs.price),
            image:String(inputs.image),
            available:Boolean(checked),
        }).then(res => res.data)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=>history("/books"));
        }
        const handleChange = (e) => {
            setInputs((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
    
            }));
        };
    
        return (
    <div>
     <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column"
        justifyContent={"center"} 
        maxWidth={600}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginTop={8}
        marginRight={"auto"} > 
        <FormLabel>Name</FormLabel>
        <TextField margin='normal' fullWidth variant='outlined' name='name' value={inputs.name} onChange={handleChange}></TextField>
        <FormLabel>Author</FormLabel>
        <TextField margin='normal' fullWidth variant='outlined' name='author' value={inputs.author} onChange={handleChange}></TextField>
        <FormLabel>Description</FormLabel>
        <TextField margin='normal' fullWidth variant='outlined' name='description' value={inputs.description} onChange={handleChange}></TextField>
        <FormLabel>Price</FormLabel>
        <TextField type="number" margin='normal' fullWidth variant='outlined' name='price' value={inputs.price} onChange={handleChange}></TextField>
        <FormLabel>Image</FormLabel>
        <TextField margin='normal' fullWidth variant='outlined' name='image' value={inputs.image} onChange={handleChange}></TextField>
        <FormControlLabel control={<Checkbox checked={checked} onChange={()=> setChecked(!checked)} />} label="Available"/>
        <Button type='submit' variant='contained'>Update Book</Button>
        </Box>
    </form>
    </div>);
}

export default BookDetail;