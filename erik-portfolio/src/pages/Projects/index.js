
// Dependencies
import { Link } from 'react-router-dom';
import { Box, Grid, Item, Typography } from '@mui/material';
import { Image } from 'mui-image';
// Assets
import Facenook from '../../assets/Facenook.png';
import HikersHub from '../../assets/HikersHub.png';
import Calculator from '../../assets/Calculator.png';
// Style
import './style.scss';

export default function Projects() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 8, mx: 4 }}>

            <Typography variant='h2'>Projects</Typography>
            <Typography align='center' variant='body1' sx={{ mb: 8 }}>Some projects may take a while to load the first time due to Heroku, the domain used to host them</Typography>

            <Grid container spacing={5} columns={2} align='center'>
                <Grid item sm={2} md={1}>
                    <Link to='https://facenook.herokuapp.com' target='_blank' className='hvr-float-shadow' style={{ color: 'black', textDecoration: 'none' }}>
                        <Image
                            src={Facenook}
                            alt="Facenook"
                        />
                        <Typography variant='body1'>Facenook</Typography>
                    </Link>
                </Grid>
                
                <Grid item sm={2} md={1}>
                    <Link to='https://hikers-hub.herokuapp.com' target='_blank' className='hvr-float-shadow' style={{ color: 'black', textDecoration: 'none' }}>
                        <Image
                            src={HikersHub}
                            alt="Hikers-Hub"
                        />
                        <Typography variant='body1'>Hikers Hub</Typography>
                    </Link>
                </Grid>

                <Grid item sm={2} md={1}>
                    <Link to='/portfolio/calculator' className='hvr-float-shadow' style={{ color: 'black', textDecoration: 'none' }}>
                        <Image
                            src={Calculator}
                            alt="Calculator App"
                        />
                        <Typography variant='body1'>Calculator</Typography>
                    </Link>
                </Grid>

            </Grid>

        </Box>
    )
}