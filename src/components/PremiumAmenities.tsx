
import { Wifi, Star } from 'lucide-react';

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
    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
      <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
        <Star className="w-5 h-5 text-pink-400" />
        <span>Premium Amenities</span>
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        {amenities.map((amenity, index) => (
          <div 
            key={index}
            className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10"
          >
            <div className="text-2xl">{amenity.icon}</div>
            <span className="text-sm font-medium">{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PremiumAmenities;
