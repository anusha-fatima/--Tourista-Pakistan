import {Instagram, Linkedin, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-pakistan-green text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-1">🧭</span> 
              Tourista Pakistan
            </h3>
            <p className="text-white/80 mb-4">
              Discover Pakistan's finest hotels and accommodations with AI-powered recommendations and real-time deals.
            </p>
            <div className="flex space-x-4">
              <a  href="https://github.com/fizzah09"
              target="_blank"
              rel="noopener noreferrer" className="hover:text-pakistan-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.instagram.com/anusshhaha__?igsh=MXFienNoZXUzZ2x4dA==" className="hover:text-pakistan-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a  href="https://www.linkedin.com/in/fizzahabdullah2006/"
              target="_blank"
              rel="noopener noreferrer"className="hover:text-pakistan-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Explore</h4>
            <ul className="space-y-2">
             <li><a href="#" className="text-white/80 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Destinations</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Hotels</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Travel Map</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Team Members</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Anusha Fatima</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Fizza Abdullah</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="mailto:info@tourista.pk" className="flex items-center text-white/80 hover:text-white transition-colors">
                <Mail size={25} className="mr-2" />
                anushafatima313@gmail.com <br />
                 fizzah.abdullah2020@gmail.com 
              </a>
               <a  href="https://www.linkedin.com/in/anusha-fatima-69743a288/"
              target="_blank"
              rel="noopener noreferrer" className="hover:text-pakistan-blue transition-colors">
                <Linkedin size={20} />
              </a> <br />
                <a  href="https://github.com/anusha-fatima"
              target="_blank"
              rel="noopener noreferrer" className="hover:text-pakistan-blue transition-colors">
                <Github size={20} /> 
              </a>
              <p className="text-white/80 urdu-text text-lg">سیاح پاکستان</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tourista Pakistan. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-white/70">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
