
import { MapPin, Home } from 'lucide-react';

const ApartmentInfo = () => {
  return (
    <div className="backdrop-blur-xl bg-black/30 rounded-2xl p-5 border border-white/10 shadow-2xl">
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold mb-2 text-white">Luxury 2BHK Apartment in Lodha Park</h2>
          <div className="flex items-center space-x-2 text-gray-300 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Lower Parel, Mumbai, Maharashtra</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-300 mt-1 text-sm">
            <Home className="w-4 h-4" />
            <span>Lodha Park Tower A, Floor 15</span>
          </div>
        </div>

        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-white">₹65,000</span>
          <span className="text-gray-400 text-sm">/month</span>
          <div className="ml-auto bg-gradient-to-r from-pink-500 to-violet-500 px-3 py-1 rounded-full text-xs font-semibold shadow-lg shadow-pink-500/30">
            Zero Brokerage
          </div>
        </div>

        <div className="text-gray-300 text-sm">
          <span>Maintenance: </span>
          <span className="text-white font-semibold">₹3,300/month</span>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Type</span>
              <span className="font-semibold text-white">2BHK</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Area</span>
              <span className="font-semibold text-white">1300 sq.ft</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Bathrooms</span>
              <span className="font-semibold text-white">2</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Furnishing</span>
              <span className="font-semibold text-white">Fully Furnished</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Occupancy</span>
              <span className="font-semibold text-green-400">Ready to Move</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Parking</span>
              <span className="font-semibold text-white">1 Covered + 1 Visitor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentInfo;
