import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 to-dark/70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Modern Study Library for Focused Learning
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            A premium learning environment with dedicated spaces, modern amenities, and comfort for all students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-medium"
              asChild
            >
              <a href="#amenities">Explore Amenities</a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/30"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#amenities" className="inline-block">
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
