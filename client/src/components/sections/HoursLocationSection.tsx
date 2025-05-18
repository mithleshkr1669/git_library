import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const HoursLocationSection = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <motion.h2 
              className="font-poppins font-bold text-3xl text-dark mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Hours & Location
            </motion.h2>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-poppins font-semibold text-xl mb-4">Opening Hours</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-medium">7:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-medium">8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-poppins font-semibold text-xl mb-4">Address</h3>
              <p className="text-gray-700 mb-4">
                123 Academic Avenue<br />
                Knowledge District<br />
                Learningville, ED 54321
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
                <div className="flex items-center">
                  <Phone className="text-primary w-4 h-4 mr-2" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary w-4 h-4 mr-2" />
                  <span>info@studyhaven.edu</span>
                </div>
              </div>
              <a href="#contact" className="text-primary hover:underline font-medium inline-flex items-center">
                Contact Us <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-white p-2 rounded-xl shadow-sm w-full h-[400px]">
              <div className="bg-gray-200 w-full h-full rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="font-medium text-gray-700">Interactive Map</p>
                  <p className="text-gray-500 text-sm mt-2">123 Academic Avenue, Knowledge District</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HoursLocationSection;
