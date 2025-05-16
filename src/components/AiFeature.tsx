import { Brain, Star, ThumbsUp, Hotel, AlertCircle, MapPin, TrendingUp, Shield } from 'lucide-react';

const AiFeature = () => {
  // Mock data for demonstration
  const analysisData = [
    { label: "Cleanliness", score: 92 },
    { label: "Location", score: 88 },
    { label: "Service", score: 95 },
    { label: "Value", score: 85 },
  ];

  const trendingHotels = [
    { name: "Serena Hotel, Islamabad", positive: 94 },
    { name: "Pearl Continental, Lahore", positive: 89 },
    { name: "PTDC Motel, Hunza", positive: 97 },
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-pakistan-green/10 to-pakistan-blue/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-pakistan-green font-medium bg-pakistan-green/10 px-4 py-1 rounded-full">
            <Brain size={16} /> AI-POWERED RECOMMENDATIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">Pakistan's Smartest Hotel Finder</h2>
          <p className="text-pakistan-gray max-w-3xl mx-auto text-lg">
            Combining real-time data with advanced sentiment analysis to match you with perfect accommodations across all provinces.
          </p>
        </div>

        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <Brain className="text-pakistan-green" size={24} />,
              title: "Deep Sentiment Analysis",
              desc: "Parses 10,000+ reviews to detect genuine guest satisfaction",
              bg: "bg-pakistan-green/10"
            },
            {
              icon: <MapPin className="text-pakistan-blue" size={24} />,
              title: "Province-Specific Matching",
              desc: "Understands regional differences in hospitality standards",
              bg: "bg-pakistan-blue/10"
            },
            {
              icon: <TrendingUp className="text-pakistan-orange" size={24} />,
              title: "Trend Detection",
              desc: "Spots emerging favorite hotels before they become popular",
              bg: "bg-pakistan-orange/10"
            },
            {
              icon: <Shield className="text-pakistan-green" size={24} />,
              title: "Safety First",
              desc: "Flags hotels with security concerns in their reviews",
              bg: "bg-pakistan-green/10"
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-transparent hover:border-pakistan-green/20"
            >
              <div className={`rounded-full ${feature.bg} p-3 w-12 h-12 flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-pakistan-gray">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* AI Analysis Dashboard */}
        <div className="mt-12 bg-white p-6 md:p-8 rounded-xl shadow-md">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            {/* Review Analysis */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <Star size={18} className="text-pakistan-orange" />
                  Hotel Quality Breakdown
                </h3>
                <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                  Live Analysis
                </div>
              </div>
              
              <div className="space-y-4">
                {analysisData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.label}</span>
                      <span className="font-medium">{item.score}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-pakistan-green to-pakistan-blue rounded-full"
                        style={{ width: `${item.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trending Hotels */}
            <div className="flex-1">
              <h3 className="font-bold text-lg flex items-center gap-2 mb-6">
                <TrendingUp size={18} className="text-pakistan-blue" />
                Currently Trending in Pakistan
              </h3>
              
              <div className="space-y-4">
                {trendingHotels.map((hotel, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`flex-shrink-0 mt-1 w-3 h-3 rounded-full ${
                      hotel.positive > 90 ? 'bg-pakistan-green' : 'bg-pakistan-blue'
                    }`}></div>
                    <div className="ml-3">
                      <p className="font-medium">{hotel.name}</p>
                      <div className="flex items-center text-sm text-pakistan-gray">
                        <span className="text-pakistan-green font-medium mr-2">{hotel.positive}% positive</span>
                        • Last 30 days
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Real-time Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-gray-100">
            {[
              { value: "4,200+", label: "Reviews Analyzed", icon: <ThumbsUp size={16} /> },
              { value: "93%", label: "Accuracy Rate", icon: <Shield size={16} /> },
              { value: "42", label: "Cities Covered", icon: <MapPin size={16} /> },
              { value: "Instant", label: "Recommendations", icon: <AlertCircle size={16} /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-pakistan-green mb-1">{stat.value}</div>
                <div className="text-sm text-pakistan-gray flex items-center justify-center gap-1">
                  {stat.icon} {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiFeature;