
import { Image as ImageIcon, Play } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ImageGallery = () => {
  const { isDark } = useTheme();
  
  const images = [
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  ];

  return (
    <div className="relative">
      <div className={`grid grid-cols-3 gap-3 rounded-3xl overflow-hidden p-4 border shadow-2xl backdrop-blur-xl ${
        isDark 
          ? 'bg-white/5 border-white/10' 
          : 'bg-white/80 border-gray-200/50'
      }`}>
        {images.slice(0, 6).map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-2xl group ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
          >
            <img 
              src={image} 
              alt={`Apartment view ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {index === 0 && (
              <button className={`absolute bottom-4 right-4 p-3 rounded-2xl backdrop-blur-md border transition-all duration-300 transform ${
                isDark
                  ? 'bg-[#362c5d]/80 border-white/30 shadow-[4px_4px_8px_#2a2048,_-4px_-4px_8px_#423572] hover:shadow-[8px_8px_16px_#2a2048,_-8px_-8px_16px_#423572] hover:scale-105 active:shadow-[inset_2px_2px_4px_#2a2048,_inset_-2px_-2px_4px_#423572] active:scale-95'
                  : 'bg-white/80 border-white/30 shadow-[4px_4px_8px_rgba(0,0,0,0.15),_-4px_-4px_8px_rgba(255,255,255,0.8)] hover:shadow-[8px_8px_16px_rgba(0,0,0,0.2),_-8px_-8px_16px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15),_inset_-2px_-2px_4px_rgba(255,255,255,0.8)] active:scale-95'
              }`}>
                <Play className="w-5 h-5 text-white" />
              </button>
            )}
            {index === 5 && (
              <div className={`absolute inset-0 backdrop-blur-md flex items-center justify-center border rounded-2xl ${
                isDark 
                  ? 'bg-black/70 border-white/20' 
                  : 'bg-white/70 border-gray-200/50'
              }`}>
                <div className="text-center">
                  <div className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>+9</div>
                  <div className={`text-sm opacity-80 ${isDark ? 'text-white' : 'text-gray-600'}`}>More Photos</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <button className={`mt-6 w-full py-4 rounded-2xl font-semibold transition-all duration-300 backdrop-blur-xl transform ${
        isDark
          ? 'bg-[#362c5d] shadow-[8px_8px_16px_#2a2048,_-8px_-8px_16px_#423572] hover:shadow-[12px_12px_24px_#2a2048,_-12px_-12px_24px_#423572] hover:scale-105 active:shadow-[inset_4px_4px_8px_#2a2048,_inset_-4px_-4px_8px_#423572] active:scale-95 text-white'
          : 'bg-white/80 shadow-[8px_8px_16px_rgba(0,0,0,0.15),_-8px_-8px_16px_rgba(255,255,255,0.8)] hover:shadow-[12px_12px_24px_rgba(0,0,0,0.2),_-12px_-12px_24px_rgba(255,255,255,0.9)] hover:scale-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),_inset_-4px_-4px_8px_rgba(255,255,255,0.8)] active:scale-95 text-gray-700'
      }`}>
        <div className="flex items-center justify-center space-x-3">
          <ImageIcon className="w-5 h-5" />
          <span>View All Photos</span>
        </div>
      </button>
    </div>
  );
};

export default ImageGallery;
