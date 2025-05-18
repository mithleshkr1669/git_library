import { motion } from "framer-motion";
import { Lightbulb, Wifi, Coffee } from "lucide-react";

// Service tags component for reusability
const ServiceTags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag, index) => (
      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
        {tag}
      </span>
    ))}
  </div>
);

// Amenity card component
const AmenityCard = ({ 
  image, 
  title, 
  description, 
  tags,
  delay = 0
}: { 
  image: string, 
  title: string, 
  description: string, 
  tags: string[],
  delay?: number
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-xl mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ServiceTags tags={tags} />
      </div>
    </motion.div>
  );
};

// Additional feature component
const AdditionalFeature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="text-center">
      <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
        {icon}
      </div>
      <h3 className="font-poppins font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Premium Amenities
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Individual Study Cabins */}
          <AmenityCard 
            image="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
            title="Individual Study Cabins"
            description="Private, noise-reducing cabins with personal lighting and charging ports. Each cabin is designed for maximum focus and productivity."
            tags={["Noise Reduction", "Personal Lighting", "Power Outlets"]}
            delay={0.1}
          />
          
          {/* Separate Facilities */}
          <AmenityCard 
            image="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
            title="Separate Facilities"
            description="Dedicated study rooms and washrooms for male and female students, ensuring comfort and privacy for everyone."
            tags={["Gender Separated", "Clean Washrooms", "Study Rooms"]}
            delay={0.2}
          />
          
          {/* Climate Control */}
          <AmenityCard 
            image="https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
            title="Climate Control"
            description="State-of-the-art air conditioning throughout the library maintains an optimal temperature for studying, regardless of outside weather."
            tags={["Air Conditioning", "Temperature Control", "Air Purification"]}
            delay={0.3}
          />
          
          {/* Reading Materials */}
          <AmenityCard 
            image="https://images.unsplash.com/photo-1614680376739-414d95ff43df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500"
            title="Reading Materials"
            description="Daily newspapers, weekly magazines, and academic journals to keep you informed and provide valuable research resources."
            tags={["Daily Newspapers", "Magazines", "Journals"]}
            delay={0.4}
          />
        </div>
        
        <motion.div 
          className="bg-primary/5 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AdditionalFeature 
              icon={<Lightbulb className="text-primary" />}
              title="Perfect Lighting"
              description="Adjustable lighting designed to reduce eye strain during long study sessions."
            />
            
            <AdditionalFeature 
              icon={<Wifi className="text-primary" />}
              title="High-Speed WiFi"
              description="Fast, reliable internet connection throughout the entire facility."
            />
            
            <AdditionalFeature 
              icon={<Coffee className="text-primary" />}
              title="Refreshment Area"
              description="Coffee, tea, and water available to keep you refreshed and focused."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
