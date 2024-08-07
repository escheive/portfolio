
// Dependencies
import { Link } from 'react-router-dom';
import { Box, Grid, Item, Typography } from '@mui/material';
import { Image } from 'mui-image';
// Assets
import musicTracker from '../../assets/musicTracker.png';
import pokeVault from '../../assets/pokeVault.png';
import Calculator from '../../assets/Calculator.png';
// Style
import './style.scss';

export default function Projects() {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 8, mx: 4 }}>

            <Typography variant='h2'>Projects</Typography>

            <Grid container spacing={5} align='center' sx={{ mt: 4 }}>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Link to='https://github.com/escheive/Music-Tracker' target='_blank' className='hvr-float-shadow' style={{ color: 'black', textDecoration: 'none' }}>
                        <Image
                            src={musicTracker}
                            alt="Music-Tracker"
                            style={{ width: '100%', height: 'auto', maxWidth: '300px', maxHeight: '400px' }}
                        />
                        <Typography variant='body1'>Music Tracker</Typography>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Link to='https://github.com/escheive/pokevault' target='_blank' className='hvr-float-shadow' style={{ color: 'black', textDecoration: 'none' }}>
                        <Image
                            src={pokeVault}
                            alt="PokeVault"
                            style={{ width: '100%', height: 'auto', maxWidth: '300px', maxHeight: '400px' }}
                        />
                        <Typography variant='body1'>PokeVault</Typography>
                    </Link>
                </Grid>

                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Link to='/calculator' className='hvr-float-shadow' style={{ color: 'black', textDecoration: 'none' }}>
                        <Image
                            src={Calculator}
                            alt="Calculator App"
                            style={{ width: '100%', height: 'auto', maxWidth: '300px', maxHeight: '400px' }}
                        />
                        <Typography variant='body1'>Calculator</Typography>
                    </Link>
                </Grid>

            </Grid>

        </Box>
    )
}