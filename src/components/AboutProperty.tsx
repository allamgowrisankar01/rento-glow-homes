
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AboutProperty = () => {
  const { isDark } = useTheme();

  return (
    <div className={`backdrop-blur-xl rounded-2xl p-5 border shadow-2xl ${
      isDark 
        ? 'bg-black/30 border-white/10' 
        : 'bg-white/80 border-gray-200/50'
    }`}>
      <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>About this property</h3>
      
      <div className={`text-sm leading-relaxed space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        <p>
          Experience luxury living at its finest in Mumbai with this stunning residential apartment. 
          Located in the prime area of Lower Parel, this property offers stunning downtown views 
          and premium amenities that redefine modern living.
        </p>
        <p className="opacity-60">
          The apartment features state-of-the-art facilities, premium location access, and is perfect 
          for professionals seeking a sophisticated lifestyle in the heart of Mumbai's business district...
        </p>
      </div>
      
      <button className={`mt-4 flex items-center space-x-2 font-medium text-sm p-3 rounded-lg backdrop-blur-xl border w-full justify-center transition-all duration-300 transform ${
        isDark
          ? 'bg-[#362c5d] shadow-[8px_8px_16px_#2a2048,_-8px_-8px_16px_#423572] hover:shadow-[12px_12px_24px_#2a2048,_-12px_-12px_24px_#423572] hover:scale-105 active:shadow-[inset_4px_4px_8px_#2a2048,_inset_-4px_-4px_8px_#423572] active:scale-95 text-white border-white/10'
          : 'bg-white/80 shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.2),_-12px_-12px_24px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] active:scale-95 text-gray-700 border-gray-200/50'
      }`}>
        <span>Read More</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AboutProperty;
