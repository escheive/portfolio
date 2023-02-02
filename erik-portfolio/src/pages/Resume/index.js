
import { Typography, Container, Box } from "@mui/material";
import { Image } from 'mui-image';
import htmllogo from '../../assets/html.png';
import reactlogo from '../../assets/reactlogo.png';
import csslogo from '../../assets/css.png'
import postgreslogo from '../../assets/postgres.png'
import mongologo from '../../assets/mongo.png';

let images = {
    postgreslogo: '../../assets/postgres.png',
    csslogo: '../../assets/css.png'
}
export default function Home() {

    return (

        <Container align='center' sx={{ mb: 8 }}>

            <Box>

                <Box>
                    <Typography variant='h2'>Erik Scheive</Typography>
                    <Typography variant='h5'>Software Engineer</Typography>
                    <Typography variant='h6'>Seattle, WA 98105 | 530-460-8470 | scheiveerik@gmail.com | Github | LinkedIn</Typography>
                </Box>
                
                <Box className="projects">

                    <Typography variant='h3' sx={{ mt: 4, mb: 6, mx: 12, pb: 1, borderBottom: 1 }}>Projects</Typography>

                    <Box class='facenook' sx={{ mb: 6 }}>
                        <Typography variant='h4'>Facenook</Typography>
                        <Typography variant='h6' sx={{ mb: 1 }}>Developer</Typography>
                        <Box>
                            <Typography>Designed a fully functioning, scalable social media application that is user-focused</Typography>
                            <Typography>Implemented a responsive, data-focused front-end using Django and Tailwind</Typography>
                            <Typography>Integrated a reliable backend database using Postgres</Typography>
                        </Box>
                    </Box>

                    <Box className='hikers-hub' sx={{ my: 6 }}>
                        <Typography variant='h4'>Hikers Hub</Typography>
                        <Typography variant='h6' sx={{ mb: 1 }}>Github Manager | Database Manager | Front-end Programmer</Typography>
                        <Box>
                            <Typography>Designed a fully functioning, scalable social media application that is user-focused</Typography>
                            <Typography>Implemented a responsive, data-focused front-end using Django and Tailwind</Typography>
                            <Typography>Integrated a reliable backend database using Postgres</Typography>
                        </Box>
                    </Box>
                    
                    <Box className='languages-skills' sx={{ mb: 8 }}>
                        <Typography variant='h3' sx={{ mt: 4, mb: 4, pb: 1, mx: 12, borderBottom: 1 }}>Languages & Skills</Typography>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', mx: 14 }}>
                            <Box>
                                <Image src={htmllogo} height={100} width={100} alt='html' />
                                <Image src={reactlogo} height={100} width={100} />
                                <Image src={csslogo} height={100} width={100} />
                                <Typography>Python</Typography>
                                <Typography>JavaScript</Typography>
                                <Typography>SQL</Typography>
                                <Typography>MongoDB</Typography>
                            </Box>
                            <Box>
                                <Typography>React</Typography>
                                <Typography>Node.js</Typography>
                                <Typography>Django</Typography>
                                <Typography>Express</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                
                <Box>
                    <Typography variant='h3' sx={{ mt: 4, mb: 4, pb: 1, mx: 12, borderBottom: 1 }}>Experience</Typography>
                    <Box>
                        <Typography variant='h4'>General Assembly</Typography>
                        <Typography variant='h6' sx={{ mb: 1 }}>Software Engineering Fellow | Seattle, WA | Oct 22 - Jan 23</Typography>
                        <Box>
                            <Typography>Rec professional training and working on full-stack projects</Typography>
                            <Typography>Designed and implemented interactive, working websites and integrated them with databases</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ my: 6 }}>
                        <Typography variant='h4'>Tapco Credit Union</Typography>
                        <Typography variant='h6' sx={{ mb: 1 }}>Assistant Manager | Tacoma, WA | Mar 22 - Oct 22</Typography>
                        <Box>
                            <Typography>Create and execute plans to meet branch goals</Typography>
                            <Typography>Lead financial as well as professional development trainings for new and existing employees</Typography>
                            <Typography>Responsible for loan applications, new memberships, and branch performance</Typography>
                            <Typography>Audit logs, internal processes, cash, security protocols, and robbery training on a routine basis</Typography>
                            <Typography>Generate new memberships and visit local business to network and generate new leads</Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: 6 }}>
                        <Typography variant='h4'>Enterprise Holdings</Typography>
                        <Typography variant='h6' sx={{ mb: 1 }}>Assistant Manager | Kent, WA | Mar 21 - Mar 22</Typography>
                        <Box>
                            <Typography>Oversaw 300+ vehicles and coordinated reservations to maximize profit</Typography>
                            <Typography>Led a diverse team, created schedules, trained employees, delegated tasks, and created monthly goals to achieve</Typography>
                            <Typography>Underwrote and assessed potential risks to minimize theft, mitigate losses for derogatory payments, and prevent damage to vehicles</Typography>
                            <Typography>Maintained relationships with body shops, dealerships and networked with potential clients</Typography>
                            <Typography>Reviewed and analyzed income statements and developed growth plans for the branch</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography variant='h4'>Professional Basketball Player</Typography>
                        <Typography variant='h6' sx={{ mb: 1 }}>Ehingen, Germany | Aug 2019 - Dec 20</Typography>
                        <Box>
                            <Typography>Played in a professional basketball league in Germany 2019-2020</Typography>
                        </Box>
                    </Box>

                </Box>
                
                <Box>
                    <Typography variant='h3' sx={{ mt: 4, mb: 4, pb: 1, mx: 12, borderBottom: 1 }}>Education</Typography>
                    <Box>
                        <Typography>Chaminade University</Typography>
                        <Typography>Bachelor of Business Admin | Honolulu, HI | May 2019</Typography>
                    </Box>
                </Box>
            </Box>

        </Container>

    )

}