import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Maximize2, Eye, ExternalLink, Download, Sparkles, CheckCircle } from 'lucide-react';

const highlights = [
  'Full Stack Developer (React, Node.js)',
  'Experience with REST APIs & databases',
  'MERN stack & modern web technologies',
  'Open to full-time & freelance roles',
];

export const ResumeSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resumeUrl = '/Dharmi-resume.pdf';

  return (
    <section id="resume" className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-6 border border-primary/20"
          >
            <FileText size={13} className="animate-pulse" />
            MY RESUME
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tighter"
          >
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Résumé
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed"
          >
            A snapshot of my skills, experience, and achievements as a Full Stack Developer.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left — PDF Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="relative bg-card border border-border rounded-[1.75rem] overflow-hidden shadow-2xl">
              {/* Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 mx-3 h-5 bg-background/60 rounded-full text-[10px] text-muted-foreground flex items-center px-3">
                  Dharmi-resume.pdf
                </div>
              </div>

              {/* PDF Preview iframe */}
              <div className="relative bg-gray-100 dark:bg-gray-900" style={{ height: '420px' }}>
                <iframe
                  src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                  title="Dharmi Patel Resume Preview"
                  className="w-full h-full border-none"
                  loading="lazy"
                />
                {/* Expand overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <motion.button
                    onClick={() => setIsModalOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-white text-sm font-bold shadow-2xl"
                  >
                    <Maximize2 size={16} />
                    View Full Screen
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {/* Title Block */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold border border-emerald-500/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Hire
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-foreground leading-tight mb-3">
                Dharmi Patel
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Full Stack Developer specializing in React, Node.js, and building scalable web applications. Passionate about clean code and modern UI/UX.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={16} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Eye size={16} />
                View Resume
              </motion.button>

              <motion.a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl border border-border text-foreground font-bold text-sm hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <ExternalLink size={16} />
                Open in New Tab
              </motion.a>
            </div>

            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <FileText size={12} />
              PDF opens in browser for viewing — no auto-download
            </p>
          </motion.div>
        </div>
      </div>

      {/* Full-Screen Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            {/* Modal Header */}
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              className="flex items-center justify-between px-6 py-3.5 bg-gray-950/80 border-b border-white/10 shrink-0 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/15 text-primary">
                  <FileText size={16} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Dharmi Patel — Résumé</h3>
                  <p className="text-white/40 text-xs">Full Stack Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={13} />
                  Open in New Tab
                </motion.a>
                <motion.button
                  onClick={() => setIsModalOpen(false)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={18} />
                </motion.button>
              </div>
            </motion.div>

            {/* PDF Iframe */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex-1 min-h-0 bg-gray-900"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={resumeUrl}
                title="Dharmi Patel Resume — Full View"
                className="w-full h-full border-none"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
