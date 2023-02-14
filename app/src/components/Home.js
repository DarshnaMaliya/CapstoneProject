//import react from "react";

import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return(
            <Box display="flex" flexDirection="column" alignItems="center">
            <img className="homeImg" src="https://tse3.mm.bing.net/th?id=OIP.RPVuNPDsJ7OHTeuY2CDsbQHaB3&pid=Api&P=0" alt="home"></img>
                <Button LinkComponent= {Link} to="/books" sx={{marginTop:6}} variant="contained">
                <Typography>Books</Typography>
                </Button>
                <Button LinkComponent= {Link} to="/add" sx={{marginTop:6}} variant="contained">
                <Typography>Add Books</Typography>
                </Button>
                {/* <Button LinkComponent= {Link} to="/login" sx={{marginTop:6}} variant="contained">
                <Typography>Login</Typography>
                </Button> 
                <Button LinkComponent= {Link} to="/register" sx={{marginTop:6}} variant="contained">
                <Typography>Register</Typography>
                </Button>  */}
            </Box>
    );
};

export default Home;