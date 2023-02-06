
// Dependencies
import { useState, useEffect } from 'react'
import { Box, Typography, Alert } from '@mui/material';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';
// Components
import ContactForm from "../../Components/ContactForm";
// Style
import './style.scss';


export default function Contact() {


    // Show state for copied email alert
    const [showAlert, setShowAlert] = useState(false);
    // Function to copy personal email to a users clipboard and display an alert
    function copyText() {
        navigator.clipboard.writeText('erik.b.scheive@gmail.com').then(() => {
            setShowAlert(true)
        })
        .catch(() => {
            alert('Unable to copy email');
        })
    };
    // Displays alert based on useState
    useEffect( () => {
    }, [showAlert])


    return (

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 6 }}>

            {/* Alert that is only showing when email is copied */}
            {showAlert ? <Alert onClose={() => {setShowAlert(!showAlert)}} >Email copied!</Alert> : <Box sx={{ mb: 6 }}></Box>}

            <Typography variant='h3'>Contact Me</Typography>
            <Typography variant='body1' sx={{ mb: 8 }}>with one of the following methods</Typography>


            <Box>
                <IconContext.Provider value={{ className: 'shared-class', size: 60}}>
                    <a href='https://github.com/escheive' target='_blank' rel='noreferrer' style={{ marginInline: 12, color: 'inherit' }}><BsGithub className='contact-icon' /></a>
                    <a href='https://www.linkedin.com/in/erikscheive/' target='_blank' rel='noreferrer' style={{ marginInline: 12, color: 'blue' }}><BsLinkedin className='contact-icon' /></a>
                    <MdEmail className='contact-icon' onClick={copyText} style={{ marginInline: 12 }} />
                </IconContext.Provider>
            </Box>

            <Typography sx={{ mt: 6, mb: 2 }} variant='h6'>Or email me with the form below!</Typography>

            <ContactForm />
        </Box>
    )
}