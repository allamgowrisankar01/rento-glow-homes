
import { Menu, Bell, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b shadow-2xl transition-all duration-300 ${
      isDark 
        ? 'bg-black/60 border-white/5' 
        : 'bg-white/70 border-pink-200/50 shadow-[0_8px_32px_rgba(255,28,103,0.1)]'
    }`}>
      <div className="flex items-center justify-between px-6 py-5 max-w-md mx-auto lg:max-w-2xl">
        <div className="flex items-center space-x-4">
          <button className={`p-3 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:shadow-lg hover:shadow-pink-500/20' 
              : 'bg-pink-50/80 border-pink-200/50 shadow-[4px_4px_12px_rgba(248,215,218,0.6),_-4px_-4px_12px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_16px_rgba(248,215,218,0.8),_-6px_-6px_16px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_2px_2px_6px_rgba(248,215,218,0.6),_inset_-2px_-2px_6px_rgba(255,255,255,0.9)]'
          }`}>
            <Menu className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#362c5d]'}`} />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff1c67] to-[#362c5d] bg-clip-text text-transparent tracking-wide font-['Montserrat']">
            RentoMate
          </h1>
        </div>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
          <button className={`p-3 rounded-2xl border transition-all duration-300 relative backdrop-blur-sm ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:shadow-lg hover:shadow-pink-500/20' 
              : 'bg-pink-50/80 border-pink-200/50 shadow-[4px_4px_12px_rgba(248,215,218,0.6),_-4px_-4px_12px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_16px_rgba(248,215,218,0.8),_-6px_-6px_16px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_2px_2px_6px_rgba(248,215,218,0.6),_inset_-2px_-2px_6px_rgba(255,255,255,0.9)]'
          }`}>
            <Bell className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#362c5d]'}`} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff1c67] rounded-full animate-pulse shadow-lg shadow-pink-500/50 ring-2 ring-white"></div>
          </button>
          <button className={`p-3 rounded-2xl border transition-all duration-300 backdrop-blur-sm ${
            isDark 
              ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:shadow-lg hover:shadow-pink-500/20' 
              : 'bg-pink-50/80 border-pink-200/50 shadow-[4px_4px_12px_rgba(248,215,218,0.6),_-4px_-4px_12px_rgba(255,255,255,0.9)] hover:shadow-[6px_6px_16px_rgba(248,215,218,0.8),_-6px_-6px_16px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_2px_2px_6px_rgba(248,215,218,0.6),_inset_-2px_-2px_6px_rgba(255,255,255,0.9)]'
          }`}>
            <User className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#362c5d]'}`} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
