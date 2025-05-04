import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 2,
        px: 3,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: (theme) => theme.zIndex.drawer + 1,
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Rizwan's portfolio. Built with ❤️ and React.
      </Typography>
    </Box>
  );
};

export default Footer;
