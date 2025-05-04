import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Toolbar,
  Box,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const SideNav = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
    { text: 'Education', icon: <SchoolIcon />, path: '/education' },
    { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
  ];

  return visible ? (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          top: 64,
          height: 'calc(100% - 64px)',
        },
      }}
      PaperProps={{
        sx: {
          top: 64,
          height: 'calc(100% - 64px)',
        },
      }}
    >
      {/* Toolbar with collapse button */}
      <Toolbar sx={{ justifyContent: 'flex-end' }}>
        <IconButton onClick={() => setVisible(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate(path)}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  ) : (
    // Small button to reopen sidebar
    <Box sx={{ position: 'fixed', top: 10, left: 10, zIndex: 1300 }}>
      <IconButton onClick={() => setVisible(true)} color="primary">
        <MenuIcon />
      </IconButton>
    </Box>
  );
};

export default SideNav;
