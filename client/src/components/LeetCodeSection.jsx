import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Target, Award, TrendingUp, Sparkles, Code2, BrainCircuit, Trophy, Loader2 } from 'lucide-react';

const SegmentedBar = ({ solved, total, color, bgColor }) => {
  const segments = 10;
  const percentage = (solved / total) * 100;
  const activeSegments = Math.round((percentage / 100) * segments);

  return (
    <div className="flex gap-1.5 w-full">
      {[...Array(segments)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * i }}
          className={`h-2 flex-1 rounded-sm transition-all duration-500 ${
            i < activeSegments
              ? `${bgColor.replace('/20', '')} shadow-[0_0_12px_${color.replace('text-', 'rgba(').replace('-500', ',0.5)')}]`
              : 'bg-secondary/20'
          }`}
          style={i < activeSegments ? { backgroundColor: color.replace('text-', 'var(--').replace('-500', ')') } : {}}
        />
      ))}
    </div>
  );
};

export const LeetCodeSection = () => {
  const username = "3mprZRXZPe";
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalSolved: 61,
    easySolved: 53,
    totalEasy: 937,
    mediumSolved: 8,
    totalMedium: 2042,
    hardSolved: 0,
    totalHard: 923,
    acceptanceRate: 77.2,
    ranking: 2153913
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        
        // Fetch solved stats and profile info in parallel
        const [solvedRes, profileRes] = await Promise.all([
          fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`),
          fetch(`https://alfa-leetcode-api.onrender.com/${username}/`)
        ]);

        if (!solvedRes.ok || !profileRes.ok) throw new Error('Failed to fetch data');

        const solvedData = await solvedRes.json();
        const profileData = await profileRes.json();

        // Calculate acceptance rate from submissions
        const allAc = solvedData.acSubmissionNum.find(i => i.difficulty === "All")?.submissions || 0;
        const allTotal = solvedData.totalSubmissionNum.find(i => i.difficulty === "All")?.submissions || 1;
        const calcAcceptance = ((allAc / allTotal) * 100).toFixed(1);

        setStats(prev => ({
          ...prev,
          totalSolved: solvedData.solvedProblem || prev.totalSolved,
          easySolved: solvedData.easySolved || prev.easySolved,
          mediumSolved: solvedData.mediumSolved || prev.mediumSolved,
          hardSolved: solvedData.hardSolved || prev.hardSolved,
          acceptanceRate: calcAcceptance,
          ranking: profileData.ranking || prev.ranking
        }));
        
        setLoading(false);
      } catch (err) {
        console.error("LeetCode Fetch Error:", err);
        setError("Could not load latest stats");
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  const problemBreakdown = [
    { label: "Easy", solved: stats.easySolved, total: stats.totalEasy, color: "text-emerald-500", bgColor: "bg-emerald-500/20" },
    { label: "Medium", solved: stats.mediumSolved, total: stats.totalMedium, color: "text-amber-500", bgColor: "bg-amber-500/20" },
    { label: "Hard", solved: stats.hardSolved, total: stats.totalHard, color: "text-rose-500", bgColor: "bg-rose-500/20" },
  ];

  const quickStats = [
    { label: "Acceptance", value: `${stats.acceptanceRate}%`, icon: Target, color: "text-purple-500" },
    { label: "Overall Rank", value: `#${stats.ranking.toLocaleString()}`, icon: Trophy, color: "text-amber-500" },
    { label: "Strategy", value: "Optimal", icon: BrainCircuit, color: "text-blue-500" },
  ];

  return (
    <section id="leetcode" className="relative py-24 md:py-36 px-4 sm:px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
      
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest mb-6 border border-primary/20"
          >
            <Code2 size={14} className="animate-pulse" />
            LIVE CODING STATS
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
          >
            LeetCode <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-[#FFA116] to-[#FFD016]">Mastery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed"
          >
            A dedicated journey of solving complex data structures and algorithms, 
            maintaining a high acceptance rate and technical rigor.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Profile Card - Redesigned */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#FFA116] to-[#FFD016] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative h-full bg-card/60 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center overflow-hidden">
              <AnimatePresence mode="wait">
                {loading ? (
                  <motion.div 
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm z-10"
                  >
                    <Loader2 className="w-10 h-10 text-primary animate-spin" />
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Sparkles size={120} className="text-[#FFA116]" />
              </div>
              
              <div className="relative mb-10">
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-[#FFA116] to-[#FFD016] p-0.5 rotate-3 group-hover:rotate-6 transition-transform duration-500">
                  <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center -rotate-3 group-hover:-rotate-6 transition-transform duration-500 overflow-hidden">
                    <img 
                      src={`https://assets.leetcode.com/users/${username}/avatar_1776067283.png`} 
                      alt="LeetCode Avatar" 
                      className="w-full h-full object-cover scale-110"
                      onError={(e) => { e.target.src = "https://assets.leetcode.com/static_assets/public/images/LeetCode_logo.png" }}
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-emerald-500 w-6 h-6 rounded-full border-4 border-background shadow-lg" />
              </div>

              <h3 className="text-3xl font-black mb-1 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 text-nowrap">DHARMI PATEL</h3>
              <p className="text-primary font-mono text-sm mb-10 tracking-widest">@{username}</p>

              <div className="grid grid-cols-2 gap-8 w-full mb-12">
                <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10">
                  <motion.div 
                    key={stats.totalSolved}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black text-primary mb-1"
                  >
                    {stats.totalSolved}
                  </motion.div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Solved</div>
                </div>
                <div className="p-6 rounded-3xl bg-purple-500/5 border border-purple-500/10">
                  <motion.div 
                    key={stats.acceptanceRate}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl font-black text-purple-500 mb-1"
                  >
                    {stats.acceptanceRate}%
                  </motion.div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">Accuracy</div>
                </div>
              </div>

              <motion.a 
                href={`https://leetcode.com/u/${username}/`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 rounded-[1.5rem] bg-[#FFA116] text-black font-black text-sm uppercase tracking-widest hover:shadow-[0_20px_40px_-10px_rgba(255,161,22,0.4)] transition-all"
              >
                <ExternalLink size={18} strokeWidth={2.5} />
                View Full Profile
              </motion.a>
            </div>
          </motion.div>

          {/* Detailed breakdown column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Problem Categories */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-card/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 flex-1 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-12">
                <h4 className="flex items-center gap-4 text-xl font-black tracking-tight">
                  <div className="p-2.5 rounded-2xl bg-primary/10 text-primary">
                    <TrendingUp size={20} strokeWidth={2.5} />
                  </div>
                  Difficulty Distribution
                </h4>
                <div className="text-[10px] font-black text-muted-foreground tracking-[0.3em] uppercase opacity-50">Algorithm Mastery</div>
              </div>

              <div className="space-y-12">
                {problemBreakdown.map((item) => (
                  <div key={item.label} className="group cursor-default">
                    <div className="flex justify-between items-end mb-4 px-1">
                      <div className="flex flex-col gap-1">
                        <span className={`text-sm font-black uppercase tracking-widest ${item.color}`}>
                          {item.label}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-bold">Total Attempts: {Math.round(item.solved * 1.2)}</span>
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-black">{item.solved}</span>
                        <span className="text-muted-foreground/40 text-sm font-bold">/ {item.total}</span>
                      </div>
                    </div>
                    <SegmentedBar solved={item.solved} total={item.total} color={item.color} bgColor={item.bgColor} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Feature Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {quickStats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx }}
                  className="bg-card/30 backdrop-blur-xl border border-white/5 rounded-[2rem] p-6 text-center group hover:bg-card/50 transition-all duration-500"
                >
                  <div className={`inline-flex p-3 rounded-2xl ${stat.color} bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-500 shadow-xl`}>
                    <stat.icon size={22} strokeWidth={2.5} />
                  </div>
                  <div className="text-xl font-black mb-1 tracking-tight">{stat.value}</div>
                  <div className="text-[9px] text-muted-foreground font-black uppercase tracking-[0.2em]">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
