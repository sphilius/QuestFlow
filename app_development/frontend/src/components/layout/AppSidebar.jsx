import React from 'react';
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  Box,
  Divider,
  Typography
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MapIcon from '@mui/icons-material/Map';
import ChecklistIcon from '@mui/icons-material/Checklist';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import BrushIcon from '@mui/icons-material/Brush';
import PersonIcon from '@mui/icons-material/Person';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;
const collapsedDrawerWidth = 80;

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Quest Journey', icon: <MapIcon />, path: '/quests' },
  { text: 'Tasks', icon: <ChecklistIcon />, path: '/tasks' },
  { text: 'Habit Builder', icon: <AutoAwesomeIcon />, path: '/habits' },
  { text: 'Narrative Studio', icon: <BrushIcon />, path: '/narrative-studio' },
  { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
];

const AppSidebar = ({ open }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : collapsedDrawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : collapsedDrawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.05)',
          backgroundColor: 'background.paper',
          transition: 'width 0.2s ease-in-out',
          overflowX: 'hidden'
        },
      }}
    >
      <Box sx={{ height: 64 }} /> {/* Toolbar spacer */}
      
      {open && (
        <Box sx={{ p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">
            MAIN MENU
          </Typography>
        </Box>
      )}
      
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                backgroundColor: location.pathname === item.path ? 'rgba(0, 109, 119, 0.08)' : 'transparent',
                borderLeft: location.pathname === item.path ? '4px solid' : '4px solid transparent',
                borderLeftColor: 'primary.main',
                '&:hover': {
                  backgroundColor: 'rgba(0, 109, 119, 0.05)',
                }
              }}
              onClick={() => navigate(item.path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                  color: location.pathname === item.path ? 'primary.main' : 'text.secondary',
                }}
              >
                {item.icon}
              </ListItemIcon>
              {open && (
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    opacity: open ? 1 : 0,
                    color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                  }} 
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider sx={{ my: 2 }} />
      
      {open && (
        <Box sx={{ p: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Current Quest Progress
          </Typography>
          <Box 
            sx={{ 
              height: 8, 
              backgroundColor: 'secondary.light',
              borderRadius: 4,
              overflow: 'hidden'
            }}
          >
            <Box 
              sx={{ 
                height: '100%', 
                width: '65%', 
                backgroundColor: 'primary.main',
                borderRadius: 4
              }} 
            />
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
            "The Ancient Artifact" - 65% complete
          </Typography>
        </Box>
      )}
    </Drawer>
  );
};

export default AppSidebar;
