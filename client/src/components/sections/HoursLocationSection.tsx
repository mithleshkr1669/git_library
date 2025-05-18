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
              <h3 className="font-poppins font-semibold text-xl mb-4">
                Opening Hours
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-700">Regular Days</span>
                  <span className="font-medium">Open 24/7</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">National Holidays</span>
                  <span className="font-medium">Closed</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-700">Major Festivals</span>
                  <span className="font-medium">Closed</span>
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
              <h3 className="font-poppins font-semibold text-xl mb-4">
                Address
              </h3>
              <p className="text-gray-700 mb-4">
                Sector-9/A, Street 7, Thana More
                <br />
                Near Ranvijay Smarak High School and BSL +2 High School
                <br />
                Bokaro Steel City, Jharkhand 827009
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
                <div className="flex items-center">
                  <Phone className="text-primary w-4 h-4 mr-2" />
                  <span>6206735381</span>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary w-4 h-4 mr-2" />
                  <span>gitalibrarysector9@gmail.com</span>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/place/The+Gita+Library/@23.6890865,86.1477417,17z/data=!3m1!4b1!4m6!3m5!1s0x39f423d89ac32a31:0x2842a93d157bd0ba!8m2!3d23.6890865!4d86.1477417!16s%2Fg%2F11wwbjf72l?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium inline-flex items-center"
              >
                View on Google Maps <ArrowRight className="ml-2 w-4 h-4" />
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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9024424301397!2d86.1477417!3d23.6890865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f423d89ac32a31%3A0x2842a93d157bd0ba!2sThe%20Gita%20Library!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "0.5rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gita Library Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HoursLocationSection;
