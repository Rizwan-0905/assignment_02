import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <Typography variant="h3" gutterBottom>
        <PersonIcon fontSize="large" /> Rizwan Abdullah
      </Typography>

      <Box className="contact-info">
        <Typography variant="h6">
          <PhoneIcon /> +92 308 5333392
        </Typography>
        <Typography variant="h6">
          <EmailIcon /> bsai23004@itu.edu.pk
        </Typography>
      </Box>

      <form className="contact-form">
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
