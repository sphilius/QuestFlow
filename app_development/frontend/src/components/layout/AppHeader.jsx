import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MicIcon from '@mui/icons-material/Mic';

const AppHeader = ({ toggleSidebar }) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'white',
        color: 'primary.main',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)'
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleSidebar}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          QuestFlow
        </Typography>
        
        {/* Voice-Activated Quest Journal Feature */}
        <IconButton 
          color="primary" 
          sx={{ 
            mr: 2,
            backgroundColor: 'primary.light',
            '&:hover': {
              backgroundColor: 'primary.main',
              color: 'white'
            }
          }}
          aria-label="voice command"
        >
          <MicIcon />
        </IconButton>
        
        <IconButton color="inherit" sx={{ mr: 2 }}>
          <NotificationsIcon />
        </IconButton>
        
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar 
            alt="User" 
            src="/avatar-placeholder.png" 
            sx={{ 
              width: 40, 
              height: 40,
              border: '2px solid',
              borderColor: 'primary.main'
            }} 
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
