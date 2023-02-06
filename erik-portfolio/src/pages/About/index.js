
// Dependencies
import { Typography, Box, } from '@mui/material';
import { Image } from 'mui-image';
import { Link } from 'react-router-dom';
// Assets
import profilePhoto from '../../assets/profilePhoto.jpg';

export default function About() {

    return (
        <Box align='center' sx={{ my: 4 }}>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
                <Box>
                    <Image
                        sx={{ maxWidth: '500px', px: 1 }}
                        src={profilePhoto}
                        alt="profile photo"
                    />
                </Box>
                <Box sx={{ maxWidth: '30vw', minWidth: '300px', mt: 1}}>
                    <Typography variant='h4' sx={{ mb: 3 }} >
                        A little about me
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Hi there! I was born and raised in Northern California. Currently, I live in the Seattle area where I am pursuing a career in software engineering. I have a passion for problem-solving and my expertise is rooted in full-stack development. I have experience in JavaScript and Python and am familiar with a handful of front-end and back-end frameworks. You can see the full list on my <Link to='/resume'>resume</Link> page. Prior, I played a season of professional basketball for team Ehingen Urspring in Germany. I attended college at Chaminade University of Honolulu, where I received my Bachelor's in Business Administration. I love being active, photography, design, food, and travelling!
                    </Typography>
                </Box>
            </Box>

        </Box>
    )
}