import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Printer Repair & Service",
    description: "Laser Printer Repair, Inkjet Printer Repair, Network Printer Setup, Printer AMC, Preventive Maintenance.",
    brands: "HP, Canon, Epson, Brother, Samsung, Xerox and more.",
    image: "/images/inkjet-printer.png"
  },
  {
    title: "Cartridge Refilling",
    description: "12A, 88A, Brother, Samsung, Ink Cartridge Refilling, Toner Refilling, Cartridge Rebuilding.",
    image: "/images/cartridges.png"
  },
  {
    title: "New Printers & Cartridges",
    description: "Home Printers, Office Printers, Multifunction Printers, Original Cartridges.",
    image: "/images/laser-printer.png"
  },
  {
    title: "Laptop Sales",
    description: "Students, Professionals, Businesses, Gaming, Work From Home.",
    brands: "HP, Dell, Lenovo, Acer, Asus, MSI, Apple and more.",
    image: "/images/laptops.png"
  },
  {
    title: "Refurbished Laptops",
    description: "Fully Tested, Warranty Support, Business Grade Models, Student-Friendly Pricing.",
    image: "/images/refurbished-laptop.png"
  },
  {
    title: "Laptop Spare Parts & Accessories",
    description: "Screens, Keyboards, RAM, SSDs, Batteries, Chargers, Motherboards, Cooling Fans.",
    image: "/images/technician.png"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950" id="services">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Services</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Comprehensive repair, maintenance, and sales solutions for all your tech needs. Fast, reliable, and always at your doorstep.
            </p>
          </div>
          <a
            href="tel:9491873010"
            className="shrink-0 bg-slate-900 dark:bg-primary hover:bg-slate-800 dark:hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Book a Service
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-grow">{service.description}</p>
                {service.brands && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-600">
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Supported Brands</p>
                    <p className="text-sm text-slate-700 dark:text-slate-200 font-semibold">{service.brands}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
