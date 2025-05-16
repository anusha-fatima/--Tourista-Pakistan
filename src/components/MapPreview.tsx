import { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MapPreview = () => {

  const [activeProvince, setActiveProvince] = useState<string | null>(null);

 
  const provinceMaps = {
    punjab: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3668844.008341023!2d70.88532481858093!3d32.407396470473884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFamous%20Hotel%20and%20resturants%20in%20PUNJAB%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746595349068!5m2!1sen!2s" width="1287" height="728" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    sindh: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d231573.78673068597!2d66.90323778493203!3d24.9204705628705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFamous%20Hotel%20in%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746594447589!5m2!1sen!2s" width="1287" height="728" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    kpk: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1682980.4490272643!2d70.95063634328262!3d34.526424305983404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFamous%20Hotel%20in%20KhyberPakhtun%20Khuwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746591258702!5m2!1sen!2s" width="1287" height="728" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',  
    balochistan: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7415390.079038529!2d61.768941122561!3d24.836651242443708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFamous%20Hotel%20and%20resturents%20in%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746594544187!5m2!1sen!2s" width="1287" height="728" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
    gilgit: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d775784.0436482085!2d73.97416946637905!3d36.32892059550585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFamous%20Hotel%20and%20resturants%20in%20gilgit%20baltistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746594660102!5m2!1sen!2s" width="1287" height="728" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',    
    azadkashmir: '<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d5185080.447908541!2d69.62484487442825!3d35.3312049324455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFamous%20Hotel%20and%20resturants%20in%20AzadKashmir%2C%20Pakistan!5e0!3m2!1sen!2s!4v1746594800728!5m2!1sen!2s" width="1287" height="728" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'    
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3 text-pakistan-gray-900">
            {activeProvince ? `${activeProvince}'s Top Hotels` : "Explore Pakistan's Top Destinations"}
          </h2>
          <p className="text-pakistan-gray max-w-2xl mx-auto">
            {activeProvince 
              ? `Discover incredible hotels across ${activeProvince}`
              : "Select a region to explore famous hotels and restaurants"}
          </p>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg p-4 relative">
        
          <div className="aspect-[16/9] bg-gray-100 rounded-lg flex items-center justify-center relative">
            {activeProvince ? (
            
              <div 
                className="w-full h-full" 
                dangerouslySetInnerHTML={{ __html: provinceMaps[activeProvince.toLowerCase() as keyof typeof provinceMaps] }} 
              />
            ) : (
              
              <>
                <div className="absolute inset-0 bg-cover bg-center opacity-50"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1654448275790-a08db76a9d9e?q=80&w=1974&auto=format&fit=crop')"
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Navigation size={48} className="text-pakistan-green opacity-40" />
                </div>
                <div className="bg-white/90 p-4 rounded-lg shadow-lg z-10 max-w-md text-center">
                  <h3 className="text-lg font-semibold mb-2">Select a Region</h3>
                  <p className="text-sm text-pakistan-gray mb-4">
                    Choose a province from below to view famous hotels and restaurants
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

      
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {['Punjab', 'Sindh', 'Kpk', 'Balochistan', 'Gilgit', 'AzadKashmir'].map((province) => (
            <Button 
              key={province}
              variant={activeProvince === province ? "default" : "outline"}
              className={`${
                activeProvince === province 
                  ? 'bg-pakistan-green text-white' 
                  : 'border-pakistan-green text-pakistan-green hover:bg-pakistan-green/10'
              }`}
              onClick={() => setActiveProvince(province)}
            >
              {province}
            </Button>
          ))} 
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3  text-pakistan-green"> <p> Khyber-Pakhtun Khuwa (kpk), Gilgit Baltistan (gilgit), Azad-Jammu-Kashmir (AzadKashmir)

        </p></div>
      </div>
    </section>
  );
};

export default MapPreview;