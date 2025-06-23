
import { MapPin, Home, Calendar } from 'lucide-react';

const ApartmentInfo = () => {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
      <div className="space-y-4">
        <div>
          <h2 className="text-2xl font-bold mb-2">Luxury 2BHK Apartment in Lodha Park</h2>
          <div className="flex items-center space-x-2 text-gray-300">
            <MapPin className="w-4 h-4" />
            <span>Lower Parel, Mumbai, Maharashtra</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 mt-1">
            <Home className="w-4 h-4" />
            <span>Lodha Park Tower A, Floor 15</span>
          </div>
        </div>

        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold text-white">₹65,000</span>
          <span className="text-gray-400">/month</span>
          <div className="ml-auto bg-gradient-to-r from-pink-500 to-violet-500 px-3 py-1 rounded-full text-xs font-semibold">
            Zero Brokerage
          </div>
        </div>

        <div className="text-gray-300">
          <span>Maintenance: </span>
          <span className="text-white font-semibold">₹3,300/month</span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Apartment Type</span>
              <span className="font-semibold">2BHK</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Area</span>
              <span className="font-semibold">1300 sq.ft</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Bathrooms</span>
              <span className="font-semibold">2</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Furnishing</span>
              <span className="font-semibold">Fully Furnished</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Occupancy</span>
              <span className="font-semibold text-green-400">Ready to Move</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Parking</span>
              <span className="font-semibold">1 Covered + 1 Visitor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
