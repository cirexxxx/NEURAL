import React from 'react';

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => {
  return (
    <button 
      className={`nav-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="mb-1">
        {icon}
      </div>
      <span>{label}</span>
    </button>
  );
};

export default NavItem;