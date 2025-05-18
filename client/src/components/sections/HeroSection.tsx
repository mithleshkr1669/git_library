import { motion } from "framer-motion";
import { ChevronDown, BookOpen, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

// Animated shape component
const AnimatedShape = ({ 
  delay = 0, 
  x = 0, 
  y = 0, 
  size = 0,
  color = "primary",
  rotation = 0
}) => (
  <motion.div
    className="absolute rounded-full backdrop-blur-md"
    style={{ 
      width: `${size}px`, 
      height: `${size}px`,
      top: `${y}%`,
      left: `${x}%`,
      rotate: `${rotation}deg`,
      backgroundColor: color === "primary" ? "rgba(224, 67, 0, 0.1)" : 
                       color === "secondary" ? "rgba(255, 193, 7, 0.1)" : 
                       "rgba(224, 127, 0, 0.1)"
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.1, 1],
      x: [0, 10, 0],
      y: [0, -10, 0]
    }}
    transition={{ 
      duration: 8, 
      delay, 
      repeat: Infinity,
      ease: "easeInOut" 
    }}
  />
);

const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Modern animated background with shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-primary/10">
        <AnimatedShape delay={0} x={10} y={20} size={200} color="primary" rotation={15} />
        <AnimatedShape delay={1} x={80} y={60} size={150} color="secondary" rotation={45} />
        <AnimatedShape delay={2} x={20} y={70} size={100} color="accent" rotation={30} />
        <AnimatedShape delay={3} x={70} y={30} size={180} color="primary" rotation={60} />
        <AnimatedShape delay={4} x={40} y={40} size={120} color="secondary" rotation={20} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="bg-primary text-white p-5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <BookOpen size={36} />
          </motion.div>
          
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-4 text-dark">
            Gita Library for <span className="text-primary">Focused Study</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8">
            A premium learning environment with private cabins, air conditioning, and separate facilities for boys and girls.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
              className="border-primary text-primary hover:bg-primary/10"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-12">
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="bg-primary/10 rounded-full p-3 mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-gray-700">Separate Facilities</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-primary/10 rounded-full p-3 mb-2">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-gray-700">24/7 Available</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="bg-primary/10 rounded-full p-3 mb-2">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <p className="text-sm text-gray-700">Private Cabins</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary"
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
