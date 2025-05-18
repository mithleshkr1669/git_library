import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Wifi, 
  Coffee, 
  Users, 
  Snowflake, 
  Newspaper, 
  Lock, 
  Cable, 
  BookOpen,
  Fan,
  DoorOpen,
  Sofa
} from "lucide-react";

// Animated feature component
const AnimatedFeature = ({ 
  icon, 
  title, 
  description, 
  tags = [],
  gradient = "from-primary/10 to-primary/5",
  delay = 0
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  tags?: string[],
  gradient?: string,
  delay?: number
}) => {
  return (
    <motion.div 
      className={`bg-gradient-to-br ${gradient} rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all h-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="p-8 flex flex-col h-full">
        <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm">
          {icon}
        </div>
        
        <h3 className="font-poppins font-semibold text-xl mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto pt-4">
            {tags.map((tag, index) => (
              <span key={index} className="bg-white/60 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Highlight feature component
const HighlightFeature = ({ icon, title, color = "bg-primary" }: { icon: React.ReactNode, title: string, color?: string }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      <div className={`${color} text-white w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h4 className="font-medium">{title}</h4>
    </motion.div>
  );
};

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-16 bg-gray-50 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute -right-40 -top-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 -bottom-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="bg-primary/10 rounded-full p-3">
              <Sofa className="h-8 w-8 text-primary" />
            </div>
          </motion.div>
          
          <motion.h2 
            className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Premium <span className="text-primary">Amenities</span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need for a productive study session, all in one place.
          </motion.p>
        </div>
        
        {/* Main amenities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Individual Study Cabins */}
          <AnimatedFeature 
            icon={<DoorOpen className="text-primary h-6 w-6" />}
            title="Individual Study Cabins"
            description="Private, noise-reducing cabins with personal lighting and charging ports. Each cabin is designed for maximum focus and productivity."
            tags={["Noise Reduction", "Personal Lighting"]}
            gradient="from-primary/10 to-primary/5"
            delay={0.1}
          />
          
          {/* Separate Facilities */}
          <AnimatedFeature 
            icon={<Users className="text-primary h-6 w-6" />}
            title="Separate Facilities"
            description="Dedicated study rooms and washrooms for male and female students, ensuring comfort and privacy for everyone."
            tags={["Gender Separated", "Privacy"]}
            gradient="from-primary/15 to-primary/5"
            delay={0.2}
          />
          
          {/* Climate Control */}
          <AnimatedFeature 
            icon={<Snowflake className="text-primary h-6 w-6" />}
            title="Climate Control"
            description="State-of-the-art air conditioning throughout the library maintains an optimal temperature for studying, regardless of outside weather."
            tags={["Air Conditioning", "Temperature Control"]}
            gradient="from-primary/10 to-primary/5"
            delay={0.3}
          />
          
          {/* Reading Materials */}
          <AnimatedFeature 
            icon={<Newspaper className="text-primary h-6 w-6" />}
            title="Reading Materials"
            description="Daily newspapers, weekly magazines, and academic journals to keep you informed and provide valuable research resources."
            tags={["Newspapers", "Magazines"]}
            gradient="from-primary/15 to-primary/5"
            delay={0.4}
          />
          
          {/* Security & Privacy */}
          <AnimatedFeature 
            icon={<Lock className="text-primary h-6 w-6" />}
            title="Security & Privacy"
            description="Secure environment with monitored access. Your belongings remain safe while you focus on your studies."
            tags={["Safe Environment", "Personal Space"]}
            gradient="from-primary/10 to-primary/5"
            delay={0.5}
          />
          
          {/* Power & Connectivity */}
          <AnimatedFeature 
            icon={<Cable className="text-primary h-6 w-6" />}
            title="Power & Connectivity"
            description="Multiple charging points at every seat and high-speed internet to keep your devices powered and connected."
            tags={["Charging Points", "High-Speed Internet"]}
            gradient="from-primary/15 to-primary/5"
            delay={0.6}
          />
        </div>
        
        {/* Highlights grid */}
        <motion.div 
          className="bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-2xl p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="font-poppins font-semibold text-xl mb-6 text-center">Additional Comforts</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <HighlightFeature 
              icon={<Lightbulb className="h-6 w-6" />}
              title="Perfect Lighting"
              color="bg-primary"
            />
            
            <HighlightFeature 
              icon={<Wifi className="h-6 w-6" />}
              title="High-Speed WiFi"
              color="bg-primary"
            />
            
            <HighlightFeature 
              icon={<Coffee className="h-6 w-6" />}
              title="Refreshments"
              color="bg-primary"
            />
            
            <HighlightFeature 
              icon={<Fan className="h-6 w-6" />}
              title="Ventilation"
              color="bg-primary"
            />
            
            <HighlightFeature 
              icon={<BookOpen className="h-6 w-6" />}
              title="Study Material"
              color="bg-primary"
            />
            
            <HighlightFeature 
              icon={<Users className="h-6 w-6" />}
              title="Quiet Areas"
              color="bg-primary"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
