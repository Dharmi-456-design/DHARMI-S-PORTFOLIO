import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Palette, Maximize2, X, Sparkles, Eye, Figma } from 'lucide-react';

const figmaDesigns = [
  {
    id: 1,
    title: 'Invoicing Tool UI',
    subtitle: 'Node 36-8',
    description: 'A polished Figma design showcasing modern interface design principles, color systems, and component-based UI architecture.',
    tags: ['UI Design', 'UX', 'Components'],
    figmaUrl: 'https://www.figma.com/design/Xv1ZUE3iEw4Y2r0D3eEEsM/Untitled?node-id=36-8&t=kMTuScKuwYvJW7Tg-1',
    embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/Xv1ZUE3iEw4Y2r0D3eEEsM/Untitled?node-id=36-8',
    type: 'Interface Design',
    accent: 'from-violet-500/30 to-purple-600/30',
    dot: 'bg-violet-500',
  },
  {
    id: 2,
    title: 'Landing Page UI',
    subtitle: 'Node 1-22',
    description: 'A sleek landing page Figma design featuring modern hero layouts, compelling call-to-action sections, and a refined visual hierarchy for maximum impact.',
    tags: ['Landing Page', 'Hero Design', 'Visual Hierarchy'],
    figmaUrl: 'https://www.figma.com/design/Xv1ZUE3iEw4Y2r0D3eEEsM/Untitled?node-id=1-22&t=kMTuScKuwYvJW7Tg-1',
    embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/Xv1ZUE3iEw4Y2r0D3eEEsM/Untitled?node-id=1-22',
    type: 'Landing Page',
    accent: 'from-blue-500/30 to-cyan-600/30',
    dot: 'bg-blue-500',
  },
  {
    id: 3,
    title: 'Dashboard UI',
    subtitle: 'Node 311-31',
    description: 'A feature-rich dashboard Figma design with data visualization components, sidebar navigation, and a clean modular layout built for productivity and clarity.',
    tags: ['Dashboard', 'Data Viz', 'Navigation'],
    figmaUrl: 'https://www.figma.com/design/Xv1ZUE3iEw4Y2r0D3eEEsM/Untitled?node-id=311-31&t=kMTuScKuwYvJW7Tg-1',
    embedUrl: 'https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/Xv1ZUE3iEw4Y2r0D3eEEsM/Untitled?node-id=311-31',
    type: 'Dashboard',
    accent: 'from-emerald-500/30 to-teal-600/30',
    dot: 'bg-emerald-500',
  },
];

export const FigmaDesigns = () => {
  const [activeDesign, setActiveDesign] = useState(null);
  const [loadedMap, setLoadedMap] = useState({});

  const markLoaded = (id) => setLoadedMap((prev) => ({ ...prev, [id]: true }));

  return (
    <section id="figma" className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-primary/3 to-background" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-6 border border-primary/20"
          >
            <Palette size={13} className="animate-pulse" />
            FIGMA DESIGNS
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tighter"
          >
            UI/UX{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
              Showcase
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-muted-foreground max-w-lg mx-auto text-base leading-relaxed"
          >
            Crafting intuitive, accessible, and visually stunning interfaces — where design meets purpose.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {figmaDesigns.map((design, index) => (
            <motion.div
              key={design.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">

                {/* ── Embed Preview ── */}
                <div className="relative bg-gray-950 overflow-hidden" style={{ aspectRatio: '16/10' }}>

                  {/* Browser chrome bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900/90 backdrop-blur z-10 flex items-center px-3 gap-2 border-b border-white/5 shrink-0">
                    <div className="flex gap-1.5 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 h-4 mx-3 bg-white/5 rounded-full text-[9px] text-white/30 flex items-center px-2 truncate">
                      figma.com · {design.subtitle}
                    </div>
                  </div>

                  {/* Iframe */}
                  <div className="absolute inset-0 top-8">
                    <iframe
                      title={design.title}
                      src={design.embedUrl}
                      className="w-full h-full border-none"
                      loading="lazy"
                      onLoad={() => markLoaded(design.id)}
                      allowFullScreen
                    />
                    {/* Shimmer */}
                    <AnimatePresence>
                      {!loadedMap[design.id] && (
                        <motion.div
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4 }}
                          className="absolute inset-0 bg-gray-950 flex flex-col items-center justify-center gap-3 z-10"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
                            className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent"
                          />
                          <span className="text-muted-foreground text-xs font-medium">Loading…</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 top-8 bg-black/0 group-hover:bg-black/55 transition-all duration-400 z-20 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
                    <motion.button
                      onClick={() => setActiveDesign(design)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-bold shadow-xl hover:bg-primary/90 transition-colors"
                    >
                      <Eye size={13} />
                      Full Preview
                    </motion.button>
                    <motion.a
                      href={design.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur text-white text-xs font-bold border border-white/20 hover:bg-white/25 transition-colors"
                    >
                      <ExternalLink size={13} />
                      Open Figma
                    </motion.a>
                  </div>
                </div>

                {/* ── Card Body ── */}
                <div className="p-5 flex flex-col flex-1">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-base font-bold text-foreground leading-tight">{design.title}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5 font-mono">{design.subtitle}</p>
                    </div>
                    <span className="shrink-0 ml-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold border border-primary/20">
                      <span className={`w-1.5 h-1.5 rounded-full ${design.dot}`} />
                      {design.type}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">
                    {design.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {design.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-secondary text-muted-foreground text-[10px] font-semibold border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <motion.button
                      onClick={() => setActiveDesign(design)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-all duration-200"
                    >
                      <Eye size={13} />
                      Preview
                    </motion.button>
                    <motion.a
                      href={design.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-border text-foreground text-xs font-bold hover:border-primary hover:bg-primary/5 transition-all duration-200"
                    >
                      <ExternalLink size={13} />
                      Open in Figma
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Full-Screen Modal ── */}
      <AnimatePresence>
        {activeDesign && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-xl"
            onClick={() => setActiveDesign(null)}
          >
            {/* Modal header */}
            <motion.div
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              className="flex items-center justify-between px-6 py-3.5 bg-gray-950/80 border-b border-white/10 z-10 shrink-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/15 text-primary">
                  <Palette size={16} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">{activeDesign.title}</h3>
                  <p className="text-white/40 text-xs font-mono">{activeDesign.subtitle} · {activeDesign.type}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <motion.a
                  href={activeDesign.figmaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-all"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink size={13} />
                  Open in Figma
                </motion.a>
                <motion.button
                  onClick={() => setActiveDesign(null)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                >
                  <X size={18} />
                </motion.button>
              </div>
            </motion.div>

            {/* Iframe */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 min-h-0"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                title={`${activeDesign.title} · Full Preview`}
                src={activeDesign.embedUrl}
                className="w-full h-full border-none"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
