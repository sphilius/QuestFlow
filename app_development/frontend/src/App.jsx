import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';

// Layout components
import AppHeader from './components/layout/AppHeader';
import AppSidebar from './components/layout/AppSidebar';

// Pages
import Dashboard from './pages/Dashboard';
import QuestJourney from './pages/QuestJourney';
import TaskManagement from './pages/TaskManagement';
import HabitBuilder from './pages/HabitBuilder';
import NarrativeStudio from './pages/NarrativeStudio';
import Profile from './pages/Profile';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <CssBaseline />
        <AppHeader toggleSidebar={toggleSidebar} />
        <AppSidebar open={sidebarOpen} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8,
            ml: sidebarOpen ? { sm: 30 } : { sm: 10 },
            transition: 'margin 0.2s ease-in-out',
            backgroundColor: 'background.default',
            overflow: 'auto'
          }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quests" element={<QuestJourney />} />
            <Route path="/tasks" element={<TaskManagement />} />
            <Route path="/habits" element={<HabitBuilder />} />
            <Route path="/narrative-studio" element={<NarrativeStudio />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
