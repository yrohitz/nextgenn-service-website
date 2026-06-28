import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const brands = [
  "HP", "Dell", "Lenovo", "Apple", "Asus", "Acer", "MSI", "Canon", "Epson", "Brother", "Samsung", "Xerox"
];

const allBrands = [...brands, ...brands, ...brands];

export default function BrandsCarousel() {
  return (
    <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 overflow-hidden">
      <motion.div
        className="container mx-auto px-4 mb-8 text-center"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
          We repair and service all major brands
        </p>
      </motion.div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{
            duration: 18,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {allBrands.map((brand, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.15, color: "#3b5bdb" }}
              className="mx-10 text-2xl md:text-3xl font-extrabold text-slate-300 dark:text-slate-600 cursor-default inline-block transition-colors duration-200"
            >
              {brand}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
