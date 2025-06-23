
import { Star } from 'lucide-react';

const PremiumAmenities = () => {
  const amenities = [
    { icon: '📶', name: 'High-speed WiFi' },
    { icon: '📺', name: '55" Smart TV' },
    { icon: '🚗', name: 'Covered Parking' },
    { icon: '🍳', name: 'Modular Kitchen' },
    { icon: '❄️', name: 'Central AC' },
    { icon: '☕', name: 'Coffee Machine' },
    { icon: '🔒', name: '24/7 Security' },
    { icon: '🏊', name: 'Gym & Pool' }
  ];

  return (
    <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-5 border border-white/10 shadow-2xl">
      <h3 className="text-lg font-bold mb-4 flex items-center space-x-2 text-white">
        <Star className="w-5 h-5 text-pink-400" />
        <span>Premium Amenities</span>
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {amenities.map((amenity, index) => (
          <div 
            key={index}
            className="flex items-center space-x-3 p-3 rounded-xl backdrop-blur-xl bg-black/20 border border-white/10 hover:bg-black/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
          >
            <div className="text-xl">{amenity.icon}</div>
            <span className="text-xs font-medium text-white truncate">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumAmenities;
