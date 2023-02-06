
// Dependencies
import { Box } from '@mui/material';
// Style
import "./style.scss";

export default function Screen({ value }) {

    return (

        <Box className="calcScreen" mode="single" max={70}>
        {value}
        </Box>
        
    );
};