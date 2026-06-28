import React from 'react';
import { motion } from 'framer-motion';
import { Building2, CheckCircle2 } from 'lucide-react';

const clients = [
  "Schools", "Colleges", "Offices", "Startups", "Retail Stores", "Government Organizations"
];

export default function BusinessSolutions() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 text-white mb-8">
              <Building2 size={32} />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Enterprise IT Infrastructure Solutions
            </h2>
            
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
              We provide complete printer and laptop infrastructure solutions designed to keep your organization running without interruption.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
              {clients.map((client, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-secondary shrink-0" size={20} />
                  <span className="font-medium text-lg">{client}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="https://wa.me/919491873010" 
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors shadow-lg"
            >
              Discuss Corporate AMC
            </a>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            >
              <img 
                src="/images/inkjet-printer.png" 
                alt="Business printing solutions" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -left-8 bg-white text-slate-900 p-6 rounded-xl shadow-xl max-w-xs border border-slate-100 hidden md:block"
            >
              <div className="flex gap-4 items-center mb-3">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-xl">
                  99%
                </div>
                <div>
                  <p className="font-bold">Uptime Guaranteed</p>
                  <p className="text-sm text-slate-500">With our AMC plans</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
