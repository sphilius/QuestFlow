import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  IconButton,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CircularProgress
} from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import StopIcon from '@mui/icons-material/Stop';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SettingsVoiceIcon from '@mui/icons-material/SettingsVoice';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// Voice-Activated Quest Journal Feature
const VoiceJournal = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [voiceCommands, setVoiceCommands] = useState([
    { command: "Create new task", description: "Adds a new task to your quest journal" },
    { command: "Start quest", description: "Begins a new quest with specified title" },
    { command: "Complete task", description: "Marks a task as completed" },
    { command: "Set priority", description: "Changes the priority of a task" },
    { command: "Add note", description: "Adds a note to an existing task or quest" },
    { command: "Summarize day", description: "Provides a summary of today's quests and tasks" }
  ]);
  
  const [recentCommands, setRecentCommands] = useState([
    { 
      command: "Create new task: Review market research document", 
      timestamp: "10:23 AM",
      status: "completed",
      response: "Added 'Review market research document' to your tasks"
    },
    { 
      command: "Set priority high for QuestFlow presentation", 
      timestamp: "11:05 AM",
      status: "completed",
      response: "Updated priority for 'QuestFlow presentation' to HIGH"
    },
    { 
      command: "Start quest: Implement MVP features", 
      timestamp: "1:30 PM",
      status: "completed",
      response: "Created new quest 'Implement MVP features' with default milestones"
    }
  ]);

  // Simulated voice recognition
  useEffect(() => {
    let interval;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime(prevTime => prevTime + 1);
        
        // Simulate voice recognition completion after 5 seconds
        if (recordingTime === 5) {
          handleStopRecording();
          
          // Add simulated new command
          const newCommand = { 
            command: "Add note: Remember to implement testing protocols", 
            timestamp: "Just now",
            status: "completed",
            response: "Added note to your current quest"
          };
          
          setRecentCommands(prev => [newCommand, ...prev]);
        }
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [isRecording, recordingTime]);

  const handleStartRecording = () => {
    setIsRecording(true);
    setRecordingTime(0);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setRecordingTime(0);
  };

  const handleOpenCommandsDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseCommandsDialog = () => {
    setOpenDialog(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          <RecordVoiceOverIcon sx={{ mr: 1, verticalAlign: 'middle', color: 'primary.main' }} />
          Voice-Activated Quest Journal
        </Typography>
        <Button 
          variant="outlined" 
          startIcon={<SettingsVoiceIcon />}
          onClick={handleOpenCommandsDialog}
        >
          Voice Commands
        </Button>
      </Box>

      <Typography variant="body1" color="text.secondary" paragraph>
        Manage your quests and tasks using natural voice commands. Simply speak to create tasks, start quests, add notes, and more.
      </Typography>

      {/* Voice Command Interface */}
      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', py: 3 }}>
            {isRecording ? (
              <>
                <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                  <CircularProgress 
                    variant="determinate" 
                    value={(recordingTime / 10) * 100} 
                    size={80} 
                    thickness={4} 
                    sx={{ color: 'primary.main' }} 
                  />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h6" component="div" color="primary.main">
                      {formatTime(recordingTime)}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Listening... Speak your command
                </Typography>
                <Button 
                  variant="outlined" 
                  color="error" 
                  startIcon={<StopIcon />}
                  onClick={handleStopRecording}
                >
                  Stop Recording
                </Button>
              </>
            ) : (
              <>
                <IconButton 
                  color="primary" 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    backgroundColor: 'primary.light',
                    mb: 2,
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      color: 'white'
                    }
                  }}
                  onClick={handleStartRecording}
                >
                  <MicIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <Typography variant="body1">
                  Tap to start voice command
                </Typography>
              </>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Recent Commands */}
      <Typography variant="h6" gutterBottom>
        Recent Voice Commands
      </Typography>
      <Card>
        <List sx={{ width: '100%' }}>
          {recentCommands.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem
                secondaryAction={
                  <IconButton edge="end" aria-label="play">
                    <PlayArrowIcon />
                  </IconButton>
                }
              >
                <ListItemIcon>
                  <CheckCircleIcon sx={{ color: 'success.main' }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.command}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {item.timestamp}
                      </Typography>
                      {" — "}{item.response}
                    </React.Fragment>
                  }
                />
              </ListItem>
              {index < recentCommands.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      </Card>

      {/* Voice Commands Dialog */}
      <Dialog open={openDialog} onClose={handleCloseCommandsDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Available Voice Commands</DialogTitle>
        <DialogContent>
          <Typography variant="body2" color="text.secondary" paragraph>
            Use these voice commands to interact with your Quest Journal. Speak clearly and use the exact command phrases for best results.
          </Typography>
          
          <Grid container spacing={2}>
            {voiceCommands.map((command, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Card variant="outlined" sx={{ height: '100%' }}>
                  <CardContent>
                    <Typography variant="subtitle2" color="primary.main" gutterBottom>
                      "{command.command}"
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {command.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" gutterBottom>
              Command Structure
            </Typography>
            <Typography variant="body2" paragraph>
              Most commands follow this pattern: <Chip size="small" label="ACTION + DETAILS" /> 
            </Typography>
            <Typography variant="body2">
              Example: "Create new task: Review the QuestFlow documentation"
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseCommandsDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default VoiceJournal;
