import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Award, Zap, Github, Star } from 'lucide-react';

const achievements = [
  {
    title: 'LeetCode Problem Solver',
    description: 'Solved 61 problems on LeetCode with a 77.2% acceptance rate — 53 Easy and 8 Medium across Data Structures & Algorithms.',
    icon: Code2,
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20',
    stat: '61 Solved',
    statColor: 'text-orange-500',
  },
  {
    title: 'Hackathon Participant',
    description: 'Participated in 2 hackathons — DAU Quantum Coders and ArtPark CodeForge (IISc Bangalore) — building functional full-stack prototypes under pressure.',
    icon: Trophy,
    color: 'text-amber-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    stat: '2 Hackathons',
    statColor: 'text-amber-500',
  },
  {
    title: 'GitHub Copilot Certified',
    description: 'Earned the GitHub Copilot certificate — leveraging AI-assisted development to accelerate coding workflows and improve code quality.',
    icon: Github,
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    stat: 'Certified',
    statColor: 'text-blue-500',
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-500 text-xs font-bold tracking-widest mb-6 border border-amber-500/20"
          >
            <Star size={13} className="animate-pulse" />
            ACHIEVEMENTS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tighter"
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
              Achievements
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed"
          >
            Real milestones earned through consistent effort, problem-solving, and continuous learning.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.bgColor} rounded-[1.75rem] blur-sm opacity-0 group-hover:opacity-60 transition-all duration-500`} />
              <div className={`relative h-full p-8 rounded-[1.5rem] bg-card border ${item.borderColor} shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col`}>
                {/* Icon + Stat */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl ${item.bgColor} ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={28} />
                  </div>
                  <span className={`text-sm font-black ${item.statColor} px-3 py-1 rounded-full ${item.bgColor} border ${item.borderColor}`}>
                    {item.stat}
                  </span>
                </div>

                <h3 className="text-lg font-black text-foreground mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Bottom accent line */}
                <div className={`mt-6 h-0.5 w-16 ${item.bgColor.replace('/10', '')} rounded-full opacity-40 group-hover:w-full group-hover:opacity-70 transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
