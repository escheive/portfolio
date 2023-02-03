
import { Typography, Container, Box } from "@mui/material";
// Style
import './style.css';

export default function Home() {

    return (

        <Box className='main-background' align="center" sx={{ height: '80vh'}}>

            <Typography className='main-title' variant="h1"><a href='/about'>Erik Scheive</a></Typography>

        </Box>

    )

}