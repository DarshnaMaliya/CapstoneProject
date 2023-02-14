import React, { useEffect, useState } from "react";
import axios from 'axios';
import Book from "./Book";

//const URL = "https://localhost:5000/books";
//const axios = require('axios');
const fetchHandler = async() => {
return await axios.get("http://localhost:5000/books").then((res)=> res.data)
}
const Books = () => {
    
    const [books, setBooks ] = useState();
    useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books))
    },[]);
    console.log(books);
    return (
    <div>
<ul>
    {books && books.map((book,i) => (
        <li key={i}>
            <Book book={book}/>
        </li>
))}
</ul>
        </div>
   );
};

export default Books;