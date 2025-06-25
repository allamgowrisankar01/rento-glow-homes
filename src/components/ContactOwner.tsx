
import { User, Phone, MessageCircle, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ContactOwner = () => {
  const { isDark } = useTheme();

  return (
    <div className={`rounded-3xl p-6 border shadow-2xl backdrop-blur-xl ${
      isDark 
        ? 'bg-white/5 border-white/10' 
        : 'bg-white/80 border-gray-200/50'
    }`}>
      <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-800'}`}>Contact Property Owner</h3>
      
      <div className={`flex items-center space-x-4 mb-6 p-4 rounded-2xl border ${
        isDark 
          ? 'bg-white/5 border-white/10' 
          : 'bg-white/60 border-gray-200/50'
      }`}>
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center shadow-lg shadow-pink-500/30 relative">
          <User className="w-7 h-7 text-white" />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
        </div>
        <div className="flex-1">
          <div className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-gray-800'}`}>Rajesh Kumar</div>
          <div className={`text-sm flex items-center space-x-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span>Property Owner</span>
            <Shield className="w-3 h-3 text-green-400" />
            <span className="text-green-400 text-xs">Verified</span>
          </div>
          <div className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Usually responds within 10 minutes</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <button className={`py-4 px-4 rounded-2xl font-semibold transition-all duration-300 transform flex items-center justify-center space-x-2 ${
          isDark
            ? 'bg-[#362c5d] shadow-[8px_8px_16px_#2a2048,_-8px_-8px_16px_#423572] hover:shadow-[12px_12px_24px_#2a2048,_-12px_-12px_24px_#423572] hover:scale-105 active:shadow-[inset_4px_4px_8px_#2a2048,_inset_-4px_-4px_8px_#423572] active:scale-95 text-white'
            : 'bg-white/80 shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.2),_-12px_-12px_24px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] active:scale-95 text-gray-700'
        }`}>
          <MessageCircle className="w-5 h-5" />
          <span>Chat Now</span>
        </button>
        <button className={`py-4 px-4 rounded-2xl font-semibold transition-all duration-300 transform backdrop-blur-xl flex items-center justify-center space-x-2 ${
          isDark
            ? 'bg-[#362c5d] shadow-[8px_8px_16px_#2a2048,_-8px_-8px_16px_#423572] hover:shadow-[12px_12px_24px_#2a2048,_-12px_-12px_24px_#423572] hover:scale-105 active:shadow-[inset_4px_4px_8px_#2a2048,_inset_-4px_-4px_8px_#423572] active:scale-95 text-white'
            : 'bg-white/80 shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.2),_-12px_-12px_24px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] active:scale-95 text-gray-700'
        }`}>
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default ContactOwner;
