
import { Menu, Bell, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
      isDark 
        ? 'bg-[#362c5d]/80 border-[#423572]/50 shadow-[0_8px_32px_rgba(42,32,72,0.4)]' 
        : 'bg-white/90 border-gray-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.1)]'
    }`}>
      <div className="flex items-center justify-between px-6 py-5 max-w-md mx-auto lg:max-w-2xl">
        <div className="flex items-center space-x-4">
          <button className={`p-3 rounded-2xl transition-all duration-300 transform ${
            isDark 
              ? 'bg-[#362c5d] shadow-[8px_8px_16px_#2a2048,_-8px_-8px_16px_#423572] hover:shadow-[12px_12px_24px_#2a2048,_-12px_-12px_24px_#423572] hover:scale-105 active:shadow-[inset_4px_4px_8px_#2a2048,_inset_-4px_-4px_8px_#423572] active:scale-95' 
              : 'bg-white/80 backdrop-blur-md shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.2),_-12px_-12px_24px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] active:scale-95'
          }`}>
            <Menu className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-800'}`} />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff1c67] to-[#362c5d] bg-clip-text text-transparent tracking-wide font-['Montserrat']">
            RentoMate
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <button className={`p-3 rounded-2xl transition-all duration-300 relative transform ${
            isDark 
              ? 'bg-[#362c5d] shadow-[8px_8px_16px_#2a2048,_-8px_-8px_16px_#423572] hover:shadow-[12px_12px_24px_#2a2048,_-12px_-12px_24px_#423572] hover:scale-105 active:shadow-[inset_4px_4px_8px_#2a2048,_inset_-4px_-4px_8px_#423572] active:scale-95' 
              : 'bg-white/80 backdrop-blur-md shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.2),_-12px_-12px_24px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] active:scale-95'
          }`}>
            <Bell className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-800'}`} />
            <div className={`absolute -top-1 -right-1 w-3 h-3 bg-[#ff1c67] rounded-full animate-pulse shadow-lg shadow-pink-500/50 ring-2 ${isDark ? 'ring-[#362c5d]' : 'ring-white'}`}></div>
          </button>
          <button className={`p-3 rounded-2xl transition-all duration-300 transform ${
            isDark 
              ? 'bg-[#362c5d] shadow-[8px_8px_16px_#2a2048,_-8px_-8px_16px_#423572] hover:shadow-[12px_12px_24px_#2a2048,_-12px_-12px_24px_#423572] hover:scale-105 active:shadow-[inset_4px_4px_8px_#2a2048,_inset_-4px_-4px_8px_#423572] active:scale-95' 
              : 'bg-white/80 backdrop-blur-md shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.2),_-12px_-12px_24px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] active:scale-95'
          }`}>
            <User className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-800'}`} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
