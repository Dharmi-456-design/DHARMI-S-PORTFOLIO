import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Users, Star, GitFork, MapPin, Link as LinkIcon, Calendar, ArrowLeft, ArrowUpRight, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GithubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const username = "Dharmi-456-design";

  const targetRepos = [
    "ArtPark_CodeForge_Hackathon",
    "DAU-Quantum_coders-",
    "CodingGita_LMS",
    "GEN-Z",
    "smartfactory",
    "OdooXGujarat_Hackathon"
  ];

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const profileRes = await fetch(`https://api.github.com/users/${username}`);
        if (profileRes.ok) {
          const profileData = await profileRes.json();
          setProfile(profileData);
        }

        // Fetch each target repo individually to ensure specific order and projects
        const repoData = await Promise.all(
          targetRepos.map(async (repoName) => {
            try {
              const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
              if (res.ok) return await res.json();
              return null;
            } catch (err) {
              console.error(`Error fetching repo ${repoName}:`, err);
              return null;
            }
          })
        );

        // Filter out any failed fetches
        setRepos(repoData.filter(repo => repo !== null));
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [username]);

  const stats = [
    { label: "Public Repos", value: profile?.public_repos || 0, icon: <Github className="h-5 w-5 text-emerald-500" /> },
    { label: "Followers", value: profile?.followers || 0, icon: <Users className="h-5 w-5 text-blue-500" /> },
    { label: "Following", value: profile?.following || 0, icon: <Users className="h-5 w-5 text-purple-500" /> },
    { label: "Gists", value: profile?.public_gists || 0, icon: <Activity className="h-5 w-5 text-amber-500" /> },
  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="max-w-5xl mx-auto">
        <motion.button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-secondary/80 text-secondary-foreground hover:bg-secondary transition-colors border border-border backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ArrowLeft size={16} />
          Go Back
        </motion.button>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="space-y-8">
            {/* Header Profile Section */}
            <motion.div 
              className="bg-card border border-border rounded-3xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-r from-primary to-purple-600">
                    <img 
                      src={profile?.avatar_url} 
                      alt={profile?.name || username} 
                      className="w-full h-full rounded-full object-cover border-4 border-background"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-background p-2 rounded-full border border-border shadow-sm">
                    <Github className="w-6 h-6 text-foreground" />
                  </div>
                </div>

                <div className="flex-1">
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    {profile?.name || username}
                  </h1>
                  <p className="text-muted-foreground mb-4 text-lg">
                    {profile?.bio || "Passionate UI/UX Designer & Full Stack Developer"}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    {profile?.location && (
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {profile.location}
                      </div>
                    )}
                    {profile?.blog && (
                      <a href={profile.blog.startsWith('http') ? profile.blog : `https://${profile.blog}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary transition-colors">
                        <LinkIcon size={16} />
                        {profile.blog}
                      </a>
                    )}
                    {profile?.created_at && (
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        Joined {new Date(profile.created_at).getFullYear()}
                      </div>
                    )}
                  </div>
                </div>

                <a 
                  href={profile?.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all shrink-0"
                >
                  <Github size={18} />
                  Follow on GitHub
                </a>
              </div>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                >
                  <div className="p-3 bg-secondary rounded-xl">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* GitHub Readme Stats Images */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center shadow-sm">
                <h3 className="text-xl font-bold mb-6 w-full text-foreground flex items-center gap-2">
                  <Activity size={20} className="text-primary"/> GitHub Stats
                </h3>
                <img 
                  src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical&hide_border=true&bg_color=00000000`} 
                  alt="GitHub Stats" 
                  className="w-full max-w-[400px]"
                />
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 flex flex-col items-center shadow-sm">
                <h3 className="text-xl font-bold mb-6 w-full text-foreground flex items-center gap-2">
                  <Star size={20} className="text-amber-500" /> Top Languages
                </h3>
                <img 
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=00000000`} 
                  alt="Top Languages" 
                  className="w-full max-w-[400px]"
                />
              </div>
            </motion.div>



            {/* Recent Repositories */}
            {repos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">Recent Repositories</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {repos.map((repo, i) => (
                    <motion.a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all shadow-sm flex flex-col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Github className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {repo.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-2">
                        {repo.description || "No description provided."}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t border-border mt-auto">
                        <div className="flex items-center gap-4">
                          {repo.language && (
                            <div className="flex items-center gap-1.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                              {repo.language}
                            </div>
                          )}
                          <div className="flex items-center gap-1.5">
                            <Star size={14} />
                            {repo.stargazers_count}
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}

          </div>
        )}
      </div>
    </div>
  );
};

export default GithubProfile;
