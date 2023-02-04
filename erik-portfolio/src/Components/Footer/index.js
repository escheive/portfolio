// Dependencies
import { Typography, Box, Grid } from "@mui/material";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default function Footer() {

    return(

        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "black",
                paddingTop: "1rem",
                paddingBottom: "1rem",
                position: 'relative',
                zIndex: 2
            }}
            direction='row'
            alignItems='center'
            >

            <Grid maxWidth='lg' alignItems='center' sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', mx: 2}}>
                <Typography color="white" align='left'>{`Erik Scheive | ${new Date().getFullYear()} `}</Typography>
                <Box color="white" align='right' variant="subtitle1" sx={{ display: 'flex', justifyContent: 'right'}}>
                    <IconContext.Provider value={{ className: 'shared-class', size: 30}}>  
                        <a className='navLinks' href='https://github.com/escheive' target='_blank' rel='noreferrer' style={{ marginInline: 6, color: 'inherit' }}><BsGithub /></a>
                        <a className='navLinks' href='https://www.linkedin.com/in/erikscheive/' target='_blank' rel='noreferrer' style={{ marginInline: 6, color: 'inherit' }}><BsLinkedin /></a>
                    </IconContext.Provider>
                </Box>
            </Grid>
        </Box>
    )
}