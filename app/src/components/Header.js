import { useState } from 'react';
import {AppBar,Tabs, Tab, Toolbar, Typography} from '@mui/material';
import BookIcon from '@mui/icons-material/Book';
import {NavLink} from 'react-router-dom';
//import Login from "./Login";

const setIsLoggedIn = require("./Login");


const Header = () => {

    const [value, setValue ] = useState();
    
    return (
    <div>
        <AppBar position="sticky">
            <Toolbar>
                <NavLink to={"/home"} style={{color:"white"}}>
                <Typography>
                <BookIcon/>
               </Typography> 
</NavLink>
<Typography padding={3}> Welcome To the world of Books </Typography>
<Tabs
sx={{ ml : "auto" }}
textColor = "inherit" indicatorColor="secondary" value={value} onChange={(e,val) => setValue(val)}>
    {/* <Tab
    LinkComponent={NavLink} to="/add"
    label='Add Book'></Tab>
    <Tab
    LinkComponent={NavLink} to="/books"
    label='Books'></Tab>
    <Tab 
    LinkComponent={NavLink} to="/about" label='About Us'></Tab> */}
    <Tab 
    LinkComponent={NavLink} to="/login" label='Login'></Tab>
    <Tab 
    LinkComponent={NavLink} to="/register" label='Register'></Tab>
    </Tabs>
    </Toolbar>
   </AppBar>
    </div>) ;
//     }
//         return (
//     <div>
//     <AppBar position="sticky">
//             <Toolbar>
//                 <NavLink to={"/home"} style={{color:"white"}}>
//                 <Typography>
//                 <BookIcon/>
//                </Typography> 
// </NavLink>
// <Typography padding={3}> Welcome To the world of Books </Typography>
// <Tabs
// sx={{ ml : "auto" }}
// textColor = "inherit" indicatorColor="secondary" value={value} onChange={(e,val) => setValue(val)}>
//     {/* <Tab
//     LinkComponent={NavLink} to="/add"
//     label='Add Book'></Tab>
//     <Tab
//     LinkComponent={NavLink} to="/books"
//     label='Books'></Tab> */}
//     <Tab 
//     LinkComponent={NavLink} to="/about" label='About Us'></Tab>
//     <Tab 
//     LinkComponent={NavLink} to="/register" label='Register'></Tab>
//     <Tab 
//     LinkComponent={NavLink} to="/login" label='Logout'></Tab>
    
//     </Tabs>
//     </Toolbar>
//    </AppBar>
//     </div>    
//     );
 };

export default Header; 