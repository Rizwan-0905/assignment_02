import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';
import './Projects.css';

const projects = [
  {
    title: 'Pharmacy Management System',
    description:
      'A Django-based system that manages medicine stock, billing, and sales analytics for pharmacies.',
    icon: <CodeIcon color="primary" fontSize="large" />,
  },
  {
    title: 'Emoji Recognition with CNN',
    description:
      'A Convolutional Neural Network trained to recognize facial expressions and classify them into emojis.',
    icon: <PsychologyIcon color="secondary" fontSize="large" />,
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with React and Material UI to showcase my projects and technical journey.',
    icon: <WebIcon color="action" fontSize="large" />,
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <Typography variant="h3" gutterBottom>
        
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="project-card" elevation={3}>
              <CardContent>
                <div className="project-icon">{project.icon}</div>
                <Typography variant="h5" gutterBottom>{project.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
