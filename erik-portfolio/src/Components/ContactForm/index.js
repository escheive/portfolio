
// Dependencies
import { useState } from "react";
import { Box, Button, TextField, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
// Variables
const FORM_ENDPOINT = "https://public.herotofu.com/v1/bcf645a0-a5ea-11ed-a31e-753411848f80";


export default function ContactForm() {

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };


  if (submitted) {
    return (
      <>
        <Box>Thank you!</Box>
        <Box>I'll be in touch soon.</Box>
      </>
    );
  }


  return (

    <Box>

        <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        style={{ textAlign: 'center', width: '300px' }}
        >
        <Box>
            <TextField
            type="text"
            label='Your Name'
            variant='standard'
            name="name"
            sx={{ width: '100%' }}
            required
            />
        </Box>

        <Box sx={{ my: 2 }}>
            <TextField
            type="email"
            label='Email'
            variant='standard'
            name="email"
            sx={{ width: '100%' }}
            required
            />
        </Box>

        <Box>
            <TextField
            label='Write me a message'
            multiline
            rows={4}
            name="message"
            sx={{ width: '100%', mt: 2 }}
            required
            />
        </Box>

        <Box sx={{ mt: 3 }}>
            <Button variant="contained" type='submit' color='primary' endIcon={<SendIcon />}>Send</Button>
        </Box>

        </form>

    </Box>


  );
};
