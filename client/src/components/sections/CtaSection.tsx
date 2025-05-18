import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          className="font-poppins font-bold text-3xl text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to Experience Our Modern Library?
        </motion.h2>
        <motion.p 
          className="text-white/90 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Join us today and elevate your study experience with our premium facilities and services.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button 
            className="bg-white text-primary hover:bg-white/90 font-medium" 
            asChild
          >
            <a href="#amenities">Explore Amenities</a>
          </Button>
          <Button 
            variant="outline" 
            className="bg-transparent hover:bg-white/10 text-white border-white/30 font-medium"
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
