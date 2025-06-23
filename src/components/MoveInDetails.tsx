
import { Calendar, Home } from 'lucide-react';

const MoveInDetails = () => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 shadow-2xl">
      <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
        <Calendar className="w-5 h-5 text-pink-400" />
        <span>Move-in Details</span>
      </h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-400">Availability</span>
            <span className="font-semibold text-green-400">Immediate</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Building Type</span>
            <span className="font-semibold">High-rise Tower</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Floor</span>
            <span className="font-semibold">15th of 42</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="text-sm">
            <div className="text-gray-400 mb-2">Additional Charges:</div>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span>Electricity</span>
                <span>₹8/unit</span>
              </div>
              <div className="flex justify-between">
                <span>Water</span>
                <span>₹500/month</span>
              </div>
              <div className="flex justify-between">
                <span>Maintenance</span>
                <span>₹3,300/month</span>
              </div>
              <div className="flex justify-between font-semibold border-t border-white/10 pt-1 mt-2">
                <span>Security Deposit</span>
                <span>₹90,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoveInDetails;
