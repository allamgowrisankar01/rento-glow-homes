
import { Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const PremiumAmenities = () => {
  const { isDark } = useTheme();
  
  const amenities = [
    { icon: '📶', name: 'High-speed WiFi', featured: true },
    { icon: '📺', name: '55" Smart TV', featured: true },
    { icon: '🚗', name: 'Covered Parking', featured: false },
    { icon: '🍳', name: 'Modular Kitchen', featured: true },
    { icon: '❄️', name: 'Central AC', featured: true },
    { icon: '☕', name: 'Coffee Machine', featured: false },
    { icon: '🔒', name: '24/7 Security', featured: true },
    { icon: '🏊', name: 'Gym & Pool', featured: true }
  ];

  return (
    <div className={`rounded-3xl p-6 border backdrop-blur-xl ${
      isDark 
        ? 'bg-white/5 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
        : 'bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)]'
    }`}>
      <h3 className={`text-xl font-bold mb-6 flex items-center space-x-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        <div className="p-2 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-xl border border-pink-500/30">
          <Star className="w-5 h-5 text-pink-400" />
        </div>
        <span>Premium Amenities</span>
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div 
            key={index}
            className={`flex items-center space-x-3 p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
              amenity.featured 
                ? 'bg-gradient-to-r from-pink-500/10 to-violet-500/10 border border-pink-500/20 hover:from-pink-500/20 hover:to-violet-500/20' 
                : isDark 
                  ? 'bg-white/5 border border-white/10 hover:bg-white/10'
                  : 'bg-white/60 border border-gray-200/50 hover:bg-white/80'
            }`}
          >
            <div className="text-2xl">{amenity.icon}</div>
            <span className={`text-sm font-medium truncate ${isDark ? 'text-white' : 'text-gray-800'}`}>{amenity.name}</span>
            {amenity.featured && (
              <div className="ml-auto w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumAmenities;
