import React, { type FC, useEffect, useState, useMemo } from "react";
import "./LandingCommunity.css";
import { useCommunityStatsContext } from "@site/src/lib/statsProvider";

type Props = {
  className?: string;
};

export const LandingCommunity: FC<Props> = ({ className }) => {
  const { 
    githubStarCountText, 
    githubContributorsCountText, 
    githubForksCountText,
    githubReposCountText,
    loading,
    error
  } = useCommunityStatsContext();
  
  const [state, setState] = useState({
    stat0: 0,
    stat1: 0,
    stat2: 0,
    stat3: 0,
  });

  const generateList = useMemo(() => [
    {
      stat: githubStarCountText,
      description: "Stars across all our GitHub repositories, showcasing the support and appreciation from the community.",
      href: "https://github.com/recodehive",
      label: "GitHub Stars"
    },
    {
      stat: githubReposCountText,
      description: "Live public projects on RecodHive, demonstrating the power of open-source collaboration.",
      href: "https://github.com/orgs/recodehive/repositories?q=visibility%3Apublic+archived%3Afalse",
      label: "Public Repositories"
    },
    {
      stat: githubContributorsCountText,
      description: "Amazing contributors who have made our repositories better and helped build our community.",
      href: "https://github.com/orgs/recodehive/people",
      label: "Contributors"
    },
    {
      stat: githubForksCountText,
      description: "Forks of our repositories, showing how our community extends and builds upon our work.",
      href: "https://github.com/orgs/recodehive/discussions",
      label: "Community Forks"
    },
  ], [githubStarCountText, githubReposCountText, githubContributorsCountText, githubForksCountText]);

  const handleDynamicChange = (target: number, index: number) => {
    let count = 0;
    const increment = target / 100;
    const interval = setInterval(() => {
      count += increment;
      setState(prev => ({ ...prev, [`stat${index}`]: Math.round(count) }));
      if (count >= target) {
        setState(prev => ({ ...prev, [`stat${index}`]: target }));
        clearInterval(interval);
      }
    }, 20);
  };

  const handleCardClick = (href: string) => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  useEffect(() => {
    if (!loading) {
      generateList.forEach((item, index) => {
        const numericStat = typeof item.stat === 'string' ? 
          parseInt(item.stat.replace(/[^\d]/g, '')) || 0 : 
          Number(item.stat);
        handleDynamicChange(numericStat, index);
      });
    }
  }, [generateList, loading]);

  return (
    <div className={`landing-community ${className || ""}`}>
      <div className="landing-community__header">
        <h2 className="landing-community__title">
          Discover the strength of our{" "}
          <span className="landing-community__highlight">amazing community</span>.
        </h2>
        {error && (
          <div className="landing-community__error">
            <small>⚠️ Stats may be cached or incomplete</small>
          </div>
        )}
      </div>

      <div className="landing-community__content">
        <div className="landing-community__stats">
          {generateList.map((item, index) => (
            <div 
              key={index} 
              className={`landing-community__stat-item ${item.href ? 'clickable' : ''} ${loading ? 'loading' : ''}`}
              onClick={() => handleCardClick(item.href)}
              role={item.href ? "button" : "presentation"}
              tabIndex={item.href ? 0 : -1}
              onKeyDown={(e) => {
                if (item.href && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleCardClick(item.href);
                }
              }}
              title={item.href ? `Click to visit ${item.label}` : item.label}
            >
              <div className="landing-community__stat-value">
                {loading ? (
                  <div className="landing-community__loading">
                    <span className="loading-spinner">⏳</span>
                  </div>
                ) : (
                  <span>
                    {item.stat}
                    {item.href && <span className="external-link-icon">↗</span>}
                  </span>
                )}
              </div>
              <div className="landing-community__stat-description">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        <div 
          className="landing-community__info clickable"
          onClick={() => handleCardClick("https://github.com/recodehive")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleCardClick("https://github.com/recodehive");
            }
          }}
          title="Click to visit RecodHive GitHub Organization"
        >
          <img
            className="landing-community__image"
            src="/community.png"
            alt="team collaboration"
            loading="lazy"
          />
          <div className="landing-community__info-text">
            Our developers are the core of RecodHive community. We take pride in
            our{" "}
            <span className="landing-community__link">
              GitHub organization
            </span>{" "}
            with amazing{" "}
            <span className="landing-community__link">
              contributors and maintainers
            </span>{" "}
            powering RecodHive's growth.
            <div className="external-link-indicator">
              <span className="external-link-icon">↗</span>
              <small>Click to explore our GitHub</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
