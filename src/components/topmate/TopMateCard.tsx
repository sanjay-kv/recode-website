import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';

interface TopMateCardProps {
  title: string;
  description: string;
  duration: string;
  profileImage: string;
  username: string;
}

const TopMateCard: React.FC<TopMateCardProps> = ({
  title,
  description,
  duration,
  profileImage,
  username
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Decorative Arrows */}
      <div className="absolute -top-4 -left-4 flex gap-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-purple-500"
          >
            <ArrowUpRight size={24} className="transform rotate-45" />
          </motion.div>
        ))}
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">1:1 CALL</span>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <Clock size={16} />
              <span className="text-sm">{duration}</span>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
            <span className="sr-only">Close</span>
            ×
          </button>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

        {/* Profile Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={profileImage}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
            />
            <div className="flex flex-col">
              <span className="text-sm text-gray-600 dark:text-gray-300">Book a slot at</span>
              <a
                href={`https://topmate.io/${username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 font-semibold hover:text-purple-700 transition-colors flex items-center gap-1"
              >
                topmate.io/{username}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <img
            src="/icons/topmate.png"
            alt="Topmate"
            className="h-4 w-auto opacity-80"
          />
        </div>
      </div>

      {/* Gradient Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 -z-10" />
    </motion.div>
  );
};

export default TopMateCard; 