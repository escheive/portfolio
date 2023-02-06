
// Dependencies
import { Link } from 'react-router-dom';
import { Box, Grid, Item, Typography } from '@mui/material';
import { Image } from 'mui-image';
// Assets
import Facenook from '../../assets/Facenook.png';
import HikersHub from '../../assets/HikersHub.png';
// Style
import './style.scss';

export default function Projects() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 8, mx: 4 }}>

            <Typography variant='h2' sx={{ mb: 8 }}>Projects</Typography>
            <Grid container spacing={5} columns={2} align='center'>
                <Grid item sm={2} md={1}>
                    <Link to='https://facenook.herokuapp.com' target='_blank' className='hvr-float-shadow'>
                        <Image
                            sx={{  }}
                            src={Facenook}
                            alt="Facenook"
                        />
                    </Link>
                </Grid>
                
                <Grid item sm={2} md={1}>
                    <Link to='https://hikers-hub.herokuapp.com' target='_blank' className='hvr-float-shadow' style={{ height: '100%' }}>
                        <Image
                            src={HikersHub}
                            alt="Hikers-Hub"
                        />
                    </Link>
                </Grid>

            </Grid>

        </Box>
    )
}