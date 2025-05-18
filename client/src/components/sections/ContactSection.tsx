import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white font-medium w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-primary/5 p-6 rounded-xl mb-4">
              <h3 className="font-poppins font-semibold text-xl mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 text-primary">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Address</h4>
                    <p className="text-gray-600">123 Academic Avenue, Knowledge District</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 text-primary">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-full shadow-sm mr-4 text-primary">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-gray-600">info@studyhaven.edu</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-secondary/5 p-6 rounded-xl">
              <h3 className="font-poppins font-semibold text-xl mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-3 rounded-full shadow-sm text-primary hover:text-secondary transition-colors">
                  <Facebook size={16} />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm text-primary hover:text-secondary transition-colors">
                  <Twitter size={16} />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm text-primary hover:text-secondary transition-colors">
                  <Instagram size={16} />
                </a>
                <a href="#" className="bg-white p-3 rounded-full shadow-sm text-primary hover:text-secondary transition-colors">
                  <Linkedin size={16} />
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
