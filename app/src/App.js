import { React } from "react";
import { Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import Error from "./components/Error";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  
  return (
   <>
   
    <header>
      <Header/>
    </header>
    <main>
      <>
      <Routes>                
       <Route path="/" element={<Login/>} exact />
       <Route path="/home" element={<Home/>} exact />
        <Route path="/add" element={<AddBook/>} exact />
        <Route path="/books" element={<Books/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/books/:id" element={<BookDetail />} exact /> 
        <Route path="/login" element={<Login />} exact /> 
        <Route path="/register" element={<Register/>} exact /> 
        <Route path="*" element = {<Error/>} />
       </Routes>
        </>
    </main>
   </>
  );
}

export default App;
