import React from "react";
import { Linkedin, Github, MessageSquare, Hotel, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-pakistan-green">
      <Link to="/" className="flex-grow container mx-auto px-4 py-8 text-center text-green-600 hover:underline mt-4 inline-block">
        Back to home
      </Link>
      
      <section className="py-10 bg-gradient-to-r text-yellow-400 text-center">
        <h2 className="text-4xl font-bold">About Tourista Pakistan</h2>
      </section>

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-8">
          <h1 className="text-3xl font-bold text-yellow-400 mb-6">
            Our Vision 
          </h1>
          <p className="text-gray-600 leading-relaxed">
            We are a team of passionate developers from Pakistan, united by our commitment to showcase the beauty and hospitality of our country. Our team includes a Full-Stack Developer from Virtual University and an AI/Data Science specialist from NED University of Engineering and Technology Karachi.
            Tourista Pakistan was born from our desire to make travel planning easier while promoting tourism across all provinces. This platform combines mapping technology with comprehensive hotel information to help both domestic and international travelers discover the best of Pakistan.
          </p>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-yellow-400 mb-8">Our AI-Powered Features</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {/* AI Chatbot Card */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-400">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-100 p-3 rounded-full mr-4">
                <MessageSquare className="text-yellow-600" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-yellow-400">Pakistan Travel Assistant</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Ask our AI chatbot anything about Pakistani cities, culture, or travel tips. Get instant answers about:
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2">
              <li>Best times to visit different regions</li>
              <li>Cultural norms and local customs</li>
              <li>Hidden gems in each province</li>
              <li>Transportation options between cities</li>
            </ul>
           
          </div>

        
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <Hotel className="text-green-600" size={24} />
              </div>
              <h4 className="text-xl font-semibold text-green-600">Smart Hotel Analysis</h4>
            </div>
            <p className="text-gray-600 mb-4">
              Our AI analyzes thousands of hotel reviews to give you the most accurate assessments:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Star className="text-yellow-400 mr-2" size={16} />
                <span className="text-gray-600">Review Sentiment</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-blue-400 mr-2" size={16} />
                <span className="text-gray-600">Location Score</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-2"></div>
                <span className="text-gray-600">Cleanliness</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-2"></div>
                <span className="text-gray-600">Value Rating</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-center text-yellow-400 mb-8">Our Team</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-yellow-400">Anusha Fatima</h4>
            <p className="text-green-600 mb-3">Full-Stack Developer</p>
            <p className="text-gray-600 mb-4">
              Designed and built the entire Tourista Pakistan platform, including the interactive maps and hotel booking system.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/anusha-fatima"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                <Github className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/anusha-fatima-69743a288/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                <Linkedin className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h4 className="text-xl font-semibold text-yellow-400">Fizza Abdullah</h4>
            <p className="text-green-600 mb-3">AI/ML Specialist</p>
            <p className="text-gray-600 mb-4">
              Developed the recommendation algorithms and data analysis features that power Tourista Pakistan's personalized suggestions.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/fizzahabdullah2006/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                <Linkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/fizzah09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors duration-300"
              >
                <Github className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <section className="bg-white rounded-xl shadow-md p-8">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Discover Pakistan with Tourista</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Tourista Pakistan is your comprehensive travel companion, offering detailed information about hotels and attractions across all provinces. Our interactive maps and curated recommendations help you plan the perfect trip, whether you're exploring the northern mountains, the cultural heartlands of Punjab, or the coastal beauty of Sindh.
          </p>

          <h2 className="text-2xl font-bold text-yellow-400 mb-4 mt-8">Our Mission</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We aim to revolutionize tourism in Pakistan by providing travelers with accurate, up-to-date information and seamless booking experiences. Our platform bridges the gap between travelers and local businesses, promoting sustainable tourism across the country.
          </p>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4 mt-8">Key Features</h3>
          <ul className="list-disc pl-5 space-y-3 text-gray-600">
            <li><strong>Interactive Provincial Maps:</strong> Explore detailed maps of all provinces with marked hotels, attractions, and points of interest.</li>
            <li><strong>Comprehensive Hotel Listings:</strong> Find the best accommodations with detailed information, photos, and authentic reviews.</li>
            <li><strong>AI Travel Assistant:</strong> Get instant answers to all your Pakistan travel questions through our conversational chatbot.</li>
            <li><strong>Smart Hotel Analysis:</strong> Our AI evaluates thousands of reviews to give you the most reliable hotel recommendations.</li>
            <li><strong>Travel Planning Tools:</strong> Plan your itinerary with our built-in tools that help you organize your trip efficiently.</li>
            <li><strong>Local Insights:</strong> Get authentic recommendations for dining, shopping, and cultural experiences in each region.</li>
          </ul>

          <h3 className="text-2xl font-bold text-yellow-400 mb-4 mt-8">Explore Pakistan with Confidence</h3>
          <p className="text-gray-600 leading-relaxed">
            Tourista Pakistan is more than just an app - it's your gateway to discovering the rich diversity of our country. From the bustling cities to serene landscapes, we provide all the information you need to experience Pakistan like never before. Start your journey today and create unforgettable memories!
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;