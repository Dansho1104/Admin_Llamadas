import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/UI/Sidebar';
import Header from './components/UI/Header';
import Dashboard from './pages/Dashboard';
import CallManagement from './pages/CallManagement';
import Analytics from './pages/Analytics';
import Training from './pages/Training';
import Integrations from './pages/Integrations';
import Performance from './pages/Performance';
import Settings from './pages/Settings';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <Router>
      <div className="flex h-screen w-screen bg-gray-50 overflow-hidden">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        
        {/* Main Content */}
        <div className={`main-container ${!sidebarOpen ? 'sidebar-collapsed' : ''}`}>
          {/* Header */}
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/calls" element={<CallManagement />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/performance" element={<Performance />} />
              <Route path="/training" element={<Training />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
