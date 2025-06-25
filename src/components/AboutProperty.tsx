
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AboutProperty = () => {
  const { isDark } = useTheme();

  return (
    <div className={`backdrop-blur-xl rounded-2xl p-5 border ${
      isDark 
        ? 'bg-black/30 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
        : 'bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)]'
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
      
      <button className={`mt-4 flex items-center space-x-2 font-medium text-sm p-3 rounded-lg backdrop-blur-xl border w-full justify-center transition-all duration-300 transform bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 hover:scale-105 active:scale-95`}>
        <span>Read More</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
};

export default AboutProperty;
