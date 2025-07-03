import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import { motion } from "framer-motion";
import { useCommunityStatsContext, CommunityStatsProvider } from "@site/src/lib/statsProvider";
import SlotCounter from "react-slot-counter";
import "./dashboard.css";

interface LeaderboardEntry {
  rank: number;
  name: string;
  avatar: string;
  contributions: number;
  repositories: number;
  achievements: string[];
  github_url: string;
}

interface DashboardStats {
  totalContributors: number;
  totalRepositories: number;
  totalStars: number;
  totalForks: number;
  topContributors: LeaderboardEntry[];
}

const Dashboard: React.FC = () => {
  const {
    githubStarCount,
    githubStarCountText,
    githubContributorsCount,
    githubContributorsCountText,
    githubForksCount,
    githubForksCountText,
    githubReposCount,
    githubReposCountText,
    loading,
    error,
  } = useCommunityStatsContext();

  const [dashboardStats, setDashboardStats] = useState<DashboardStats>({
    totalContributors: 0,
    totalRepositories: 0,
    totalStars: 0,
    totalForks: 0,
    topContributors: [],
  });

  // Mock data for demonstration - in real implementation, this would come from API
  const mockLeaderboardData: LeaderboardEntry[] = [
    {
      rank: 1,
      name: "Sanjay Viswanathan",
      avatar: "https://avatars.githubusercontent.com/u/79542825?v=4",
      contributions: 1247,
      repositories: 15,
      achievements: ["🏆 Top Contributor", "⭐ 1000+ Stars", "🎯 Maintainer"],
      github_url: "https://github.com/sanjay-kv",
    },
    {
      rank: 2,
      name: "Vansh Codes",
      avatar: "https://avatars.githubusercontent.com/u/79542825?v=4",
      contributions: 982,
      repositories: 8,
      achievements: ["🚀 Rising Star", "💡 Bug Hunter", "📚 Documentation"],
      github_url: "https://github.com/vansh-codes",
    },
    {
      rank: 3,
      name: "Community Member",
      avatar: "https://avatars.githubusercontent.com/u/79542825?v=4",
      contributions: 756,
      repositories: 6,
      achievements: ["🎨 UI/UX Expert", "🔧 Feature Builder"],
      github_url: "https://github.com/example",
    },
    {
      rank: 4,
      name: "Open Source Dev",
      avatar: "https://avatars.githubusercontent.com/u/79542825?v=4",
      contributions: 523,
      repositories: 4,
      achievements: ["🌟 First Timer", "👥 Collaborator"],
      github_url: "https://github.com/example2",
    },
    {
      rank: 5,
      name: "Code Contributor",
      avatar: "https://avatars.githubusercontent.com/u/79542825?v=4",
      contributions: 401,
      repositories: 3,
      achievements: ["🏅 Consistent", "🔍 Code Reviewer"],
      github_url: "https://github.com/example3",
    },
  ];

  useEffect(() => {
    // Update dashboard stats when community stats are loaded
    setDashboardStats({
      totalContributors: githubContributorsCount,
      totalRepositories: githubReposCount,
      totalStars: githubStarCount,
      totalForks: githubForksCount,
      topContributors: mockLeaderboardData,
    });
  }, [githubContributorsCount, githubReposCount, githubStarCount, githubForksCount]);

  const StatCard: React.FC<{
    icon: string;
    title: string;
    value: number;
    valueText: string;
    description: string;
  }> = ({ icon, title, value, valueText, description }) => (
    <motion.div
      className="dashboard-stat-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="dashboard-stat-icon">{icon}</div>
      <div className="dashboard-stat-content">
        <h3 className="dashboard-stat-title">{title}</h3>
        <div className="dashboard-stat-value">
          {loading ? (
            <div className="loading-spinner">⏳</div>
          ) : (
            <SlotCounter
              value={valueText}
              autoAnimationStart={true}
              duration={1}
              className="dashboard-slot-counter"
            />
          )}
        </div>
        <p className="dashboard-stat-description">{description}</p>
      </div>
    </motion.div>
  );

  const LeaderboardCard: React.FC<{ entry: LeaderboardEntry; index: number }> = ({
    entry,
    index,
  }) => (
    <motion.div
      className="leaderboard-card"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
    >
      <div className="leaderboard-rank">
        <span className={`rank-badge rank-${entry.rank}`}>#{entry.rank}</span>
      </div>
      <div className="leaderboard-avatar">
        <img src={entry.avatar} alt={entry.name} />
      </div>
      <div className="leaderboard-info">
        <h4 className="leaderboard-name">{entry.name}</h4>
        <div className="leaderboard-stats">
          <span className="stat-item">
            <strong>{entry.contributions}</strong> Contributions
          </span>
          <span className="stat-item">
            <strong>{entry.repositories}</strong> Repositories
          </span>
        </div>
        <div className="leaderboard-achievements">
          {entry.achievements.map((achievement, i) => (
            <span key={i} className="achievement-badge">
              {achievement}
            </span>
          ))}
        </div>
      </div>
      <div className="leaderboard-actions">
        <a
          href={entry.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="github-profile-btn"
        >
          View Profile
        </a>
      </div>
    </motion.div>
  );

  return (
    <Layout
      title="Dashboard - RecodeHive"
      description="Community Dashboard with Leaderboard and Statistics"
    >
      <Head>
        <title>Dashboard - RecodeHive</title>
        <meta
          name="description"
          content="Explore our community dashboard with contributor leaderboard and project statistics"
        />
      </Head>

      <div className="dashboard-container">
        {/* Hero Section */}
        <motion.section
          className="dashboard-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content">
            <h1 className="dashboard-title">
              Community <span className="highlight">Dashboard</span>
            </h1>
            <p className="dashboard-subtitle">
              Track our community's growth, celebrate top contributors, and explore project statistics
            </p>
          </div>
        </motion.section>

        {/* Stats Grid */}
        <motion.section
          className="dashboard-stats-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="dashboard-stats-grid">
            <StatCard
              icon="⭐"
              title="Total Stars"
              value={dashboardStats.totalStars}
              valueText={githubStarCountText}
              description="Stars across all repositories"
            />
            <StatCard
              icon="👥"
              title="Contributors"
              value={dashboardStats.totalContributors}
              valueText={githubContributorsCountText}
              description="Amazing community members"
            />
            <StatCard
              icon="📚"
              title="Repositories"
              value={dashboardStats.totalRepositories}
              valueText={githubReposCountText}
              description="Open source projects"
            />
            <StatCard
              icon="🍴"
              title="Forks"
              value={dashboardStats.totalForks}
              valueText={githubForksCountText}
              description="Community contributions"
            />
          </div>
        </motion.section>

        {/* Leaderboard Section */}
        <motion.section
          className="dashboard-leaderboard-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="leaderboard-header">
            <h2 className="leaderboard-title">
              🏆 Top Contributors <span className="title-accent">Leaderboard</span>
            </h2>
            <p className="leaderboard-description">
              Celebrating our most active community members who make RecodHive awesome!
            </p>
          </div>

          <div className="leaderboard-container">
            {error && (
              <div className="error-message">
                <p>⚠️ Some data may be cached or incomplete</p>
              </div>
            )}
            
            {dashboardStats.topContributors.map((entry, index) => (
              <LeaderboardCard key={entry.rank} entry={entry} index={index} />
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="dashboard-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Want to see your name here?</h3>
            <p>Join our community and start contributing to open source projects!</p>
            <div className="cta-buttons">
              <a
                href="https://github.com/recodehive"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-primary"
              >
                Start Contributing
              </a>
              <a href="/community" className="cta-secondary">
                Join Community
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

const DashboardWithProvider: React.FC = () => {
  return (
    <CommunityStatsProvider>
      <Dashboard />
    </CommunityStatsProvider>
  );
};

export default DashboardWithProvider;