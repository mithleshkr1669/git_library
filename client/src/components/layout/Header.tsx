import { useState, useEffect } from "react";
import { Menu, X, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-primary/90 backdrop-blur-sm"}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BookOpen className={`${scrolled ? "text-primary" : "text-white"} h-6 w-6`} />
          <h1 className={`font-poppins font-bold text-xl ${scrolled ? "text-dark" : "text-white"}`}>
            Gita Library<span className={scrolled ? "text-primary" : "text-white/80"}>.</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors`}>
            Home
          </a>
          <a href="#amenities" className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors`}>
            Amenities
          </a>
          <a href="#gallery" className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors`}>
            Gallery
          </a>
          <a href="#faq" className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors`}>
            FAQs
          </a>
          <a href="#contact" className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors`}>
            Contact
          </a>
        </nav>
        
        <button 
          className={`md:hidden ${scrolled ? "text-dark" : "text-white"} text-xl`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu with animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white py-4 px-4 absolute w-full shadow-md"
          >
            <nav className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors"
                onClick={handleLinkClick}
              >
                Home
              </a>
              <a 
                href="#amenities" 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors"
                onClick={handleLinkClick}
              >
                Amenities
              </a>
              <a 
                href="#gallery" 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors"
                onClick={handleLinkClick}
              >
                Gallery
              </a>
              <a 
                href="#faq" 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors"
                onClick={handleLinkClick}
              >
                FAQs
              </a>
              <a 
                href="#contact" 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
