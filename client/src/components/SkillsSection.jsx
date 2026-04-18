import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

// Import your images
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import sassIcon from "@/assets/icons/saas.png";
import jsIcon from "@/assets/icons/javascript.png";
import tsIcon from "@/assets/icons/typescript.png";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/nextjs.png";
import nodejsIcon from "@/assets/icons/nodejs.png";
import expressIcon from "@/assets/icons/express.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import postgresqlIcon from "@/assets/icons/postgresql.png";
import graphqlIcon from "@/assets/icons/graphql.png";
import javaIcon from "@/assets/icons/java.png";
import pythonIcon from "@/assets/icons/python.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import dockerIcon from "@/assets/icons/docker.png";
import firebaseIcon from "@/assets/icons/firebase.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import clearkIcon from "@/assets/icons/cleark.png";
import SQLIcon from "@/assets/icons/sql.png";
import MySQLIcon from "@/assets/icons/mysql.png";

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  sass: sassIcon,
  javascript: jsIcon,
  typescript: tsIcon,
  react: reactIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  mongodb: mongodbIcon,
  postgresql: postgresqlIcon,
  graphql: graphqlIcon,
  java: javaIcon,
  python: pythonIcon,
  git: gitIcon,
  github: githubIcon,
  docker: dockerIcon,
  firebase: firebaseIcon,
  vscode: vscodeIcon,
  cleark: clearkIcon,
  sql: SQLIcon,
  mysql: MySQLIcon,
  tailwind: "https://skillicons.dev/icons?i=tailwind",
  redux: "https://skillicons.dev/icons?i=redux",
  vite: "https://skillicons.dev/icons?i=vite",
  figma: "https://skillicons.dev/icons?i=figma",
  postman: "https://skillicons.dev/icons?i=postman",
  vercel: "https://skillicons.dev/icons?i=vercel",
  linux: "https://skillicons.dev/icons?i=linux"
};

const skillModules = [
  {
    id: 1,
    title: "FRONTEND",
    short: "FRO",
    skills: [
      { name: "REACT", icon: "react", color: "from-cyan-400 to-blue-500" },
      { name: "JAVASCRIPT", icon: "javascript", color: "from-yellow-400 to-amber-500" },
      { name: "HTML5", icon: "html", color: "from-orange-400 to-red-500" },
      { name: "CSS3", icon: "css", color: "from-blue-400 to-indigo-500" },
      { name: "TAILWIND CSS", icon: "tailwind", color: "from-cyan-400 to-blue-400" },
      { name: "REDUX", icon: "redux", color: "from-purple-400 to-indigo-600" },
    ]
  },
  {
    id: 2,
    title: "BACKEND",
    short: "BAC",
    skills: [
      { name: "NODE.JS", icon: "nodejs", color: "from-green-400 to-emerald-600" },
      { name: "EXPRESS", icon: "express", color: "from-gray-400 to-gray-600" },
      { name: "MONGODB", icon: "mongodb", color: "from-green-500 to-emerald-700" },
      { name: "POSTGRESQL", icon: "postgresql", color: "from-blue-500 to-indigo-700" },
    ]
  },
  {
    id: 3,
    title: "TOOLS & OTHERS",
    short: "TOO",
    skills: [
      { name: "GIT", icon: "git", color: "from-orange-500 to-red-600" },
      { name: "VITE", icon: "vite", color: "from-yellow-300 to-orange-400" },
      { name: "FIGMA", icon: "figma", color: "from-purple-400 to-pink-500" },
      { name: "POSTMAN", icon: "postman", color: "from-orange-400 to-red-400" },
      { name: "VERCEL", icon: "vercel", color: "from-gray-700 to-black" },
      { name: "LINUX", icon: "linux", color: "from-yellow-400 to-gray-700" },
    ]
  }
];

const SkillTile = ({ skill, index }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    whileHover={{ 
      y: -5,
      backgroundColor: "rgba(255, 255, 255, 0.08)",
      borderColor: "rgba(var(--primary-rgb), 0.5)",
      boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
    }}
    className="group flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl p-3 px-4 transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
  >
    {/* Animated background glow on hover */}
    <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r ${skill.color} transition-opacity duration-300`} />
    
    <div className="relative z-10 w-6 h-6 flex items-center justify-center">
      <img 
        src={iconImages[skill.icon]} 
        alt={skill.name} 
        className="w-full h-full object-contain filter transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" 
      />
    </div>
    <span className="relative z-10 text-[11px] md:text-xs font-black tracking-[0.1em] text-white/70 group-hover:text-white transition-colors uppercase">
      {skill.name}
    </span>
  </motion.div>
);

const ModuleCard = ({ module, moduleIdx }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: moduleIdx * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      className="relative bg-gradient-to-br from-[#16161a] to-[#0d0d0f] border border-white/[0.05] rounded-[2.5rem] p-8 md:p-12 overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] group backdrop-blur-3xl"
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Background Hero text */}
      <div className="absolute -top-4 -right-2 text-[120px] font-black text-white/[0.02] select-none leading-none tracking-tighter group-hover:text-white/[0.04] transition-all duration-700">
        {module.short}
      </div>

      {/* Module Header */}
      <div className="relative z-10 space-y-2 mb-12">
        <div className="flex items-center gap-3">
          <div className="h-[2px] w-8 bg-primary/40 group-hover:w-16 transition-all duration-700" />
          <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase">
            MODULE {module.id}
          </span>
        </div>
        <h3 className="text-4xl font-black text-white tracking-tighter leading-tight uppercase group-hover:translate-x-1 transition-transform duration-500">
          {module.title}
        </h3>
      </div>

      {/* Skills Inventory Grid */}
      <div className="grid grid-cols-2 gap-4 relative z-10">
        {module.skills.map((skill, idx) => (
          <SkillTile key={idx} skill={skill} index={idx} />
        ))}
      </div>

      {/* Bottom Interface Detail */}
      <div className="absolute bottom-6 right-10 flex flex-col items-end gap-1 opacity-20 group-hover:opacity-50 transition-opacity duration-700">
          <div className="flex gap-1">
            <div className="w-1 h-1 rounded-full bg-primary" />
            <div className="w-4 h-1 rounded-full bg-primary/40" />
          </div>
          <div className="w-12 h-[1px] bg-primary/20" />
      </div>
    </motion.div>
  );
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden bg-[#0a0a0c]">
      {/* Dynamic Grid Background Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {skillModules.map((module, moduleIdx) => (
            <ModuleCard key={module.id} module={module} moduleIdx={moduleIdx} />
          ))}
        </div>
      </div>
      
      {/* Cinematic Ambient Glows */}
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[160px] animate-pulse -z-10" />
      <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 rounded-full blur-[160px] animate-pulse duration-[8s] -z-10" />
    </section>
  );
};