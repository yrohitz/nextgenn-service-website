import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { src: "/images/laptops.png", alt: "Laptop display" },
  { src: "/images/technician.png", alt: "Technician repairing a laptop" },
  { src: "/images/laser-printer.png", alt: "Laser printer" },
  { src: "/images/refurbished-laptop.png", alt: "Refurbished laptop" },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Workshop</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A glimpse into our professional repair environment and the premium equipment we handle every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden bg-slate-800 aspect-[4/3]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
