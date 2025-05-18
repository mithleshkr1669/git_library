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
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Main Reading Area"
    },
    {
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Private Study Cabins"
    },
    {
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Magazine & Newspaper Section"
    },
    {
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Collaborative Study Space"
    },
    {
      image: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Quiet Reading Corners"
    },
    {
      image: "https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      title: "Computer Workstations"
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
