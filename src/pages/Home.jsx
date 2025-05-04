import React from 'react';
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import './Home.css';

const Home = () => {
  return (
    <Container className="bg-blue" maxWidth="false">
      <Box className="centered-box">
        <Avatar
          src="/assets/image.jpg"
          className="avatar"
          alt="Rizwan Abdullah"
        />
        <Box className="text-container">
          <h1 className="name">Rizwan Abdullah</h1>
          <h2 className="role">Web Developer</h2>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
