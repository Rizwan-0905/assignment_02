// src/components/Header.jsx
import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { PageTitleContext } from '../context/PageTitleContext';

const Header = () => {
  const { title } = useContext(PageTitleContext);

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h6" component="div">
            Rizwan's portfolio
          </Typography>
        </Box>
        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
