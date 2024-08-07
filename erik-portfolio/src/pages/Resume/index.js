
// Dependencies
import { Typography, Box} from "@mui/material";
import { Image } from 'mui-image';
// Assets
import reactlogo from '../../assets/languages/react.png';
import postgreslogo from '../../assets/languages/postgres.png'
import mongologo from '../../assets/languages/mongo.png';
import pythonlogo from '../../assets/languages/python.png';
import javascriptlogo from '../../assets/languages/javascript.png';
import expresslogo from '../../assets/languages/express.png';
import nodejslogo from '../../assets/languages/nodejs.png';
import djangologo from '../../assets/languages/django.png';
import tailwindlogo from '../../assets/languages/tailwind.png';
import typescriptlogo from '../../assets/languages/typescript.png';
import apollologo from '../../assets/languages/apolloLogo.svg';
import awslogo from '../../assets/languages/awsLogo.svg';
import gitlogo from '../../assets/languages/gitLogo.svg';
import seleniumlogo from '../../assets/languages/seleniumLogo.svg';
import reduxlogo from '../../assets/languages/reduxLogo.svg';

export default function Home() {

    return (


        <Box align='center' marginY={'5vh'}>

            <Box>
                <Typography variant='h2'>Erik Scheive</Typography>
                <Typography variant='h5'>Software Engineer</Typography>
                <Typography variant='h6'>Seattle, WA 98121 | erik.b.scheive@gmail.com | Github | LinkedIn</Typography>
            </Box>
            
            <Box className="projects">

                <Typography variant='h3' sx={{ mt: 4, mb: 6, mx: 12, pb: 1, borderBottom: 1 }}>Projects</Typography>

                <Box class='music-tracker' sx={{ mb: 6 }}>
                    <Typography variant='h4'>Music Tracker</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Sole Developer</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Built a React-Vite web app using Spotify 3rd party api and a SQL backend for users to track their music habits</Typography>
                        <Typography sx={{ mb: 1 }}>Social media dashboard allows users to share songs, comment, and like others music</Typography>
                        <Typography sx={{ mb: 1 }}>Utilizes Spotiy 3rd party api for music data, caching to reduce network requests, and responsible api practices</Typography>
                        <Typography sx={{ mb: 1 }}>Uses D3 and music feature algorithms to determine a users mood based on their listening habits</Typography>
                        <Typography>Site is hosted on Vercel</Typography>
                    </Box>
                </Box>

                <Box className='pokeVault' sx={{ my: 6 }}>
                    <Typography variant='h4'>PokeVault</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Sole Developer</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Built a full-scale mobile app, using React Native, Expo, and Apollo GraphQL</Typography>
                        <Typography sx={{ mb: 1 }}>React Native and Expo for cross-platform functionality</Typography>
                        <Typography sx={{ mb: 1 }}>Utilized 3rd party API for data retrieval and dynamic updates</Typography>
                        <Typography sx={{ mb: 1 }}>•	Apollo to reduce API queries, local resolvers to modify data client-side, and persisted data for offline functionality</Typography>
                        <Typography>App is available on Google Play and hopefully soon on web and ios</Typography>
                    </Box>
                </Box>
                
                <Box className='languages-skills' sx={{ mb: 8 }}>
                    <Typography variant='h3' sx={{ mt: 4, mb: 4, pb: 1, mx: 12, borderBottom: 1 }}>Languages & Skills</Typography>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, mx: 1 }}>
                        <Box align='right'>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={reactlogo} />
                                <Typography variant='h6' align='center'>React</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={pythonlogo} />
                                <Typography variant='h6' align='center'>Python</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={gitlogo} alt='Git' />
                                <Typography variant='h6' align='center'>Git</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={apollologo} alt='Apollo' />
                                <Typography variant='h6' align='center'>Apollo</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>    
                                <Image src={seleniumlogo} alt='Selenium' />
                                <Typography variant='h6' align='center'>Selenium</Typography>
                            </Box>
                        </Box>
                        <Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={postgreslogo} alt='PostgresQL' /> 
                                <Typography variant='h6' align='center'>PostgreSQL</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>  
                                <Image src={mongologo} alt='Mongo' />
                                <Typography variant='h6' align='center'>MongoDB</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>
                                <Image src={javascriptlogo} alt='JavaScript' />
                                <Typography variant='h6' align='center'>JavaScript</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }} sx={{ mb: 7 }}>  
                                <Image src={expresslogo} alt='Express' />
                                <Typography variant='h6' align='center'>Express</Typography>
                            </Box>
                            <Box style={{ maxWidth: 120, maxHeight: 120 }}> 
                                <Image src={awslogo} alt='Aws' />
                                <Typography variant='h6' align='center'>Aws</Typography>
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
                                <Image src={reduxlogo} alt='Redux' />
                                <Typography variant='h6' align='center'>Redux</Typography>
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
                    <Typography variant='h4'>Freelance Developer</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Seattle, WA | June 23 - Present</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Built a Music Tracker app leveraging the Spotify API, implementing authentication, mood tracking, and a social media feed</Typography>
                        <Typography sx={{ mb: 1 }}>Developed the PokeVault Pokedex mobile application using React Native and the PokeAPI, featuring offline data caching, graphQL for reduced # of queries, and real-time search capabilities</Typography>
                        <Typography sx={{ mb: 1 }}>Developed a web scraper using node.js and Playwright to extract data and navigate through a site analyzing the data and returning calculated results</Typography>
                        <Typography sx={{ mb: 1 }}>Created an intelligent X(Twitter) bot utilzing the X(Twitter) Api and Node.js to automate posting, allow queuing of posts, and allowing continuous operation and scalability</Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography variant='h4'>Seattle Vacation Home</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>General Manager | Seattle, WA | June 23 - Present</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Oversaw general operations of over 50+ rental homes, including guests, maintenance, staffing</Typography>
                        <Typography sx={{ mb: 1 }}>Implemented new technology in homes and online, as well as integrated 3rd party APIs with eachother</Typography>
                        <Typography sx={{ mb: 1 }}>Developed technical documentation for team to troubleshoot and operate different technologies and procedure</Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography variant='h4'>General Assembly</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Software Engineering Apprenticeship | Seattle, WA | Oct 22 - Jan 23</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Built Full Stack applications while receiving professional mentorship</Typography>
                    </Box>
                </Box>

                <Box sx={{ my: 6 }}>
                    <Typography variant='h4'>Tapco Credit Union</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Assistant Manager | Tacoma, WA | Mar 22 - Oct 22</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Led small team to increase new account growth by 25% over the course of a year</Typography>
                        <Typography sx={{ mb: 1 }}>Lead of professinal development training for employees</Typography>
                    </Box>
                </Box>

                <Box sx={{ mb: 6 }}>
                    <Typography variant='h4'>Enterprise Holdings</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Assistant Manager | Kent, WA | Mar 21 - Mar 22</Typography>
                    <Box>
                        <Typography sx={{ mb: 1 }}>Oversaw 300+ vehicle fleet and improved branch revenue by 10%</Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography variant='h4'>Professional Basketball Player</Typography>
                    <Typography variant='h6' sx={{ mb: 1 }}>Ehingen, Germany | Aug 19 - Dec 20</Typography>
                    <Box>
                        <Typography>Played in a professional basketball league in Germany 2019-2020</Typography>
                    </Box>
                </Box>

            </Box>
            
            <Box>
                <Typography variant='h3' sx={{ mt: 4, mb: 4, pb: 1, mx: 12, borderBottom: 1 }}>Education</Typography>
                <Box>
                    <Typography variant='h4'>Chaminade University</Typography>
                    <Typography variant='h6'>Bachelor of Business Admin | Honolulu, HI</Typography>
                    <Typography variant='h6'>Dean's List | Most Inspirational Athlete</Typography>
                </Box>
            </Box>
        </Box>


    )

}