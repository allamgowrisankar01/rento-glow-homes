
const Footer = () => {
  const sections = [
    {
      title: 'Support',
      links: ['Help Center', 'Safety Information', 'Cancellation', 'Disability Support']
    },
    {
      title: 'Community',
      links: ['Renting & Hosting', 'Community Forum', 'RentoMate-friendly', 'Guest Referrals']
    },
    {
      title: 'RentoMate',
      links: ['About', 'Newsroom', 'Careers', 'Investors']
    }
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 backdrop-blur-md bg-black/40 border-t border-white/10 p-4">
      <div className="grid grid-cols-4 gap-4 text-center">
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-pink-400 transition-colors duration-300">
          <div className="w-6 h-6 rounded-full bg-pink-500"></div>
          <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-pink-400 transition-colors duration-300">
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
          <span className="text-xs">Search</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-pink-400 transition-colors duration-300">
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
          <span className="text-xs">Saved</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-400 hover:text-pink-400 transition-colors duration-300">
          <div className="w-6 h-6 rounded-full bg-white/20"></div>
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
