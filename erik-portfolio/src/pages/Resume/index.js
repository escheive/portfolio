
// Dependencies
import { Typography, Container, Box, Grid } from "@mui/material";
import { Image } from 'mui-image';
// Style
import './style.css'
// Assets
import htmllogo from '../../assets/languages/html.png';
import reactlogo from '../../assets/languages/react.png';
import csslogo from '../../assets/languages/css.png'
import postgreslogo from '../../assets/languages/postgres.png'
import mongologo from '../../assets/languages/mongo.png';
import pythonlogo from '../../assets/languages/python.png';
import javascriptlogo from '../../assets/languages/javascript.png';
import expresslogo from '../../assets/languages/express.png';
import nodejslogo from '../../assets/languages/nodejs.png';
import djangologo from '../../assets/languages/django.png';
import tailwindlogo from '../../assets/languages/tailwind.png';
import bootstraplogo from '../../assets/languages/bootstrap.png';
import muilogo from '../../assets/languages/mui.png';
import typescriptlogo from '../../assets/languages/typescript.png';
import sasslogo from '../../assets/languages/sass.png';


export default function Home() {

    return (


        <Box align='center' marginY={'5vh'}>

            <Box>
                <Typography variant='h2'>Erik Scheive</Typography>
                <Typography variant='h5'>Software Engineer</Typography>
                <Typography variant='h6'>Seattle, WA 98105 | 530-460-8470 | scheiveerik@gmail.com | Github | LinkedIn</Typography>
            </Box>
            
            <Box className="projects">

                <Typography variant='h3' sx={{ mt: 4, mb: 6, mx: 12, pb: 1, borderBottom: 1 }}>Projects</Typography>

                <Box class='facenook' sx={{ mb: 6 }}>
                    <Typography variant='h4'>Facenook</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Sole Developer</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Developed a fully functioning, scalable social media application that is user-focused</Typography>
                        <Typography sx={{ mb: 1 }}>Implemented a responsive, data-focused front-end using Django</Typography>
                        <Typography sx={{ mb: 1 }}>Coded class-based models and function-based views using python</Typography>
                        <Typography sx={{ mb: 1 }}>Designed the user-interface using Tailwind and Flowbite</Typography>
                        <Typography sx={{ mb: 1 }}>Integrated a reliable backend database using Postgres</Typography>
                        <Typography>Hosted the site on Heroku and the database on bit.io</Typography>
                    </Box>
                </Box>

                <Box className='hikers-hub' sx={{ my: 6 }}>
                    <Typography variant='h4'>Hikers Hub</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Github Manager | Database Manager | Front-end Programmer</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Developed and deployed a functional, hiking app with a team of software engineers</Typography>
                        <Typography sx={{ mb: 1 }}>Designed a responsive front-end using React and JavaScript</Typography>
                        <Typography sx={{ mb: 1 }}>Styled the user-interface using Css and Bootstrap</Typography>
                        <Typography sx={{ mb: 1 }}>Connected a back-end database using MongoDB</Typography>
                        <Typography>Hosted the site on Railway and the database on Mongoose</Typography>
                    </Box>
                </Box>
                
                <Box className='languages-skills' sx={{ mb: 8 }}>
                    <Typography variant='h3' sx={{ mt: 4, mb: 4, pb: 1, mx: 12, borderBottom: 1 }}>Languages & Skills</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, mx: 1 }}>
                        <Box align='right'>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={htmllogo} alt='html' />
                                <Typography variant='h6' align='center'>Html</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={reactlogo} />
                                <Typography variant='h6' align='center'>React</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={csslogo} />
                                <Typography variant='h6' align='center'>Css</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={pythonlogo} />
                                <Typography variant='h6' align='center'>Python</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>    
                                <Image src={muilogo} alt='html' />
                                <Typography variant='h6' align='center'>MaterialUI</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={postgreslogo} alt='html' /> 
                                <Typography variant='h6' align='center'>Sql</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>  
                                <Image src={mongologo} />
                                <Typography variant='h6' align='center'>MongoDB</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={javascriptlogo} />
                                <Typography variant='h6' align='center'>JavaScript</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>  
                                <Image src={expresslogo} />
                                <Typography variant='h6' align='center'>Express</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }}> 
                                <Image src={sasslogo} />
                                <Typography variant='h6' align='center'>Sass</Typography>
                            </Box>
                        </Box>
                        <Box align='left'>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>   
                                <Image src={nodejslogo} />
                                <Typography variant='h6' align='center'>Node.js</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={djangologo} />
                                <Typography variant='h6' align='center'>Django</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>    
                                <Image src={typescriptlogo} />
                                <Typography variant='h6' align='center'>Typescript</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>    
                                <Image src={bootstraplogo} />
                                <Typography variant='h6' align='center'>Bootstrap</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }}>    
                                <Image src={tailwindlogo} />
                                <Typography variant='h6' align='center'>Tailwind</Typography>
                            </Box>
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
                        <Typography sx={{ mb: 1 }}>Received professional training and mentorship while working on full-stack projects</Typography>
                        <Typography>Designed and implemented interactive, functioning websites and integrated them with back-end databases</Typography>
                    </Box>
                </Box>

                <Box sx={{ my: 6 }}>
                    <Typography variant='h4'>Tapco Credit Union</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Assistant Manager | Tacoma, WA | Mar 22 - Oct 22</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Create and execute plans to meet branch goals</Typography>
                        <Typography sx={{ mb: 1 }}>Lead financial as well as professional development trainings for new and existing employees</Typography>
                        <Typography sx={{ mb: 1 }}>Responsible for loan applications, new memberships, and branch performance</Typography>
                        <Typography sx={{ mb: 1 }}>Audit logs, internal processes, cash, security protocols, and robbery training on a routine basis</Typography>
                        <Typography>Generate new memberships and visit local business to network and generate new leads</Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 6 }}>
                    <Typography variant='h4'>Enterprise Holdings</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Assistant Manager | Kent, WA | Mar 21 - Mar 22</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Oversaw 300+ vehicles and coordinated reservations to maximize profit</Typography>
                        <Typography sx={{ mb: 1 }}>Led a diverse team, created schedules, trained employees, delegated tasks, and created monthly goals to achieve</Typography>
                        <Typography sx={{ mb: 1 }}>Underwrote and assessed potential risks to minimize theft, mitigate losses for derogatory payments, and prevent damage to vehicles</Typography>
                        <Typography sx={{ mb: 1 }}>Maintained relationships with body shops, dealerships and networked with potential clients</Typography>
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
                    <Typography variant='h4'>Chaminade University</Typography>
                    <Typography variant='h6'>Bachelor of Business Admin | Honolulu, HI | May 2019</Typography>
                </Box>
            </Box>
        </Box>


    )

}