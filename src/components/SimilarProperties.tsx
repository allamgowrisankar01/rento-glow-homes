
import { Home } from 'lucide-react';

const SimilarProperties = () => {
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
    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
      <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
        <Home className="w-5 h-5 text-pink-400" />
        <span>Similar Properties You Might Like</span>
      </h3>
      
      <div className="text-sm text-gray-400 mb-4">
        Neighborhood recommendations based on your preferences
      </div>
      
      <div className="space-y-4">
        {properties.map((property, index) => (
          <div 
            key={index}
            className="flex space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            <img 
              src={property.image} 
              alt={property.title}
              className="w-20 h-16 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-semibold text-white truncate">{property.title}</h4>
              <p className="text-sm text-gray-400">{property.location}</p>
              <p className="text-xs text-gray-500">{property.details}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                  {property.status}
                </span>
                <span className="font-bold text-white">{property.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-violet-500/20 border border-pink-500/30 text-pink-400 font-medium hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-violet-500/30 transition-all duration-300">
        View Details
      </button>
    </div>
  );
};

export default SimilarProperties;
