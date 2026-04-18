import { ArrowDown, MousePointerClick, Sparkles, Code, Palette, Rocket, Award, Download, Calendar, Shield, Zap, Users, TrendingUp, Briefcase, Mail, Github, Linkedin, Youtube, VolumeX } from "lucide-react";

const LeetCodeIcon = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.902-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835s.513 2.853 1.494 3.835l4.332 4.363c.981.981 2.336 1.494 3.835 1.494s2.853-.513 3.835-1.494l2.697-2.607c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const codeSnippets = [
  "import { FullStackDeveloper } from 'dharmi.dev';",
  "",
  "const developer = new FullStackDeveloper({",
  "  name: 'DHARMI PATEL',",
  "  stack: ['React', 'Next.js', 'Node.js', 'TypeScript'],",
  "  focus: 'Building scalable web applications',",
  "  status: 'Open to new opportunities'",
  "});",
  "",
  "await developer.launchPortfolio();",
  "// Featured: E-commerce, SaaS, Enterprise, Startup MVPs",
  "",
  "developer.connect();",
  "console.log('🚀 Let\\'s build something exceptional together!');"
];

const GITHUB_PHOTO = "https://avatars.githubusercontent.com/u/226024353?v=4";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  useEffect(() => {
    const currentLine = codeSnippets[currentCodeLine];
    if (displayedCode.length < currentLine.length) {
      setTimeout(() => {
        setDisplayedCode(currentLine.slice(0, displayedCode.length + 1));
      }, 30);
    } else {
      setTimeout(() => {
        if (currentCodeLine < codeSnippets.length - 1) {
          setCurrentCodeLine(prev => prev + 1);
          setDisplayedCode("");
        } else {
          setTimeout(() => {
            setCurrentCodeLine(0);
            setDisplayedCode("");
          }, 5000);
        }
      }, 800);
    }
  }, [displayedCode, currentCodeLine]);

  const handleViewResume = () => {
    // Open resume in new tab
    window.open('/Dharmi-resume.pdf', '_blank', 'noopener,noreferrer');
  };

  const socialLinks = [
    { icon: LeetCodeIcon, url: "https://leetcode.com/u/3mprZRXZPe/", color: "text-orange-500 border-orange-500/30 hover:bg-orange-500/10" },
    { icon: Github, url: "https://github.com/Dharmi-456-design", color: "text-foreground border-border hover:bg-accent" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/dharmi-patel-b565322a1/", color: "text-blue-500 border-blue-500/30 hover:bg-blue-500/10" },
    { icon: TwitterIcon, url: "https://x.com/PATEL_DHARMI225", color: "text-sky-500 border-sky-500/30 hover:bg-sky-500/10" },
    { icon: Youtube, url: "https://www.youtube.com/@DharmiPatel-x5l", color: "text-red-500 border-red-500/30 hover:bg-red-500/10" },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/10" ref={ref}>
      
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>
        
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg"
            style={{
              width: Math.random() * 60 + 20 + 'px',
              height: Math.random() * 60 + 20 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              rotate: Math.random() * 360
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 60],
              x: [0, (Math.random() - 0.5) * 40],
              opacity: [0.1, 0.25, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
        
        <motion.div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]" animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 15, repeat: Infinity }} />
        <motion.div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]" animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} transition={{ duration: 20, repeat: Infinity, delay: 2 }} />
      </div>

      <div className="container max-w-7xl mx-auto w-full mt-16 sm:mt-0">
        <motion.div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20" initial="hidden" animate={isInView ? "visible" : "hidden"} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.5 } } }}>
          
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              className="mb-8 flex justify-center lg:justify-start"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}
            >
              <div className="relative w-36 h-36 rounded-full p-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-2xl shadow-primary/25">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-background bg-muted">
                  <img src={GITHUB_PHOTO} alt="Dharmi Patel" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>

            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <span className="block text-foreground">I&apos;m DHARMI PATEL</span>
              <motion.span className="block bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2" animate={{ backgroundPosition: ['0%', '100%', '0%'] }} transition={{ duration: 8, repeat: Infinity }} style={{ backgroundSize: '200% 100%' }}>
                Full-Stack Developer
              </motion.span>
            </motion.h1>

            <motion.p className="text-base sm:text-lg text-muted-foreground mt-6 leading-relaxed max-w-2xl" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              I build <span className="text-primary font-semibold">high-performance web applications</span> that drive business growth. Specializing in React, Node.js, and scalable architecture for startups and enterprises.
            </motion.p>

            <motion.div className="flex justify-center lg:justify-start gap-3 mt-6" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-full border bg-background/70 backdrop-blur-sm transition-all duration-300 shadow-sm ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <motion.a href="#projects" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-primary to-purple-600 text-primary-foreground shadow-lg hover:shadow-xl text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Code className="h-5 w-5" /> 
                <span>View My Work</span>
                <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              
              <motion.a href="#contact" className="group relative overflow-hidden px-8 py-4 rounded-xl font-semibold border border-primary/50 text-foreground hover:border-primary transition-all duration-300 bg-background/80 backdrop-blur-sm text-sm flex items-center justify-center gap-3" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                <Mail className="h-4 w-4" /> 
                <span>Let&apos;s Connect</span>
              </motion.a>
              
            </motion.div>

            <motion.div className="mt-6 text-center lg:text-left" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
              <div className="text-sm text-muted-foreground">
                🚀 <span className="text-primary font-semibold">Available Immediately</span> for Full-Stack and Frontend roles
              </div>
            </motion.div>
          </div>

          <motion.div className="flex-1 flex justify-center lg:justify-end w-full" variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.8 } } }}>
            <div className="relative w-full max-w-md">


              <motion.div className="bg-background/90 border border-border rounded-2xl p-8 backdrop-blur-sm shadow-2xl w-full group hover:shadow-3xl transition-all duration-500" whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="text-sm font-mono font-semibold text-muted-foreground">portfolio.js</div>
                  </div>
                  <div className="w-4 h-4 bg-green-400/20 rounded-full animate-pulse"></div>
                </div>

                <div className="font-mono text-sm bg-primary/5 rounded-lg border border-primary/10 min-h-[280px] flex">
                  <div className="p-6 w-full">
                    <div className="grid grid-cols-1 gap-1 h-full content-start">
                      {codeSnippets.map((line, index) => (
                        <div 
                          key={index}
                          className={`
                            min-h-[20px] flex items-start
                            ${index < currentCodeLine ? 'opacity-100' : 'opacity-0'}
                            ${index === currentCodeLine ? 'opacity-100' : ''}
                            transition-opacity duration-150 ease-in-out
                            ${line.includes("import") ? "text-purple-400 font-semibold" : 
                              line.includes("const") || line.includes("new") ? "text-blue-400 font-semibold" :
                              line.includes("React") || line.includes("Node.js") || line.includes("TypeScript") ? "text-cyan-400" :
                              line.includes("FullStackDeveloper") ? "text-emerald-400 font-semibold" :
                              line.includes("//") ? "text-muted-foreground italic" :
                              line.includes("await") || line.includes("connect") ? "text-yellow-400" :
                              line.includes("'") ? "text-amber-400" : 
                              "text-foreground"}
                          `}
                        >
                          {index < currentCodeLine ? line : ''}
                          {index === currentCodeLine ? (
                            <>
                              {displayedCode}
                              <motion.span 
                                animate={{ opacity: [1, 0, 1] }} 
                                transition={{ duration: 0.8, repeat: Infinity }} 
                                className="ml-1 text-primary inline-block"
                              >
                                ▊
                              </motion.span>
                            </>
                          ) : ''}
                          {line === '' && '‎'}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div className="absolute -bottom-3 -right-3 w-14 h-14 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center border-2 border-background shadow-2xl" animate={{ y: [0, -5, 0], rotate: [0, -2, 0], scale: [1, 1.03, 1] }} transition={{ duration: 4, repeat: Infinity }}>
                  <Code className="h-5 w-5 text-white" />
                </motion.div>
                
                <motion.div className="absolute -top-3 -left-3 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg flex items-center gap-2" initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ delay: 1.5, type: "spring" }}>
                  <Award className="h-4 w-4 text-amber-500" />
                  <span className="text-sm font-semibold text-foreground">Solutions</span>
                </motion.div>
                
                <motion.div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm px-4 py-2 rounded-xl border border-border shadow-lg text-center" initial={{ scale: 0, y: 20 }} animate={{ scale: 1, y: 0 }} transition={{ delay: 2, type: "spring" }}>
                  <div className="text-xs font-mono text-muted-foreground">Built with</div>
                  <div className="text-sm font-bold text-foreground">Modern Tech</div>
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: [0, 1, 1, 0], y: [0, 6, 0, -6] }} transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5 }}>
        <motion.div className="text-xs text-primary mb-3 flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-border shadow-lg" whileHover={{ scale: 1.05 }}>
          <MousePointerClick className="h-3 w-3" />
          <span>Explore Technical Portfolio</span>
        </motion.div>
        <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-5 h-8 border-2 border-primary/30 rounded-full flex justify-center">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="w-1 h-2 bg-primary rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
};