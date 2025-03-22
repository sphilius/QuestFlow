import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import RepeatIcon from '@mui/icons-material/Repeat';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

// Quest-Based Habit Building Feature
const HabitBuilder = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      title: 'Morning Meditation',
      description: 'Start each day with 10 minutes of mindfulness meditation',
      frequency: 'daily',
      streak: 5,
      questLine: 'Mind Mastery',
      narrativeContext: 'As a novice monk in the Temple of Serenity, you must train your mind to achieve inner peace.',
      progress: 35
    },
    {
      id: 2,
      title: 'Coding Practice',
      description: 'Solve one programming challenge',
      frequency: 'daily',
      streak: 3,
      questLine: 'Code Wizard',
      narrativeContext: 'Each spell you master brings you closer to becoming the legendary Code Wizard of the Digital Realm.',
      progress: 20
    },
    {
      id: 3,
      title: 'Weekly Review',
      description: 'Review goals and plan for the week ahead',
      frequency: 'weekly',
      streak: 2,
      questLine: 'Strategic Mastermind',
      narrativeContext: 'As the kingdom\'s chief strategist, your weekly council meetings determine the fate of the realm.',
      progress: 50
    }
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [newHabit, setNewHabit] = useState({
    title: '',
    description: '',
    frequency: 'daily',
    questLine: '',
    narrativeContext: ''
  });

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setNewHabit({
      title: '',
      description: '',
      frequency: 'daily',
      questLine: '',
      narrativeContext: ''
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHabit({
      ...newHabit,
      [name]: value
    });
  };

  const handleAddHabit = () => {
    // Implement Adaptive Narrative Engine feature
    let generatedNarrative = newHabit.narrativeContext;
    if (!generatedNarrative) {
      // Simulate AI-generated narrative based on habit details
      const narratives = [
        `As a guardian of the ${newHabit.title} ritual, you must maintain this practice to keep the ancient traditions alive.`,
        `Each time you complete this quest, your character gains experience in the art of ${newHabit.title.toLowerCase()}.`,
        `The kingdom relies on your dedication to ${newHabit.title.toLowerCase()}. Will you rise to the challenge?`
      ];
      generatedNarrative = narratives[Math.floor(Math.random() * narratives.length)];
    }

    const habit = {
      id: habits.length + 1,
      title: newHabit.title,
      description: newHabit.description,
      frequency: newHabit.frequency,
      questLine: newHabit.questLine || `The ${newHabit.title} Chronicles`,
      narrativeContext: generatedNarrative,
      streak: 0,
      progress: 0
    };

    setHabits([...habits, habit]);
    handleCloseDialog();
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          <AutoAwesomeIcon sx={{ mr: 1, verticalAlign: 'middle', color: 'primary.main' }} />
          Quest-Based Habit Builder
        </Typography>
        <Button 
          variant="contained" 
          startIcon={<AddIcon />}
          onClick={handleOpenDialog}
        >
          New Habit Quest
        </Button>
      </Box>

      <Typography variant="body1" color="text.secondary" paragraph>
        Transform your habits into epic quests with narrative progression and rewards. Build consistent habits through the power of storytelling and game design.
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {habits.map((habit) => (
          <Grid item xs={12} md={6} lg={4} key={habit.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                position: 'relative',
                overflow: 'visible',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '4px',
                  backgroundColor: 'primary.main',
                  borderRadius: '4px 4px 0 0'
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {habit.title}
                  </Typography>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      backgroundColor: 'primary.light', 
                      color: 'primary.dark',
                      borderRadius: '12px',
                      px: 1,
                      py: 0.5
                    }}
                  >
                    <RepeatIcon sx={{ fontSize: 16, mr: 0.5 }} />
                    <Typography variant="caption" fontWeight="medium">
                      {habit.frequency}
                    </Typography>
                  </Box>
                </Box>
                
                <Typography variant="body2" color="text.secondary" paragraph>
                  {habit.description}
                </Typography>
                
                <Box sx={{ backgroundColor: 'background.default', p: 1.5, borderRadius: 2, mb: 2 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                    Quest Line: {habit.questLine}
                  </Typography>
                  <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.primary' }}>
                    "{habit.narrativeContext}"
                  </Typography>
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="body2" color="text.secondary">
                    Quest Progress
                  </Typography>
                  <Typography variant="body2" fontWeight="medium">
                    {habit.progress}%
                  </Typography>
                </Box>
                
                <Box 
                  sx={{ 
                    height: 8, 
                    backgroundColor: 'secondary.light',
                    borderRadius: 4,
                    overflow: 'hidden',
                    mb: 2
                  }}
                >
                  <Box 
                    sx={{ 
                      height: '100%', 
                      width: `${habit.progress}%`, 
                      backgroundColor: 'primary.main',
                      borderRadius: 4
                    }} 
                  />
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <TrendingUpIcon sx={{ color: 'success.main', mr: 0.5, fontSize: 20 }} />
                    <Typography variant="body2" fontWeight="medium">
                      {habit.streak} day streak
                    </Typography>
                  </Box>
                  <Button 
                    variant="outlined" 
                    size="small"
                  >
                    Complete Today
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* New Habit Dialog - Implements Adaptive Narrative Engine feature */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Habit Quest</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Habit Title"
            type="text"
            fullWidth
            variant="outlined"
            value={newHabit.title}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            multiline
            rows={2}
            variant="outlined"
            value={newHabit.description}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
          />
          
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Frequency</InputLabel>
            <Select
              name="frequency"
              value={newHabit.frequency}
              label="Frequency"
              onChange={handleInputChange}
            >
              <MenuItem value="daily">Daily</MenuItem>
              <MenuItem value="weekly">Weekly</MenuItem>
              <MenuItem value="monthly">Monthly</MenuItem>
            </Select>
          </FormControl>
          
          <TextField
            margin="dense"
            name="questLine"
            label="Quest Line (optional)"
            type="text"
            fullWidth
            variant="outlined"
            value={newHabit.questLine}
            onChange={handleInputChange}
            sx={{ mb: 2 }}
            helperText="Group related habits into a quest line or leave blank for auto-generation"
          />
          
          <TextField
            margin="dense"
            name="narrativeContext"
            label="Custom Narrative Context (optional)"
            type="text"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={newHabit.narrativeContext}
            onChange={handleInputChange}
            helperText="Create your own narrative or leave blank to let our Adaptive Narrative Engine generate one for you"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button 
            onClick={handleAddHabit} 
            variant="contained"
            disabled={!newHabit.title || !newHabit.description}
          >
            Create Habit Quest
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default HabitBuilder;
