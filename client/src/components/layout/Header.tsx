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

  // Navigate to a section and close the mobile menu
  const navigateToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // Get the target element and scroll to it
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      setTimeout(() => {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }, 300);
    }
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
          <button 
            onClick={() => navigateToSection("home")} 
            className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors bg-transparent`}
          >
            Home
          </button>
          <button 
            onClick={() => navigateToSection("amenities")} 
            className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors bg-transparent`}
          >
            Amenities
          </button>
          <button 
            onClick={() => navigateToSection("gallery")} 
            className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors bg-transparent`}
          >
            Gallery
          </button>
          <button 
            onClick={() => navigateToSection("faq")} 
            className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors bg-transparent`}
          >
            FAQs
          </button>
          <button 
            onClick={() => navigateToSection("contact")} 
            className={`${scrolled ? "text-dark hover:text-primary" : "text-white hover:text-white/80"} font-medium transition-colors bg-transparent`}
          >
            Contact
          </button>
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
              <button 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors text-left w-full"
                onClick={() => navigateToSection("home")}
              >
                Home
              </button>
              <button 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors text-left w-full"
                onClick={() => navigateToSection("amenities")}
              >
                Amenities
              </button>
              <button 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors text-left w-full"
                onClick={() => navigateToSection("gallery")}
              >
                Gallery
              </button>
              <button 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors text-left w-full"
                onClick={() => navigateToSection("faq")}
              >
                FAQs
              </button>
              <button 
                className="text-dark hover:text-primary font-medium py-2 px-4 hover:bg-primary/10 rounded transition-colors text-left w-full"
                onClick={() => navigateToSection("contact")}
              >
                Contact
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
