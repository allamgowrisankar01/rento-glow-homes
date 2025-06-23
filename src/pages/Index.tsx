
import Header from '../components/Header';
import ImageGallery from '../components/ImageGallery';
import ApartmentInfo from '../components/ApartmentInfo';
import MoveInDetails from '../components/MoveInDetails';
import AboutProperty from '../components/AboutProperty';
import PremiumAmenities from '../components/PremiumAmenities';
import ContactOwner from '../components/ContactOwner';
import SimilarProperties from '../components/SimilarProperties';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white">
      <Header />
      <main className="pb-20">
        <ImageGallery />
        <div className="px-4 space-y-6">
          <ApartmentInfo />
          <MoveInDetails />
          <AboutProperty />
          <PremiumAmenities />
          <ContactOwner />
          <SimilarProperties />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
