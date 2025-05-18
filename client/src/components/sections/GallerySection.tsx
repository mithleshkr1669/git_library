import { motion } from "framer-motion";

// Gallery item component with hover effect
const GalleryItem = ({ 
  image, 
  title, 
  delay = 0 
}: { 
  image: string, 
  title: string, 
  delay?: number 
}) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-xl group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
        <p className="text-white p-4 font-medium">{title}</p>
      </div>
    </motion.div>
  );
};

const GallerySection = () => {
  const galleryItems = [
    {
      image: "/cabin1.png",
      title: "Individual Study Cabin"
    },
    {
      image: "/cabin2.png",
      title: "Numbered Study Cabins"
    },
    {
      image: "/cabin3.png",
      title: "Personal Study Space"
    },
    {
      image: "/library.png",
      title: "Main Study Area"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            className="font-poppins font-bold text-3xl md:text-4xl text-dark mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Gallery
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Take a visual tour of our modern library facilities.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <GalleryItem 
              key={index}
              image={item.image}
              title={item.title}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
