
import { Link } from "react-router-dom";
import { Box } from '@mui/material';

export default function NotFound() {

    return (

        <Box sx={{ mx: 8, py: 4, height: 'calc(100vh - 126px)' }}>
            <h1>Oops! You seem to be lost.</h1>
            <p>Try using the handy nav up there, or one of these helpful links:</p>
            <Link to='/'>Home</Link>
            <Link to='/resume' style={{ marginInline: 8 }}>Resume</Link>
            <Link to='/contact'>Contact</Link>
        </Box>

    );
};