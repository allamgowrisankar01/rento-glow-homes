
import { Home } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SimilarProperties = () => {
  const { isDark } = useTheme();
  
  const properties = [
    {
      image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
      title: 'Premium 2BHK in Worli',
      location: 'Worli, Mumbai',
      details: '2 BHK • 1200 sq.ft',
      status: 'Fully Furnished',
      price: '₹72,000'
    },
    {
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop',
      title: 'Modern 3BHK in Bandra',
      location: 'Bandra West, Mumbai',
      details: '3 BHK • 1800 sq.ft',
      status: 'Semi Furnished',
      price: '₹95,000'
    },
    {
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=300&h=200&fit=crop',
      title: 'Luxury 2BHK in Andheri',
      location: 'Andheri East, Mumbai',
      details: '2 BHK • 1100 sq.ft',
      status: 'Fully Furnished',
      price: '₹58,000'
    }
  ];

  return (
    <div className={`backdrop-blur-xl rounded-2xl p-5 border ${
      isDark 
        ? 'bg-black/30 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)]' 
        : 'bg-white/80 border-gray-200/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)]'
    }`}>
      <h3 className={`text-lg font-bold mb-4 flex items-center space-x-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
        <Home className="w-5 h-5 text-pink-400" />
        <span>Similar Properties You Might Like</span>
      </h3>
      
      <div className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
        Neighborhood recommendations based on your preferences
      </div>
      
      <div className="space-y-3">
        {properties.map((property, index) => (
          <div 
            key={index}
            className={`flex space-x-4 p-4 rounded-xl backdrop-blur-xl border transition-all duration-300 hover:shadow-lg ${
              isDark
                ? 'bg-black/20 border-white/10 hover:bg-black/40 hover:shadow-pink-500/10'
                : 'bg-white/60 border-gray-200/50 hover:bg-white/80 hover:shadow-gray-500/10'
            }`}
          >
            <img 
              src={property.image} 
              alt={property.title}
              className="w-16 h-12 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className={`font-semibold truncate text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>{property.title}</h4>
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{property.location}</p>
              <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>{property.details}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded backdrop-blur-xl border border-green-500/20">
                  {property.status}
                </span>
                <span className={`font-bold text-sm ${isDark ? 'text-white' : 'text-gray-800'}`}>{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className={`w-full mt-4 py-3 rounded-xl backdrop-blur-xl border font-medium transition-all duration-300 text-sm transform bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-purple-700 hover:scale-105 active:scale-95`}>
        View Details
      </button>
    </div>
  );
};

export default SimilarProperties;
