import { motion } from "framer-motion";
import { GraduationCap, Snowflake, Newspaper } from "lucide-react";

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  color: string 
}) => {
  return (
    <motion.div 
      className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
        {icon}
      </div>
      <h3 className="font-poppins font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Our Library?
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our library combines academic excellence with comfort to create the perfect study environment.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<GraduationCap className="text-primary text-2xl" />}
            title="Dedicated Spaces"
            description="Separate study rooms and facilities for both male and female students."
            color="bg-primary/10"
          />
          
          <FeatureCard 
            icon={<Snowflake className="text-secondary text-2xl" />}
            title="Climate Controlled"
            description="Air-conditioned environment for year-round comfortable studying."
            color="bg-secondary/10"
          />
          
          <FeatureCard 
            icon={<Newspaper className="text-accent text-2xl" />}
            title="Latest Resources"
            description="Daily newspapers, magazines, and updated reference materials."
            color="bg-accent/10"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
