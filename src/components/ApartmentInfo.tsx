
import { MapPin, Home, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ApartmentInfo = () => {
  const { isDark } = useTheme();

  return (
    <div className={`rounded-3xl p-6 border backdrop-blur-xl ${
      isDark 
        ? 'bg-white/5 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
        : 'bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)]'
    }`}>
      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className={`text-2xl font-bold leading-tight ${isDark ? 'text-white' : 'text-gray-800'}`}>Luxury 2BHK Apartment in Lodha Park</h2>
            <div className="flex items-center space-x-1 bg-yellow-500/20 px-3 py-1 rounded-full border border-yellow-500/30">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm">4.8</span>
            </div>
          </div>
          <div className={`flex items-center space-x-2 text-sm mb-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <MapPin className="w-4 h-4 text-pink-400" />
            <span>Lower Parel, Mumbai, Maharashtra</span>
          </div>
          <div className={`flex items-center space-x-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            <Home className="w-4 h-4 text-pink-400" />
            <span>Lodha Park Tower A, Floor 15</span>
          </div>
        </div>

        <div className="flex items-baseline space-x-3">
          <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-800'}`}>₹65,000</span>
          <span className={`text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>/month</span>
          <div className="ml-auto bg-gradient-to-r from-pink-500 to-violet-500 px-4 py-2 rounded-full text-sm font-semibold shadow-lg shadow-pink-500/30 text-white">
            Zero Brokerage
          </div>
        </div>

        <div className={`flex items-center space-x-2 text-sm p-3 rounded-xl border ${
          isDark 
            ? 'bg-white/5 border-white/10' 
            : 'bg-white/60 border-gray-200/50'
        }`}>
          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Maintenance: </span>
          <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>₹3,300/month</span>
        </div>

        <div className={`grid grid-cols-2 gap-6 pt-4 border-t ${isDark ? 'border-white/10' : 'border-gray-200/50'}`}>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Type</span>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>2BHK</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Area</span>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>1300 sq.ft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Bathrooms</span>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>2</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Furnishing</span>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Fully Furnished</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Occupancy</span>
              <span className="font-semibold text-green-400">Ready to Move</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Parking</span>
              <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>1 Covered + 1 Visitor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
