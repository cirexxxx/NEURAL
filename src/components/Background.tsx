import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1280')",
          filter: "brightness(0.5) sepia(0.2) saturate(0.9)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
    </div>
  );
};

export default Background;