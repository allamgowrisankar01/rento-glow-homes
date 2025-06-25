
import { User, Phone, MessageCircle, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ContactOwner = () => {
  const { isDark } = useTheme();

  return (
    <div className={`rounded-3xl p-6 border backdrop-blur-xl ${
      isDark 
        ? 'bg-white/5 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
        : 'bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)]'
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
        <button className={`py-4 px-4 rounded-2xl font-semibold transition-all duration-300 transform flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 hover:scale-105 active:scale-95`}>
          <MessageCircle className="w-5 h-5" />
          <span>Chat Now</span>
        </button>
        <button className={`py-4 px-4 rounded-2xl font-semibold transition-all duration-300 transform backdrop-blur-xl flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 hover:scale-105 active:scale-95`}>
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </button>
      </div>
    </div>
  );
};

export default ContactOwner;
