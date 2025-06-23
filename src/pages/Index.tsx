
import Header from "../components/Header";
import ImageGallery from "../components/ImageGallery";
import ApartmentInfo from "../components/ApartmentInfo";
import MoveInDetails from "../components/MoveInDetails";
import AboutProperty from "../components/AboutProperty";
import PremiumAmenities from "../components/PremiumAmenities";
import ContactOwner from "../components/ContactOwner";
import SimilarProperties from "../components/SimilarProperties";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Pure black background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/10 to-purple-900/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-violet-500/5"></div>
      
      <div className="relative z-10">
        <Header />
        <main className="pb-20 px-3 max-w-sm mx-auto sm:max-w-md lg:max-w-lg">
          <ImageGallery />
          <div className="space-y-3">
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
    </div>
  );
};

export default Index;
