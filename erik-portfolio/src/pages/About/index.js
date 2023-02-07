
// Dependencies
import { Typography, Box, } from '@mui/material';
import { Image } from 'mui-image';
import { Link } from 'react-router-dom';
// Assets
import profilePhoto from '../../assets/profilePhoto.jpg';

export default function About() {

    return (
        <Box align='center' sx={{ my: 8 }}>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
                <Box sx={{ mb: 5 }}>
                    <Image
                        sx={{ maxWidth: '520px', px: 1, mr: 2 }}
                        src={profilePhoto}
                        alt="profile photo"
                    />
                </Box>
                <Box sx={{ maxWidth: '30vw', minWidth: '300px', ml: 2, my: 'auto' }}>
                    <Typography sx={{ mb: 2, fontSize: 'calc(18px + 2vw)' }} >
                        A Little About Me
                    </Typography>
                    <Typography sx={{ lineHeight: '32px'}} variant="body1" color="text.secondary">
                        Hi there! I was born and raised in Northern California. Currently, I live in the Seattle area where I am pursuing a career in software engineering. I have a passion for problem-solving and my expertise is rooted in full-stack development. I have experience in JavaScript and Python and am familiar with a handful of front-end and back-end frameworks. You can see the full list on my <Link to='/portfolio/Resume'>resume</Link> page. Prior, I played a season of professional basketball for team Ehingen Urspring in Germany. I attended college at Chaminade University of Honolulu, where I received my Bachelor's in Business Administration. I love being active, photography, design, food, and travelling!
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap-reverse', justifyContent: 'center', mt: 4}} >
                <Box sx={{ maxWidth: '30vw', minWidth: '300px', mr: 2, my: 'auto' }}>
                    <Typography sx={{ mb: 2, fontSize: 'calc(18px + 2vw)' }} >
                        A Little About Me
                    </Typography>
                    <Typography sx={{ lineHeight: '32px'}} variant="body1" color="text.secondary">
                        Hi there! I was born and raised in Northern California. Currently, I live in the Seattle area where I am pursuing a career in software engineering. I have a passion for problem-solving and my expertise is rooted in full-stack development. I have experience in JavaScript and Python and am familiar with a handful of front-end and back-end frameworks. You can see the full list on my <Link to='/portfolio/resume'>resume</Link> page. Prior, I played a season of professional basketball for team Ehingen Urspring in Germany. I attended college at Chaminade University of Honolulu, where I received my Bachelor's in Business Administration. I love being active, photography, design, food, and travelling!
                    </Typography>
                </Box>
                <Box sx={{ mb: 5 }}>
                    <Image
                        sx={{ maxWidth: '520px', px: 1, ml: 2 }}
                        src={profilePhoto}
                        alt="profile photo"
                    />
                </Box>
            </Box>

        </Box>
    )
}