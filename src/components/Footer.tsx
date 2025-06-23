
const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-xl bg-black/40 border-t border-white/5 p-4 shadow-2xl">
      <div className="grid grid-cols-4 gap-4 text-center">
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-pink-400 transition-colors duration-300">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 shadow-lg shadow-pink-500/30"></div>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-pink-400 transition-colors duration-300">
          <div className="w-6 h-6 rounded-full backdrop-blur-lg bg-white/10 border border-white/20"></div>
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-pink-400 transition-colors duration-300">
          <div className="w-6 h-6 rounded-full backdrop-blur-lg bg-white/10 border border-white/20"></div>
          <span className="text-xs">Saved</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-pink-400 transition-colors duration-300">
          <div className="w-6 h-6 rounded-full backdrop-blur-lg bg-white/10 border border-white/20"></div>
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
