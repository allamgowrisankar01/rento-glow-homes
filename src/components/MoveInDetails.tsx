
import { Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const MoveInDetails = () => {
  const { isDark } = useTheme();

  return (
    <div className={`backdrop-blur-xl rounded-2xl p-5 border ${
      isDark 
        ? 'bg-black/30 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
        : 'bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)]'
    }`}>
      <h3 className={`text-lg font-bold mb-4 flex items-center space-x-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        <Calendar className="w-5 h-5 text-pink-400" />
        <span>Move-in Details</span>
      </h3>
      
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Availability</span>
            <span className="font-semibold text-green-400">Immediate</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Building Type</span>
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>High-rise Tower</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Floor</span>
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>15th of 42</span>
          </div>
        </div>
        
        <div className={`pt-3 border-t ${isDark ? 'border-white/10' : 'border-gray-200/50'}`}>
          <div className={`mb-3 text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Additional Charges:</div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Electricity</span>
              <span className={isDark ? 'text-white' : 'text-gray-800'}>₹8/unit</span>
            </div>
            <div className="flex justify-between">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Water</span>
              <span className={isDark ? 'text-white' : 'text-gray-800'}>₹500/month</span>
            </div>
            <div className="flex justify-between">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Maintenance</span>
              <span className={isDark ? 'text-white' : 'text-gray-800'}>₹3,300/month</span>
            </div>
            <div className={`flex justify-between font-semibold border-t pt-2 mt-2 ${isDark ? 'border-white/10' : 'border-gray-200/50'}`}>
              <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Security Deposit</span>
              <span className={isDark ? 'text-white' : 'text-gray-800'}>₹90,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveInDetails;
