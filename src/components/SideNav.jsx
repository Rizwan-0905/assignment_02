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

const drawerWidth = 240;  // Default width of the sidebar

const SideNav = ({ toggleSidebar, sidebarCollapsed }) => {
  const navigate = useNavigate();

  const menuItems = [
    { text: 'Home', icon: <HomeIcon />, path: '/' },
    { text: 'Projects', icon: <WorkIcon />, path: '/projects' },
    { text: 'Education', icon: <SchoolIcon />, path: '/education' },
    { text: 'Contact', icon: <ContactMailIcon />, path: '/contact' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarCollapsed ? 80 : drawerWidth,  // Adjust sidebar width
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: sidebarCollapsed ? 80 : drawerWidth, // Apply the same logic to the drawer paper
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
        <IconButton onClick={() => toggleSidebar()}>
          {sidebarCollapsed ? <MenuIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map(({ text, icon, path }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => navigate(path)}>
              <ListItemIcon>{icon}</ListItemIcon>
              {!sidebarCollapsed && <ListItemText primary={text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideNav;
