import { FormLabel, TextField, Box, Button, FormControlLabel, Checkbox } from '@mui/material';
import axios from 'axios';
import react, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

const AddBook = () =>
{
    const history = useNavigate();
    const [ inputs, setInputs] = useState({
        name: '',
        author:'',
        description: '',
        price:'',
        image : ''

    });
    const [checked , setChecked] = useState(false);
    const handleChange= (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));
    };
    const sendRequest = async () => {
        await axios.post("http://localhost:5000/books", {
            name:String(inputs.name),
            author:String(inputs.author),
            description:String(inputs.description),
            price:Number(inputs.price),
            image:String(inputs.image),
            available:Boolean(checked)
        }).then(res => res.data);

    }
    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(inputs, checked);
        sendRequest().then(()=>history('/books'));
    };
    return <form onSubmit={handleSubmit}>
        <Box displsy="flex" flexDirection="column"
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
        <Button type='submit' variant='contained'>Add Book</Button>
        </Box>
    </form>
};

export default AddBook;