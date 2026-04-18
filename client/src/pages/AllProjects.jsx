import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github, Star, Code, Eye, Play, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import { staggerContainer, staggerItem } from '../animations';

const categoryColors = {
  "Frontend": "from-blue-500/20 to-cyan-600/20 text-blue-600 border-blue-500/30",
  "Full Stack": "from-emerald-500/20 to-teal-600/20 text-emerald-600 border-emerald-500/30",
  "Games": "from-purple-500/20 to-indigo-600/20 text-purple-600 border-purple-500/30",
  "Clones": "from-rose-500/20 to-pink-600/20 text-rose-600 border-rose-500/30"
};

const ProjectHighlights = ({ highlights }) => (
  <div className="space-y-2">
    {highlights?.map((highlight, index) => (
      <div key={index} className="flex items-center gap-2 text-sm">
        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        <span className="text-muted-foreground">{highlight}</span>
      </div>
    ))}
  </div>
);

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-white hover:bg-primary px-4 py-2 rounded-full transition-all border border-primary/50 mb-8 self-start">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">All</span> Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            A complete list of my projects, experiments, and open-source contributions.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          variants={staggerContainer(0.12, 0)}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div key={project.id || index} variants={staggerItem} className="group h-full">
              <div className="relative bg-background border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* Image/Video Section */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                        project.status === "Live" 
                          ? "bg-emerald-500/20 text-emerald-600 border border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-600 border border-amber-500/30"
                      }`}>
                        {project.status}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${categoryColors[project.category] || "bg-primary/10 text-primary border-primary/20"}`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Actions */}
                    <motion.div 
                      className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {/* YouTube Demo Link */}
                      {project.youtubeUrl && (
                        <motion.a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full backdrop-blur-sm border bg-red-500/80 text-white border-red-500/30 hover:bg-red-500 transition-all duration-300"
                          title="Watch Demo"
                        >
                          <Play size={20} />
                        </motion.a>
                      )}
                      
                      {/* Code Button */}
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                          project.githubUrl === "#" 
                            ? "bg-gray-500/50 text-gray-300 border-gray-500/30 cursor-not-allowed"
                            : "bg-white/20 text-white border-white/30 hover:bg-white/30"
                        }`}
                        onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                        title="View Code"
                      >
                        <Code size={20} />
                      </motion.a>

                      {/* Postman API Docs */}
                      {project.postmanUrl && (
                        <motion.a
                          href={project.postmanUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 rounded-full backdrop-blur-sm border bg-orange-500/80 text-white border-orange-500/30 hover:bg-orange-500 transition-all duration-300"
                          title="API Documentation"
                        >
                          <FileText size={20} />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  {project.highlights && (
                    <div className="mb-4">
                      <ProjectHighlights highlights={project.highlights} />
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                        project.demoUrl === "#"
                          ? "bg-muted text-muted-foreground cursor-not-allowed border border-border"
                          : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                      onClick={(e) => project.demoUrl === "#" && e.preventDefault()}
                    >
                      <Eye size={16} />
                      {project.demoUrl === "#" ? "Coming Soon" : "Live Demo"}
                    </a>
                    
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-medium border transition-all duration-300 ${
                        project.githubUrl === "#"
                          ? "bg-muted text-muted-foreground cursor-not-allowed border-border"
                          : "bg-background text-foreground border-border hover:border-primary hover:bg-primary/5"
                      }`}
                      onClick={(e) => project.githubUrl === "#" && e.preventDefault()}
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>

                {/* Accent Border */}
                <div className={`h-1 bg-gradient-to-r ${project.accentColor || 'from-gray-500 to-gray-600'}`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;
