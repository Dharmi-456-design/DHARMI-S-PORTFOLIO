import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Target, Award, Github, ExternalLink, Zap, Youtube } from 'lucide-react';

const hackathons = [
  {
    title: 'DAU Quantum Coders',
    organizer: 'Collaborative Team Initiative',
    problem: 'Implement complex programming solutions and strengthen logical problem-solving skills within a team environment.',
    solution: 'Developed a comprehensive project demonstrating hands-on coding experience and application of core programming concepts.',
    outcome: 'Successfully implemented functional solutions through teamwork and technical collaboration.',
    date: '2026',
    github: 'https://github.com/Dharmi-456-design/DAU-Quantum_coders-',
    live: 'https://tic-tech-toe-ecommerce-website.vercel.app/cart',
    youtubeUrl: 'https://www.youtube.com/@DharmiPatel-x5l',
  },
  {
    title: 'ArtPark CodeForge Hackathon',
    organizer: 'IISc Bangalore',
    problem: 'Solving real-world challenges using modern technologies, with a focus on usability, scalability, and innovation.',
    solution: 'Developed a fully functional prototype designed to address specific real-world problems through innovative technology applications.',
    outcome: 'Completed a functional prototype ready for real-world deployment and scalability testing.',
    date: '2025',
    github: 'https://github.com/Dharmi-456-design/ArtPark_CodeForge_Hackathon',
    live: 'https://art-park-code-forge-hackathon-virid.vercel.app/',
    youtubeUrl: 'https://www.youtube.com/@DharmiPatel-x5l',
  }
];

export const Hackathons = () => {
  return (
    <section id="hackathons" className="py-20 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-500">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-4xl font-bold tracking-tight">Hackathons</h2>
              <p className="text-muted-foreground mt-1">Innovation & Collaborative Solvers</p>
            </div>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-amber-500/20 to-transparent hidden md:block" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((hack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-[2rem] bg-card border border-border hover:border-primary/50 transition-all duration-500 shadow-xl overflow-hidden"
            >
              {/* Card Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-primary opacity-30" />
              
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {hack.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary/80">{hack.organizer}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span>{hack.date}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  {hack.youtubeUrl && (
                    <motion.a
                      href={hack.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                      title="Watch Demo Video"
                    >
                      <Youtube className="w-5 h-5" />
                    </motion.a>
                  )}
                  <motion.a
                    href={hack.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl bg-muted border border-border text-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href={hack.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2.5 rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 p-1.5 rounded-lg bg-red-500/10 text-red-500">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Problem Statement</h4>
                    <p className="text-foreground/90 leading-relaxed text-sm">{hack.problem}</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Solution Implemented</h4>
                    <p className="text-foreground/90 leading-relaxed text-sm">{hack.solution}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 shrink-0 p-1.5 rounded-lg bg-amber-500/10 text-amber-500">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Outcomes</h4>
                    <p className="text-foreground/90 leading-relaxed text-sm">{hack.outcome}</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Corner Icon */}
              <div className="absolute -bottom-6 -right-6 text-primary flex opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500">
                <Trophy size={140} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
