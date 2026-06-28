import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Small Business Owner",
    content: "My office printer stopped working right before a major client presentation. Nextgenn sent a technician within two hours, replaced the fuser unit on the spot, and saved the day. Extremely professional service.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    role: "Freelance Designer",
    content: "Upgraded my laptop RAM and SSD through them. The difference in speed is incredible, and they charged exactly what was quoted—no hidden fees. They even cleaned the cooling fan for free. Highly recommended!",
    rating: 5
  },
  {
    name: "Vikram Reddy",
    role: "School Administrator",
    content: "We signed an AMC for our computer lab (40 laptops) and admin office printers. Their preventive maintenance is thorough, and their response time for emergency calls is consistently under 3 hours. Great partner for our institution.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Trusted by Customers</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about our repair and sales services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 relative"
            >
              <div className="flex gap-1 mb-6 text-amber-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-8 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
