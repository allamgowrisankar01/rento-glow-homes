
import { Image as ImageIcon } from 'lucide-react';

const ImageGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop'
  ];

  return (
    <div className="relative py-4">
      <div className="grid grid-cols-3 gap-2 rounded-2xl overflow-hidden backdrop-blur-xl bg-black/30 p-3 border border-white/10 shadow-2xl">
        {images.slice(0, 6).map((image, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-xl ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
          >
            <img 
              src={image} 
              alt={`Apartment view ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            {index === 5 && (
              <div className="absolute inset-0 backdrop-blur-md bg-black/80 flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <div className="text-xl font-bold mb-1">+9</div>
                  <div className="text-xs opacity-80">Photos</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full py-3 rounded-xl backdrop-blur-xl bg-black/20 border border-pink-500/30 text-pink-400 font-medium hover:bg-pink-500/10 hover:border-pink-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25">
        <div className="flex items-center justify-center space-x-2">
          <ImageIcon className="w-4 h-4" />
          <span>View all photos</span>
        </div>
      </button>
    </div>
  );
};

export default ImageGallery;
