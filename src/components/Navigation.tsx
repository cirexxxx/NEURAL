import React from 'react';
import { Home, Users, ArrowUpSquare, Globe } from 'lucide-react';
import NavItem from './NavItem';
import BrainIcon from './icons/BrainIcon';

interface NavigationProps {
  activeTab: string;
  onChangeTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onChangeTab }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="flex justify-around items-center h-16 px-2">
        <NavItem 
          icon={<Home size={24} />} 
          label="Home" 
          isActive={activeTab === 'home'} 
          onClick={() => onChangeTab('home')}
        />
        <NavItem 
          icon={<BrainIcon size={24} />} 
          label="Learn" 
          isActive={activeTab === 'learn'} 
          onClick={() => onChangeTab('learn')}
        />
        <NavItem 
          icon={<Users size={24} />} 
          label="Friends" 
          isActive={activeTab === 'friends'} 
          onClick={() => onChangeTab('friends')}
        />
        <NavItem 
          icon={<ArrowUpSquare size={24} />} 
          label="Progress" 
          isActive={activeTab === 'progress'} 
          onClick={() => onChangeTab('progress')}
        />
        <NavItem 
          icon={<Globe size={24} />} 
          label="Sources" 
          isActive={activeTab === 'sources'} 
          onClick={() => onChangeTab('sources')}
        />
      </div>
      <div className="flex justify-center py-1">
        <div className="w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};

export default Navigation;