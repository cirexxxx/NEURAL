// src/App.tsx

import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import MainContent from './components/MainContent';
import Background from './components/Background';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const userName = 'cirex'; // Убедились, что передаем правильное имя
  const progress = 65;

  return (
    <div className="flex flex-col h-full w-full overflow-hidden relative">
      <Background />
      
      {/* App Interface */}
      <div className="flex flex-col h-full z-10">
        {/* Header */}
        <Header userName={userName} />
        
        {/* Progress Bar */}
        <ProgressBar progress={progress} />
        
        {/* Main Content */}
        <MainContent activeTab={activeTab} />
        
        {/* Bottom Navigation */}
        <div className="h-20"></div> {/* Spacer for fixed nav */}
        <Navigation activeTab={activeTab} onChangeTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
