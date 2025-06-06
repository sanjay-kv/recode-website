import React, { ReactNode, useState, useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { motion, useAnimation, useInView } from "framer-motion";
import Head from '@docusaurus/Head';
import styles from "./styles.module.css";

// Type definitions
interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

interface FeatureProps {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface StatCardProps {
  value: string;
  label: string;
  index?: number;
}

interface LearningPathProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  isCompleted?: boolean;
  onToggleComplete?: () => void;
  index?: number;
}

// Animated component for staggered animations
const AnimatedSection = ({ children, delay = 0 }: AnimatedSectionProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: delay * 0.15,
          ease: [0.16, 1, 0.3, 1],
          staggerChildren: 0.1
        },
      });
    }
  }, [controls, isInView, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      style={{
        willChange: 'opacity, transform',
        backfaceVisibility: 'hidden',
        WebkitFontSmoothing: 'subpixel-antialiased'
      } as React.CSSProperties}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.2 + (delay * 0.1) }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

function GetStartedHeader() {
  const { siteConfig } = useDocusaurusContext();
  // Remove unused siteConfig or use it if needed
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Code", "Build", "Deploy", "Learn"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroContent}>
          <motion.h1 
            className="hero__title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Transform Your Career in <span className={styles.highlight}>Tech</span>
          </motion.h1>
          
          <motion.p 
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Master the art of coding with our comprehensive learning paths and hands-on challenges
          </motion.p>
          
          <motion.div 
            className={styles.typingContainer}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.typingText}>
              <span className={styles.staticText}>Start</span>
              <div className={styles.typingAnimation}>
                {texts.map((text, i) => (
                  <span 
                    key={i} 
                    className={`${styles.typingWord} ${i === textIndex ? styles.visible : ''}`}
                  >
                    {text}
                  </span>
                ))}
              </div>
              <span className={styles.staticText}>Today</span>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.buttons}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Link
              className={`${styles.button} ${styles.buttonPrimary}`}
              to="/courses/"
            >
              Start Learning Now
              <span className={styles.buttonIcon} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </span>
            </Link>
            <Link
              className={`${styles.button} ${styles.buttonOutline}`}
              to="/docs/intro"
            >
              Explore Documentation
              <span className={styles.buttonIcon} aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
            </Link>
          </motion.div>
          
          <motion.a 
            href="#features" 
            className={styles.scrollIndicator}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span>Scroll to explore</span>
            <div className={styles.mouse}></div>
          </motion.a>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: "Hands-on Coding Challenges",
    description: "Master programming through practical coding challenges with real-world applications",
    icon: "💻",
    color: "#3b82f6"
  },
  {
    title: "Real Interview Practice",
    description: "Prepare with questions from top tech companies like Google, Amazon, and Microsoft",
    icon: "🎯",
    color: "#8b5cf6"
  },
  {
    title: "Structured Learning Paths",
    description: "Follow expert-designed roadmaps for different tech stacks and skill levels",
    icon: "🛣️",
    color: "#10b981"
  },
  {
    title: "Interactive Environment",
    description: "Code directly in your browser with instant feedback and debugging tools",
    icon: "⚡",
    color: "#f59e0b"
  },
  {
    title: "100+ Problems",
    description: "Curated collection of real-world coding interview questions and solutions",
    icon: "🔢",
    color: "#ec4899"
  },
  {
    title: "Multiple Languages",
    description: "Support for popular programming languages including Python, JavaScript, and more",
    icon: "🌐",
    color: "#06b6d4"
  }
];

const stats = [
  { value: "10,000+", label: "Active Learners" },
  { value: "100+", label: "Hours of Content" },
  { value: "24/7", label: "Community Support" },
  { value: "4.9/5", label: "Average Rating" }
];

const learningPaths = [
  {
    title: "Web Development",
    description: "Master full-stack development with modern frameworks like React, Node.js, and databases. Build responsive, interactive web applications.",
    icon: "🖥️",
    color: "#4f46e5"
  },
  {
    title: "Data Science",
    description: "Learn data analysis, visualization, and machine learning with Python, Pandas, and TensorFlow. Turn data into actionable insights.",
    icon: "📊",
    color: "#8b5cf6"
  },
  {
    title: "Mobile Apps",
    description: "Create beautiful, performant cross-platform mobile applications using React Native and modern mobile development practices.",
    icon: "📱",
    color: "#10b981"
  },
  {
    title: "DevOps",
    description: "Master CI/CD, Docker, Kubernetes, and cloud deployment to build scalable, reliable infrastructure and deployment pipelines.",
    icon: "⚙️",
    color: "#f59e0b"
  }
];

function Feature({ title, description, icon, color }: FeatureProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Create a ref to apply the custom property
  const featureRef = useRef<HTMLElement>(null);
  
  // Apply the color as a CSS variable when the component mounts or color changes
  useEffect(() => {
    if (featureRef.current) {
      featureRef.current.style.setProperty('--feature-color', color);
    }
  }, [color]);
  
  const iconStyle = {
    background: `linear-gradient(135deg, ${color}10, ${color}20)`,
    color: color
  };
  
  return (
    <motion.article 
      ref={featureRef}
      className={styles.feature}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        y: -10,
        boxShadow: `0 20px 40px ${color}20`
      }}
      aria-label={title}
    >
      <div 
        className={styles.featureIcon}
        style={iconStyle}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
      <motion.div 
        className={styles.featureHover}
        initial={{ width: 0 }}
        animate={{ width: isHovered ? '100%' : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

function StatCard({ value, label, index = 0 }: StatCardProps) {
  return (
    <motion.article 
      className={styles.statCard}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        transition: { 
          duration: 0.6, 
          delay: index * 0.1,
          ease: "easeOut"
        }
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)'
      }}
    >
      <motion.div 
        className={styles.statValue}
        aria-label={value}
        initial={{ scale: 0.9 }}
        whileInView={{ 
          scale: 1,
          transition: { 
            delay: 0.2 + (index * 0.05), 
            type: 'spring', 
            stiffness: 100 
          }
        }}
        viewport={{ once: true }}
      >
        {value}
      </motion.div>
      <div className={styles.statLabel}>
        {label}
      </div>
      <motion.div 
        className={styles.statGlow}
        initial={{ opacity: 0 }}
        whileInView={{ 
          opacity: 0.3,
          transition: { delay: 0.3 + (index * 0.1) }
        }}
        viewport={{ once: true }}
      />
    </motion.article>
  );
}

const LearningPath = ({ 
  title, 
  description, 
  icon, 
  color, 
  index = 0, 
  isCompleted = false, 
  onToggleComplete = () => {}
}: LearningPathProps) => {
  const isEven = index % 2 === 0;
  const delay = index * 0.15;
  
  // Calculate position based on index
  const topPosition = 100 + (index * 250); // 250px spacing between cards
  
  return (
    <motion.article
      className={`${styles.pathCard} ${isEven ? styles.left : styles.right} group relative`}
      style={{
        '--card-color': color || '#3b82f6',
        '--card-color-light': color ? `${color}20` : 'rgba(59, 130, 246, 0.2)',
        position: 'absolute',
        top: `${topPosition}px`,
        [isEven ? 'left' : 'right']: '50%',
        transform: isEven ? 'none' : 'translateX(50%)',
        marginLeft: isEven ? '0' : 'auto',
        marginRight: isEven ? 'auto' : '0',
        opacity: isCompleted ? 0.9 : 1,
        filter: isCompleted ? 'saturate(0.9)' : 'none',
        transition: 'all 0.3s ease-in-out',
        border: isCompleted ? `1px solid ${color}40` : '1px solid rgba(255, 255, 255, 0.1)'
      } as React.CSSProperties}
      initial={{ opacity: 0, x: isEven ? -100 : 100, y: 20 }}
      animate={{ 
        opacity: 1,
        x: 0, 
        y: 0,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 100,
          delay: delay
        }
      }}
    >
      <div className="flex items-start gap-4">
        <motion.div 
          className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-xl text-2xl relative"
          style={{
            background: `linear-gradient(135deg, ${color || '#3b82f6'}, ${color ? `${color}80` : '#2563eb'})`,
            boxShadow: `0 4px 15px -5px ${color || '#3b82f6'}80`,
            opacity: isCompleted ? 0.9 : 1
          }}
          whileHover={{
            scale: 1.1,
            rotate: isCompleted ? 0 : 5,
            transition: { duration: 0.2 }
          }}
        >
          {icon}
        </motion.div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>
          
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-700/50">
            <Link 
              to="/docs" 
              className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group-hover:underline"
            >
              {isCompleted ? 'Continue Learning' : 'Start Learning'}
              <svg 
                className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            {/* Completion Toggle */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                onToggleComplete();
              }}
              className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                isCompleted 
                  ? 'bg-green-500 focus:ring-green-500' 
                  : 'bg-gray-600 focus:ring-blue-500'
              }`}
              aria-pressed={isCompleted}
              aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
            >
              <span className="sr-only">
                {isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
              </span>
              <span
                className={`${
                  isCompleted ? 'translate-x-6' : 'translate-x-1'
                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out`}
              >
                {isCompleted && (
                  <svg
                    className="w-3 h-3 text-green-500 mx-auto mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Progress bar background */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50 rounded-b-lg overflow-hidden">
        <motion.div 
          className="h-full bg-green-500"
          initial={{ width: '0%' }}
          animate={{ width: isCompleted ? '100%' : '0%' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
      
      {/* Completion badge */}
      {isCompleted && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </motion.article>
  );
};

export default function GetStarted() {
  const { siteConfig } = useDocusaurusContext();
  type CompletedPaths = Record<string, boolean>;

  const [completedPaths, setCompletedPaths] = useState<CompletedPaths>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('completedPaths');
        return saved ? JSON.parse(saved) : {};
      } catch (e) {
        console.error('Failed to parse completedPaths from localStorage', e);
        return {};
      }
    }
    return {};
  });

  // Toggle completion status for a path
  const togglePathCompletion = React.useCallback((pathTitle: string) => {
    setCompletedPaths(prev => ({
      ...prev,
      [pathTitle]: !prev[pathTitle]
    }));
  }, []);

  // Calculate completion percentage
  const completionPercentage = Math.round(
    (Object.values(completedPaths).filter(Boolean).length / learningPaths.length) * 100
  ) || 0;

  // Save to localStorage whenever completedPaths changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('completedPaths', JSON.stringify(completedPaths));
      } catch (e) {
        console.error('Failed to save completedPaths to localStorage', e);
      }
    }
  }, [completedPaths]);

  return (
    <Layout
      title={`Get Started | ${siteConfig?.title || 'Recode Hive'}`}
      description="Start your coding journey with Recode Hive. Learn to code with our interactive platform and structured learning paths."
    >
      <Head>
        <meta name="theme-color" content="#1e40af" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700;800&display=swap" rel="stylesheet" />
      </Head>
      
      <GetStartedHeader />
      
      <main>
        {/* Features Section */}
        <section className={styles.features}>
          <div className="container">
            <AnimatedSection>
              <div className={styles.sectionHeader}>
                <h2>Why Choose Recode Hive?</h2>
                <p>Discover the perfect learning experience tailored for your coding journey</p>
              </div>
              
              <div className={styles.featuresGrid}>
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </AnimatedSection>
            
            {/* Stats Section */}
            <AnimatedSection delay={1}>
              <div className={styles.section}>
                <div className={styles.container}>
                  <motion.div 
                    className={styles.statsSection}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                  >
                    {stats.map((stat, index) => (
                      <StatCard 
                        key={index} 
                        value={stat.value} 
                        label={stat.label} 
                        index={index}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* Learning Paths */}
            <AnimatedSection delay={2}>
              <section className={styles.learningPaths}>
                <div className="container">
                  <div className="text-center mb-16">
                    <motion.h2 
                      className="text-3xl md:text-4xl font-bold mb-4 px-6 py-3 inline-block rounded-xl bg-blue-100 text-gray-900"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { 
                          duration: 0.8,
                          ease: "easeOut"
                        } 
                      }}
                      viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
                      style={{
                        textShadow: '0 0 10px rgba(255, 213, 0, 0.5)'
                      }}
                    >
                      Start Your Journey
                    </motion.h2>
                  </div>
                  
                  <div className="relative">
                    {/* Progress Overview */}
                    <motion.div 
                      className="mb-12 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-4 px-6 py-3 inline-block rounded-xl bg-gradient-to-r from-blue-200 to-purple-200 text-gray-800 shadow-md">
                            Your Learning Progress
                          </h3>
                          <p className="text-gray-300 text-sm">
                            {completionPercentage}% Complete • {Object.values(completedPaths).filter(Boolean).length} of {learningPaths.length} paths started
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            {completionPercentage}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                          initial={{ width: 0 }}
                          animate={{ width: `${completionPercentage}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        >
                          <motion.div 
                            className="absolute inset-0 bg-white/20" 
                            animate={{
                              left: ['0%', '100%']
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              repeatType: 'loop',
                              ease: 'easeInOut',
                            }}
                            style={{
                              width: '20%',
                              height: '100%',
                              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                              transform: 'skewX(-20deg)'
                            }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                    
                    <div className={styles.timelineContainer}>
                      <div className={styles.timeline}>
                        {/* Animated progress indicator on the timeline */}
                        <motion.div 
                          className="absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-400 to-purple-500 h-0"
                          initial={{ height: 0 }}
                          animate={{ height: `${(completionPercentage / 100) * 100}%` }}
                          transition={{ duration: 1.5, ease: 'easeInOut' }}
                        />
                      </div>
                      <div className={styles.pathsContainer}>
                        {learningPaths.map((path, idx) => (
                          <LearningPath 
                            key={path.title}
                            title={path.title}
                            description={path.description}
                            icon={path.icon}
                            color={path.color}
                            index={idx}
                            isCompleted={!!completedPaths[path.title]}
                            onToggleComplete={() => togglePathCompletion(path.title)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Link
                      to="/courses"
                      className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-200 to-blue-300 text-gray-900 font-semibold text-lg rounded-xl hover:from-blue-300 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                      style={{
                        textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                      }}
                    >
                      <span className="relative z-10">
                        Explore All Paths
                      </span>
                      <svg 
                        className="w-6 h-6 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>
              </section>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </Layout>
  );
}
