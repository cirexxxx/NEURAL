import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 w-full">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-lg">
          {userName.charAt(0).toUpperCase()}
        </div>
        <span className="ml-2 text-white text-opacity-90">{userName}</span>
      </div>
      
      <div className="flex items-center bg-black bg-opacity-40 px-3 py-1 rounded-full">
        <span className="text-white font-medium mr-1">NEURAL</span>
        <ChevronDown size={18} className="text-white opacity-80" />
      </div>
    </div>
  );
};

export default Header;