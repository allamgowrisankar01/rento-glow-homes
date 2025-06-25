
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    setIsPressed(true);
    toggleTheme();
    setTimeout(() => setIsPressed(false), 150);
  };

  return (
    <button
      onClick={handleClick}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className={`
        relative p-4 rounded-2xl transition-all duration-300 transform
        ${isDark 
          ? `bg-[#362c5d] shadow-[8px_8px_16px_#2a2048,_-8px_-8px_16px_#423572] ${isPressed ? 'shadow-[inset_4px_4px_8px_#2a2048,_inset_-4px_-4px_8px_#423572] scale-95' : 'hover:shadow-[12px_12px_24px_#2a2048,_-12px_-12px_24px_#423572] hover:scale-105'}`
          : `bg-gradient-to-br from-pink-50 to-pink-100 shadow-[8px_8px_16px_#f8d7da,_-8px_-8px_16px_#ffffff] ${isPressed ? 'shadow-[inset_4px_4px_8px_#f8d7da,_inset_-4px_-4px_8px_#ffffff] scale-95' : 'hover:shadow-[12px_12px_24px_#f8d7da,_-12px_-12px_24px_#ffffff] hover:scale-105'}`
        }
        border-0 outline-none focus:outline-none
      `}
    >
      <div className={`transition-all duration-300 ${isPressed ? 'scale-90' : ''}`}>
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-[#362c5d]" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
