import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  // WhatsApp phone number
  const whatsappNumber = "6206735381";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Have questions or need more information? Get in touch with our team.
          </motion.p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full shadow-sm mr-4 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Address</h4>
                  <p className="text-gray-600">
                    Sector-9/A, Street 7, Thana More<br />
                    Near Ranvijay Smarak High School and BSL +2 High School<br />
                    Bokaro Steel City, Jharkhand 827009
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full shadow-sm mr-4 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Phone</h4>
                  <p className="text-gray-600">6206735381</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full shadow-sm mr-4 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-1">Email</h4>
                  <p className="text-gray-600">gitalibrarysector9@gmail.com</p>
                </div>
              </div>
              
              <div className="pt-4">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-medium flex items-center justify-center gap-2"
                  >
                    <MessageSquare size={18} />
                    Chat with us on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
