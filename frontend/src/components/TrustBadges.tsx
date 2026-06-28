import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Clock, Home, BadgeIndianRupee, Award, Briefcase, Zap } from 'lucide-react';

const badges = [
  { icon: Wrench, title: "Experienced Technicians" },
  { icon: ShieldCheck, title: "Genuine Spare Parts" },
  { icon: Clock, title: "Same-Day Service Available" },
  { icon: Home, title: "Free Doorstep Visit" },
  { icon: BadgeIndianRupee, title: "Affordable Pricing" },
  { icon: Award, title: "Service Warranty" },
  { icon: Briefcase, title: "Business & Home Support" },
  { icon: Zap, title: "Quick Response Time" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function TrustBadges() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Us</h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-primary/20 text-primary">
                <badge.icon size={28} />
              </div>
              <h3 className="font-semibold text-slate-800 dark:text-slate-100">{badge.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
