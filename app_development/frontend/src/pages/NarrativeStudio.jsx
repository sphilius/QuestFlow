import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  TextField,
  IconButton,
  Paper,
  Tabs,
  Tab,
  Divider,
  Menu,
  MenuItem,
  Chip
} from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageIcon from '@mui/icons-material/Image';
import AddIcon from '@mui/icons-material/Add';

// Narrative Visualization Studio Feature
const NarrativeStudio = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [templates, setTemplates] = useState([
    {
      id: 1,
      name: 'Epic Quest',
      description: 'A heroic journey with challenges and rewards',
      thumbnail: '🏰',
      elements: 12
    },
    {
      id: 2,
      name: 'Daily Routine',
      description: 'Structure your day as a series of mini-quests',
      thumbnail: '🌞',
      elements: 8
    },
    {
      id: 3,
      name: 'Skill Tree',
      description: 'Visualize your progress in developing a skill',
      thumbnail: '🌳',
      elements: 15
    },
    {
      id: 4,
      name: 'Project Roadmap',
      description: 'Map out project milestones as quest checkpoints',
      thumbnail: '🗺️',
      elements: 10
    }
  ]);
  
  const [userProjects, setUserProjects] = useState([
    {
      id: 1,
      name: 'Morning Routine Quest',
      description: 'My daily morning ritual visualized as a quest',
      lastEdited: '2 days ago',
      thumbnail: '🌅'
    },
    {
      id: 2,
      name: 'Coding Skills Journey',
      description: 'My path to becoming a better developer',
      lastEdited: '1 week ago',
      thumbnail: '💻'
    }
  ]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          <BrushIcon sx={{ mr: 1, verticalAlign: 'middle', color: 'primary.main' }} />
          Narrative Visualization Studio
        </Typography>
        <Box>
          <Button 
            variant="outlined" 
            startIcon={<SaveIcon />}
            sx={{ mr: 1 }}
          >
            Save
          </Button>
          <Button 
            variant="contained" 
            startIcon={<ShareIcon />}
          >
            Export
          </Button>
        </Box>
      </Box>

      <Typography variant="body1" color="text.secondary" paragraph>
        Design your own quest maps, character companions, and narrative themes. Visualize your productivity journey through engaging storytelling elements.
      </Typography>

      <Paper sx={{ mb: 4 }}>
        <Tabs 
          value={activeTab} 
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Templates" />
          <Tab label="My Projects" />
          <Tab label="Canvas" />
        </Tabs>
        
        {activeTab === 0 && (
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Start with a Template
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Choose a pre-designed template to jumpstart your narrative visualization
            </Typography>
            
            <Grid container spacing={3}>
              {templates.map((template) => (
                <Grid item xs={12} sm={6} md={3} key={template.id}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: 3
                      }
                    }}
                  >
                    <Box 
                      sx={{ 
                        height: 140, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        backgroundColor: 'primary.light',
                        fontSize: '4rem'
                      }}
                    >
                      {template.thumbnail}
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h2" gutterBottom>
                        {template.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {template.description}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {template.elements} elements
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
        
        {activeTab === 1 && (
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6">
                My Projects
              </Typography>
              <Button 
                variant="outlined" 
                startIcon={<AddIcon />}
                size="small"
              >
                New Project
              </Button>
            </Box>
            
            <Grid container spacing={3}>
              {userProjects.map((project) => (
                <Grid item xs={12} sm={6} md={4} key={project.id}>
                  <Card 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      flexDirection: 'column',
                    }}
                  >
                    <Box 
                      sx={{ 
                        height: 120, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        backgroundColor: 'secondary.light',
                        fontSize: '3rem',
                        position: 'relative'
                      }}
                    >
                      {project.thumbnail}
                      <IconButton 
                        sx={{ position: 'absolute', top: 8, right: 8 }}
                        onClick={handleMenuClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="h2" gutterBottom>
                        {project.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Last edited: {project.lastEdited}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
              
              <Grid item xs={12} sm={6} md={4}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    border: '2px dashed',
                    borderColor: 'divider',
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'primary.main',
                    }
                  }}
                >
                  <Box 
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      p: 3,
                      flexDirection: 'column'
                    }}
                  >
                    <AddIcon sx={{ fontSize: 40, color: 'text.secondary', mb: 2 }} />
                    <Typography variant="h6" color="text.secondary">
                      Create New Project
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            </Grid>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Edit</MenuItem>
              <MenuItem onClick={handleMenuClose}>Duplicate</MenuItem>
              <MenuItem onClick={handleMenuClose}>Share</MenuItem>
              <MenuItem onClick={handleMenuClose}>Delete</MenuItem>
            </Menu>
          </Box>
        )}
        
        {activeTab === 2 && (
          <Box>
            <Box sx={{ display: 'flex', height: 'calc(100vh - 300px)', minHeight: 500 }}>
              {/* Tools Panel */}
              <Box 
                sx={{ 
                  width: 60, 
                  borderRight: 1, 
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  py: 2
                }}
              >
                <IconButton sx={{ mb: 2 }}>
                  <FormatColorFillIcon />
                </IconButton>
                <IconButton sx={{ mb: 2 }}>
                  <TextFieldsIcon />
                </IconButton>
                <IconButton sx={{ mb: 2 }}>
                  <ImageIcon />
                </IconButton>
                <Divider sx={{ width: '80%', my: 2 }} />
                <IconButton>
                  <AddIcon />
                </IconButton>
              </Box>
              
              {/* Elements Panel */}
              <Box 
                sx={{ 
                  width: 240, 
                  borderRight: 1, 
                  borderColor: 'divider',
                  p: 2,
                  overflowY: 'auto'
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  NARRATIVE ELEMENTS
                </Typography>
                
                <Typography variant="body2" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>
                  Characters
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Hero" size="small" />
                  <Chip label="Mentor" size="small" />
                  <Chip label="Ally" size="small" />
                  <Chip label="Guardian" size="small" />
                </Box>
                
                <Typography variant="body2" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>
                  Quest Nodes
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Starting Point" size="small" />
                  <Chip label="Challenge" size="small" />
                  <Chip label="Milestone" size="small" />
                  <Chip label="Reward" size="small" />
                  <Chip label="Decision" size="small" />
                </Box>
                
                <Typography variant="body2" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>
                  Connectors
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Path" size="small" />
                  <Chip label="Dependency" size="small" />
                  <Chip label="Alternative" size="small" />
                </Box>
                
                <Typography variant="body2" sx={{ mt: 2, mb: 1, fontWeight: 500 }}>
                  Environments
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  <Chip label="Forest" size="small" />
                  <Chip label="Mountain" size="small" />
                  <Chip label="Castle" size="small" />
                  <Chip label="Village" size="small" />
                </Box>
              </Box>
              
              {/* Canvas */}
              <Box 
                sx={{ 
                  flexGrow: 1, 
                  backgroundColor: '#f8f9fa',
                  backgroundImage: 'radial-gradient(#e0e0e0 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  Drag elements from the panel to create your narrative visualization
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2" color="text.secondary">
                Canvas: 1200 x 800 px
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Elements: 0
              </Typography>
            </Box>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default NarrativeStudio;
