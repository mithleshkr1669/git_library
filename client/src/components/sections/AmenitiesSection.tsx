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
    <section id="amenities" className="py-24 overflow-hidden relative bg-gradient-to-b from-white to-primary/5">
      {/* Enhanced decorative elements */}
      <div className="absolute -right-20 top-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute -left-20 top-80 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute right-20 bottom-40 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      {/* Animated waves */}
      <div className="absolute left-0 right-0 top-0 h-20 overflow-hidden opacity-20">
        <svg className="absolute bottom-0 w-full h-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path 
            d="M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            fill="url(#amenitiesGradient1)"
            animate={{
              d: [
                "M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,149.3C672,139,768,181,864,208C960,235,1056,245,1152,240C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,208C96,224,192,256,288,245.3C384,235,480,181,576,181.3C672,181,768,235,864,250.7C960,267,1056,245,1152,208C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="amenitiesGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "rgba(224, 67, 0, 0.4)" }} />
              <stop offset="50%" style={{ stopColor: "rgba(255, 193, 7, 0.3)" }} />
              <stop offset="100%" style={{ stopColor: "rgba(224, 67, 0, 0.4)" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-16">
          <motion.div
            className="relative inline-block mb-6"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <div className="relative z-10 bg-white shadow-lg rounded-full p-5 border-2 border-primary/20">
              <Sofa className="h-10 w-10 text-primary" />
            </div>
            <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm"></div>
          </motion.div>
          
          <motion.h2 
            className="font-poppins font-bold text-4xl md:text-5xl text-dark mb-5 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Premium <span className="text-primary relative">
              Amenities
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.5, delay: 0.8 }}
              ></motion.span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Everything you need for a productive study session, all in one place.
          </motion.p>
        </div>
        
        {/* Enhanced 3D-looking card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Individual Study Cabins */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary/70 rounded-2xl blur-sm opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-full p-8 transition-all duration-500 group-hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full"></div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                <DoorOpen className="text-primary h-8 w-8" />
              </div>
              
              <h3 className="font-poppins font-semibold text-xl mb-3 text-dark group-hover:text-primary transition-colors">Individual Study Cabins</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Private, noise-reducing cabins with personal lighting and charging ports. Each cabin is designed for maximum focus and productivity.</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Noise Reduction
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Personal Lighting
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Separate Facilities */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary/70 rounded-2xl blur-sm opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-full p-8 transition-all duration-500 group-hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full"></div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                <Users className="text-primary h-8 w-8" />
              </div>
              
              <h3 className="font-poppins font-semibold text-xl mb-3 text-dark group-hover:text-primary transition-colors">Separate Facilities</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Dedicated study rooms and washrooms for male and female students, ensuring comfort and privacy for everyone.</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Gender Separated
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Privacy
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Climate Control */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary/70 rounded-2xl blur-sm opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-full p-8 transition-all duration-500 group-hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full"></div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                <Snowflake className="text-primary h-8 w-8" />
              </div>
              
              <h3 className="font-poppins font-semibold text-xl mb-3 text-dark group-hover:text-primary transition-colors">Climate Control</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">State-of-the-art air conditioning throughout the library maintains an optimal temperature for studying, regardless of outside weather.</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Air Conditioning
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Temperature Control
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Reading Materials */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary/70 rounded-2xl blur-sm opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-full p-8 transition-all duration-500 group-hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full"></div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                <Newspaper className="text-primary h-8 w-8" />
              </div>
              
              <h3 className="font-poppins font-semibold text-xl mb-3 text-dark group-hover:text-primary transition-colors">Reading Materials</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Daily newspapers, weekly magazines, and academic journals to keep you informed and provide valuable research resources.</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Newspapers
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Magazines
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Security & Privacy */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary/70 rounded-2xl blur-sm opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-full p-8 transition-all duration-500 group-hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full"></div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                <Lock className="text-primary h-8 w-8" />
              </div>
              
              <h3 className="font-poppins font-semibold text-xl mb-3 text-dark group-hover:text-primary transition-colors">Security & Privacy</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Secure environment with monitored access. Your belongings remain safe while you focus on your studies.</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Safe Environment
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Personal Space
                </span>
              </div>
            </div>
          </motion.div>
          
          {/* Power & Connectivity */}
          <motion.div 
            className="group relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-primary to-secondary/70 rounded-2xl blur-sm opacity-30 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-white rounded-xl overflow-hidden shadow-lg h-full p-8 transition-all duration-500 group-hover:shadow-xl">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full -mr-10 -mt-10"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/5 rounded-full"></div>
              
              <div className="bg-gradient-to-br from-primary/10 to-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-md">
                <Cable className="text-primary h-8 w-8" />
              </div>
              
              <h3 className="font-poppins font-semibold text-xl mb-3 text-dark group-hover:text-primary transition-colors">Power & Connectivity</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">Multiple charging points at every seat and high-speed internet to keep your devices powered and connected.</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Charging Points
                </span>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  High-Speed Internet
                </span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced comfort highlights with 3D effect */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-secondary/50 to-primary/50 rounded-2xl blur-md"></div>
          <div className="relative bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-primary/10">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            
            <div className="p-8">
              <h3 className="font-poppins font-semibold text-2xl mb-8 text-center text-dark">
                <span className="relative inline-block">
                  Additional Comforts
                  <motion.span 
                    className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  ></motion.span>
                </span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {[
                  { icon: <Lightbulb className="h-7 w-7" />, title: "Perfect Lighting" },
                  { icon: <Wifi className="h-7 w-7" />, title: "High-Speed WiFi" },
                  { icon: <Coffee className="h-7 w-7" />, title: "Refreshments" },
                  { icon: <Fan className="h-7 w-7" />, title: "Ventilation" },
                  { icon: <BookOpen className="h-7 w-7" />, title: "Study Material" },
                  { icon: <Users className="h-7 w-7" />, title: "Quiet Areas" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center group relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-primary/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100"></div>
                    
                    <div className="bg-gradient-to-br from-primary/80 to-primary w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md z-10 group-hover:scale-110 transition-all duration-300">
                      <span className="text-white group-hover:scale-125 transition-transform duration-300">
                        {item.icon}
                      </span>
                    </div>
                    
                    <h4 className="font-medium text-dark group-hover:text-white transition-colors duration-300 relative z-10">
                      {item.title}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
