import React from 'react';
import ProgressBar from './ProgressBar';

interface MainContentProps {
  activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-32 h-32 mb-6">
              <img 
                src="https://raw.githubusercontent.com/mipeu/neural/main/logo.png"
                alt="Neural Brain"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-white text-opacity-80 mb-6">Continue your neural network training</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-full transition-colors duration-300">
              Continue Learning
            </button>
          </div>
        );
      case 'learn':
        return (
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Learning Center</h2>
            <p className="text-white text-opacity-80 mb-6">Access your courses and training modules</p>
            <div className="w-full max-w-sm">
              <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-xl p-4 mb-4">
                <h3 className="text-white font-medium mb-2">Neural Networks Basics</h3>
                <p className="text-white text-opacity-70 text-sm mb-3">Progress: 45%</p>
                <ProgressBar progress={45} />
              </div>
              <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-white font-medium mb-2">Advanced Deep Learning</h3>
                <p className="text-white text-opacity-70 text-sm mb-3">Progress: 12%</p>
                <ProgressBar progress={12} />
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-white text-opacity-80">This section is under development</p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 overflow-auto">
      {renderContent()}
    </div>
  );
};

export default MainContent;