
import { Map, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white bg-opacity-80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-pakistan-green flex items-center">
            <span className="mr-1 text-pakistan-orange">🧭</span> 
            Tourista
            <span className="ml-1 text-pakistan-green hidden md:inline"> Pakistan</span>
          </h1>
          <span className="ml-2 text-xs text-pakistan-gray urdu-text hidden md:block">سیاح پاکستان</span>
        </div>

   
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="flex items-center text-pakistan-gray hover:text-pakistan-green transition-colors">
            <Map size={18} className="mr-1" /> Explore
          </a>
          <button  className="flex items-center text-pakistan-gray hover:text-pakistan-green transition-colors">
         <Link   to="/about">
                     About Us
                   </Link>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-pakistan-gray hover:text-pakistan-green"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="flex items-center text-pakistan-gray hover:text-pakistan-green p-2">
              <Map size={18} className="mr-2" /> Explore
            </a>
           
            <a href="#" className="flex items-center text-pakistan-gray hover:text-pakistan-green p-2">
              About Us
            </a>
            
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
