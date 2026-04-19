import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, Code, Download, Calendar, Sparkles, Target, User, Github, Linkedin, Twitter, Youtube, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const GITHUB_PHOTO = 'https://avatars.githubusercontent.com/u/226024353?v=4';

// const stats = [
//   { number: 15, suffix: '+', label: 'Projects', icon: Briefcase },
//   { number: 1,  suffix: '+', label: 'Years Exp', icon: Calendar },
//   { number: 99, suffix: '%', label: 'Success Rate', icon: Target },
//   { number: 10, suffix: '+', label: 'Happy Clients', icon: User },
// ];

const skills = ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Node.js', 'Git & GitHub', 'Figma', 'Vite'];

const socialLinks = [
  { Icon: Github,   href: 'https://github.com/Dharmi-456-design',                     label: 'GitHub' },
  { Icon: Linkedin, href: 'https://www.linkedin.com/in/dharmi-patel-b565322a1/',       label: 'LinkedIn' },
  { Icon: Twitter,  href: 'https://x.com/PATEL_DHARMI225',                             label: 'Twitter' },
  { Icon: Youtube,  href: 'https://www.youtube.com/@DharmiPatel-x5l',                  label: 'YouTube' },
  // {Icon: Leetcode, href: 'https://leetcode.com/u/3mprZRXZPe/', label: 'Leetcode'}
];

/* Animated counter hook */
function useCounter(target, inView) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);
  return count;
}

function StatCard({ item, inView, index }) {
  const count = useCounter(item.number, inView);
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
      className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group"
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-4 h-4" />
      </div>
      <div className="text-2xl font-bold text-foreground">{count}{item.suffix}</div>
      <div className="text-xs text-muted-foreground tracking-wide">{item.label}</div>
    </motion.div>
  );
}

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const tabs = {
    personal:     "I&apos;m a passionate Full-Stack Developer with a strong foundation in both frontend and backend technologies. My journey in web development started with curiosity about how things work on the internet, and has evolved into a professional pursuit of creating elegant, efficient, and user-friendly applications.",
    professional: "With 1+ year of full-stack development experience, I&apos;ve delivered 15+ successful projects using modern technologies. I specialize in scalable architecture, clean code, and performance optimization to consistently exceed client expectations.",
    approach:     "I believe in user-centered design and clean, maintainable code. My agile-driven process emphasizes collaboration, continuous improvement, and thorough testing to ensure every product ships with confidence.",
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Dharmi_Patel_Resume.pdf';
    link.download = 'Dharmi_Patel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container mx-auto max-w-7xl">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4 animate-pulse" />
            ABOUT ME
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Crafting Digital  <span className="text-primary">Experiences</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Turning ideas into reality through code, design, and determination.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ───────── LEFT — Photo Column ───────── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center justify-center relative"
          >
            <div className="relative group">
              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-4 rounded-full border border-dashed border-primary/30 opacity-50 group-hover:opacity-100 transition-opacity"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-8 rounded-full border border-dashed border-secondary/20 opacity-30 group-hover:opacity-60 transition-opacity"
              />

              {/* Main Photo Container */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-br from-primary via-purple-500 to-secondary shadow-2xl shadow-primary/20 overflow-hidden"
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-muted relative group-hover:scale-105 transition-transform duration-700">
                  <img
                    src={GITHUB_PHOTO}
                    alt="Dharmi Patel"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Overlay for depth */}
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </motion.div>

              {/* Floating Badge (Optional decorative element) */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-4 bg-background/90 backdrop-blur-md border border-border p-4 rounded-2xl shadow-xl hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold tracking-widest uppercase text-foreground">Open to roles</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ───────── RIGHT — Content Column ───────── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            className="space-y-8"
          >
            {/* Name / title */}
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-1">DHARMI PATEL</h3>
              <p className="text-primary font-semibold text-lg">Full-Stack Developer & UI Designer</p>
            </div>

            {/* Tab switcher */}
            <div className="bg-card/50 border border-border rounded-2xl overflow-hidden backdrop-blur-xl">
              <div className="flex border-b border-border">
                {['personal', 'professional', 'approach'].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 text-sm font-medium transition-all duration-300 relative ${
                      activeTab === tab ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {activeTab === tab && (
                      <motion.div layoutId="tabIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="p-6 text-muted-foreground leading-relaxed text-sm sm:text-base"
                >
                  {tabs[activeTab]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Skills chips */}
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-3">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium hover:bg-primary/20 transition-colors duration-200 cursor-default"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>


            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/25"
              >
                Hire Me <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
