const SearchHero = () => {
  return (
    <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1550586678-f7225f03c44b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFraXN0YW58ZW58MHx8MHx8fDA%3D')", 
          filter: "brightness(0.5)"
        }}
      ></div>

      
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Discover Pakistan's Best Hotels
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Find the perfect stay across Pakistan's most beautiful destinations with AI-powered recommendations.
          </p>

      
          <div className="p-4 md:p-6  max-w-3xl mx-auto">
           

            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              <span className="bg-white/20 text-white text-sm py-1 px-3 rounded-full hover:bg-white/30 cursor-pointer transition">Hunza Valley</span>
              <span className="bg-white/20 text-white text-sm py-1 px-3 rounded-full hover:bg-white/30 cursor-pointer transition">Lahore</span>
              <span className="bg-white/20 text-white text-sm py-1 px-3 rounded-full hover:bg-white/30 cursor-pointer transition">Islamabad</span>
              <span className="bg-white/20 text-white text-sm py-1 px-3 rounded-full hover:bg-white/30 cursor-pointer transition">Swat</span>
              <span className="bg-white/20 text-white text-sm py-1 px-3 rounded-full hover:bg-white/30 cursor-pointer transition">Karachi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchHero;
