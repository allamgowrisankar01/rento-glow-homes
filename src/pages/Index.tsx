
import { useTheme } from "../contexts/ThemeContext";
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
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-all duration-500 font-['Roboto'] ${
      isDark 
        ? 'bg-[#362c5d] text-white' 
        : 'bg-gradient-to-br from-pink-25 via-pink-50 to-rose-75 text-[#362c5d]'
    }`}>
      {/* Theme-based background effects */}
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#423572]/30 via-[#362c5d] to-[#2a2048]/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#ff1c67]/5 via-transparent to-[#423572]/10"></div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-100/50 via-pink-50 to-rose-100/30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-[#ff1c67]/8 via-transparent to-[#362c5d]/8"></div>
          <div className="absolute inset-0 backdrop-blur-[0.5px] bg-white/10"></div>
        </>
      )}
      
      <div className="relative z-10">
        <Header />
        <main className="pb-24 px-4 max-w-md mx-auto lg:max-w-2xl space-y-6">
          <ImageGallery />
          <div className="space-y-6">
            <ApartmentInfo />
            <div className="grid gap-6">
              <MoveInDetails />
              <AboutProperty />
            </div>
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
