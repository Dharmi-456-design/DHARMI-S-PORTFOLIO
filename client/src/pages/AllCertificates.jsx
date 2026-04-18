import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { certificates } from '../data/certificatesData';
import { staggerContainer, staggerItem, viewport } from '../animations';

const AllCertificates = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-white hover:bg-primary px-4 py-2 rounded-full transition-all border border-primary/50 mb-8 self-start">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">All</span> Certificates
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A comprehensive collection of my certifications and achievements.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certificates.map((cert, index) => (
            <motion.div 
              key={index}
              variants={staggerItem}
              className="group"
            >
              <div className="relative bg-surface rounded-xl overflow-hidden border border-gray-700 hover:border-secondary transition-all duration-300 h-full flex flex-col md:flex-row shadow-lg shadow-black/30 bg-card">
                <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-gray-700">
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-2 left-2 bg-primary rounded-full p-2">
                    <Award className="text-white w-5 h-5" />
                  </div>
                </div>
                <div className="p-6 md:w-2/3 flex flex-col">
                  <div className="mb-1 text-sm text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-primary">{cert.title}</h3>
                  <p className="mb-4 text-sm text-foreground flex-1">
                    {cert.description}
                  </p>
                  
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline hover:text-primary transition-colors mt-auto">
                      <ExternalLink size={16} /> View Certificate
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AllCertificates;
