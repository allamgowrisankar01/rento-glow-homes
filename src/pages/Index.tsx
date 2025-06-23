
const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Pure black background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/20 to-purple-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-violet-500/10"></div>
      
      <div className="relative z-10">
        <Header />
        <main className="pb-24 px-4 max-w-md mx-auto lg:max-w-2xl">
          <ImageGallery />
          <div className="space-y-4">
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
