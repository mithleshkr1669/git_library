import { BookOpen, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="text-primary h-6 w-6" />
              <h2 className="font-poppins font-bold text-xl">
                Gita Library<span className="text-primary">.</span>
              </h2>
            </div>
            <p className="text-gray-400 mb-4">
              A modern library designed for focused learning and academic success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-gray-400 hover:text-primary transition-colors">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Memberships
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Study Cabins
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Group Rooms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Research Assistance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Printing Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-lg mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Monday - Friday: 7:00 AM - 10:00 PM</li>
              <li className="text-gray-400">Saturday: 8:00 AM - 8:00 PM</li>
              <li className="text-gray-400">Sunday: 9:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} StudyHaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
