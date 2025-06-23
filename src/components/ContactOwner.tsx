
import { User } from 'lucide-react';

const ContactOwner = () => {
  return (
    <div className="backdrop-blur-md bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl">
      <h3 className="text-xl font-bold mb-4">Contact Property Owner</h3>
      
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-violet-500 flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="font-semibold text-white">Rajesh Kumar</div>
          <div className="text-sm text-gray-400">Property Owner</div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <button className="py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
          Chat Now
        </button>
        <button className="py-3 px-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:shadow-lg">
          Call Now
        </button>
      </div>
    </div>
  );
};

export default ContactOwner;
