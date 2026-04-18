import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { certificates } from '../data/certificatesData';
import { staggerContainer, staggerItem, viewport } from '../animations';

export const Certificates = () => {
  const INITIAL_COUNT = 2;
  const visibleCertificates = certificates.slice(0, INITIAL_COUNT);

  return (
    <section id="certificates" className="relative overflow-hidden py-20 text-text">
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-6">
        <h2 className="section-title">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex">
            {'Certificates'.split('').map((char, index) => (
              <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
            ))}
          </motion.span>
        </h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="w-24 h-1 bg-secondary mb-16 origin-left"
        ></motion.div>

        <motion.div 
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {visibleCertificates.map((cert, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="certificate-card group"
            >
              <div className="relative bg-surface rounded-xl overflow-hidden border border-gray-700 hover:border-secondary transition-all duration-300 h-full flex flex-col md:flex-row shadow-lg shadow-black/30">
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-gray-700">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-2 left-2 bg-primary rounded-full p-2">
                    <Award className="text-white w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 md:w-2/3 flex flex-col">
                  <div className="mb-1 text-sm text-text-muted">
                    {cert.issuer} • {cert.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-secondary">{cert.title}</h3>
                  <p className="mb-4 text-sm text-text-secondary flex-1">
                    {cert.description}
                  </p>
                  
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:underline magnetic-hover mt-auto">
                      <ExternalLink size={16} /> View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {certificates.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-12">
            <Link 
              to="/all-certificates" 
              className="btn group flex items-center gap-2 magnetic-hover bg-primary/10 border-primary/50 text-primary hover:bg-primary hover:text-white"
            >
              <span>View All Certificates</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;
