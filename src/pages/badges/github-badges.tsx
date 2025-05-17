import React, { useEffect } from "react";
import Head from "@docusaurus/Head";
import { motion } from "framer-motion";

// Import global and badge-specific styles
import styles from "./github-badges.module.css";

const GithubBadges: React.FC = () => {
  // Scroll to top button logic
  useEffect(() => {
    const scrollToTopBtn = document.getElementById("scrollToTop");
    const handleScroll = () => {
      if (!scrollToTopBtn) return;
      if (window.scrollY > 200) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
      // Progress bar logic
      const progressBar = document.getElementById("progressBar");
      if (progressBar) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles["github-badges-page"]}>
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}
      >
        🏆 GitHub Achievements 🏆
      </motion.h1>
      <div className={styles.bannerAchievements}>
        <strong>Achievements Banner</strong>
      </div>
      <h2>📃 Achievement List 📃</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.achievementsTable}>
          <thead>
            <tr>
              <th>Badge</th>
              <th>Name</th>
              <th>How to get</th>
              <th>Needed amount</th>
              <th>Levels</th>
            </tr>
          </thead>
          <tbody>
            {/* Starstruck */}
            <motion.tr
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              <td>
                <motion.img
                  src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png"
                  alt="Starstruck"
                  className={styles.badgeImgSmall}
                  whileHover={{ scale: 1.13, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </td>
              <td>Starstruck</td>
              <td>
                Create a repository with a lot of stars.<br/>
                <a href="https://github.com/sanjay-kv/Open-source-Practice" target="_blank" rel="noopener noreferrer">Sample repo</a><br/>
                If you get the first 16 stars you will unlock the badge.<br/>
                <a href="https://youtu.be/v2Pai1TY_Lg" target="_blank" rel="noopener noreferrer">Watch the Video Tutorial</a>
              </td>
              <td>16, 128, 512, 4096</td>
              <td>Default, Bronze, Silver, Gold</td>
            </motion.tr>
            {/* Quickdraw */}
            <motion.tr
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.10 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              <td>
                <motion.img
                  src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png"
                  alt="Quickdraw"
                  className={styles.badgeImgSmall}
                  whileHover={{ scale: 1.13, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </td>
              <td>Quickdraw</td>
              <td>
                Gitty up!<br/>
                If you closed an issue / pull request within 5 minutes of opening you will unlock this badge
              </td>
              <td>1</td>
              <td>Default</td>
            </motion.tr>
            {/* Pair Extraordinaire */}
            <motion.tr
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              <td>
                <motion.img
                  src="https://github.githubassets.com/images/modules/profile/achievements/pair-extraordinaire-default.png"
                  alt="Pair Extraordinaire"
                  className={styles.badgeImgSmall}
                  whileHover={{ scale: 1.13, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </td>
              <td>Pair Extraordinaire</td>
              <td>
                Coauthored commits on merged pull request<br/>
                Requirement: VSCode IDE (bit difficult to get)<br/>
                You can raise a sample PR <a href="https://github.com/recodehive/Opensource-practice" target="_blank" rel="noopener noreferrer">here</a> by adding to the existing readme file and tag <b>@sanjay-kv</b><br/>
                <a href="https://youtu.be/BNKSlT8jLQ0" target="_blank" rel="noopener noreferrer">Watch the Video Tutorial</a>
              </td>
              <td>1, 10, 24, 48</td>
              <td>Default, Bronze, Silver, Gold</td>
            </motion.tr>
            {/* Pull Shark */}
            <motion.tr
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.20 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              <td>
                <motion.img
                  src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
                  alt="Pull Shark"
                  className={styles.badgeImgSmall}
                  whileHover={{ scale: 1.13, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </td>
              <td>Pull Shark</td>
              <td>
                Opened a pull request and it should be merged<br/>
                You can raise a sample PR <a href="https://github.com/recodehive/resume-pitch" target="_blank" rel="noopener noreferrer">here</a> by adding on existing readme file and tag <b>@sanjay-kv</b><br/>
                <a href="https://youtu.be/7uKMWBFN2jQ" target="_blank" rel="noopener noreferrer">Watch the Video Tutorial</a>
              </td>
              <td>2, 16, 128, 1024</td>
              <td>Default, Bronze, Silver, Gold</td>
            </motion.tr>
            {/* Galaxy Brain */}
            <motion.tr
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              <td>
                <motion.img
                  src="https://github.githubassets.com/images/modules/profile/achievements/galaxy-brain-default.png"
                  alt="Galaxy Brain"
                  className={styles.badgeImgSmall}
                  whileHover={{ scale: 1.13, rotate: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </td>
              <td>Galaxy Brain</td>
              <td>
                Answered a discussion and someone marked your reply as answer<br/>
                You can answer some of the discussions <a href="https://github.com/orgs/recodehive/discussions" target="_blank" rel="noopener noreferrer">here</a><br/>
                <a href="https://youtu.be/v2Pai1TY_Lg" target="_blank" rel="noopener noreferrer">Watch the Video Tutorial</a>
              </td>
              <td>2, 8, 16, 32</td>
              <td>Default, Bronze, Silver, Gold</td>
            </motion.tr>
            {/* YOLO */}
            <motion.tr
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.30 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              <td>
                <motion.img
                  src="https://github.githubassets.com/images/modules/profile/achievements/yolo-default.png"
                  alt="YOLO"
                  className={styles.badgeImgSmall}
                  whileHover={{ scale: 1.13, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </td>
              <td>YOLO</td>
              <td>
                Merged a pull request without a review<br/>
                You can raise a PR <a href="https://github.com/recodehive/machine-learning-repos" target="_blank" rel="noopener noreferrer">here</a><br/>
                <a href="https://youtu.be/GnHNScuGKrg" target="_blank" rel="noopener noreferrer">Watch the Video Tutorial</a>
              </td>
              <td>1</td>
              <td>Default</td>
            </motion.tr>
            {/* Public Sponsor */}
            <motion.tr
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}
            >
              <td>
                <motion.img
                  src="https://github.githubassets.com/images/modules/profile/achievements/public-sponsor-default.png"
                  alt="Public Sponsor"
                  className={styles.badgeImgSmall}
                  whileHover={{ scale: 1.13, rotate: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </td>
              <td>Public Sponsor</td>
              <td>
                GitHub Sponsors.<br/>
                <a href="https://github.com/sponsors" target="_blank" rel="noopener noreferrer">GitHub Sponsors</a><br/>
                <a href="https://youtu.be/dcdpkD7lYDg" target="_blank" rel="noopener noreferrer">Watch the Video Tutorial</a>
              </td>
              <td>1</td>
              <td>Default</td>
            </motion.tr>
          </tbody>
        </table>
      </div>

      <motion.h2
        className={styles.skinHeading}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <span role="img" aria-label="wave">👋</span> Achievement Skin Tone <span role="img" aria-label="wave">👋</span>
      </motion.h2>
      <p className={styles.paragraph} style={{ textAlign: "center" }}>
        Some achievements' appearance depends on your Emoji Skin Tone Preference.<br />
        You can change your preferred Skin Tone by going to
        <a href="https://github.com/settings/appearance" target="_blank" rel="noopener noreferrer">appearance settings</a>.
      </p>
      <div className={styles.tableWrapper}>
        <table className={styles.skinToneTable}>
          <thead>
            <tr>
              <th>Badge</th>
              <th>Name</th>
              <th colSpan={6}>Skin Tone Versions</th>
            </tr>
            <tr>
              {/* <td></td><td></td> */}
              {/* <th>Default</th><th>Light</th><th>Medium-Light</th><th>Medium</th><th>Medium-Dark</th><th>Dark</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" alt="Starstruck" className={styles.badgeImgSmall} /></td>
              <td>Starstruck</td>
              <td><img src="https://github.githubassets.com/images/modules/profile/achievements/starstruck-default.png" className={styles.badgeImgSmall} /> 👋</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/Skin-Tones/StarStruck_SkinTone2.png" className={styles.badgeImgSmall} /> 👋🏻</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/Skin-Tones/StarStruck_SkinTone3.png" className={styles.badgeImgSmall} /> 👋🏼</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/Skin-Tones/StarStruck_SkinTone4.png" className={styles.badgeImgSmall} /> 👋🏽</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/Skin-Tones/StarStruck_SkinTone5.png" className={styles.badgeImgSmall} /> 👋🏾</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Star-Struck/PNG/Skin-Tones/StarStruck_SkinTone6.png" className={styles.badgeImgSmall} /> 👋🏿</td>
            </tr>
            <tr>
              <td><img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" alt="Quickdraw" className={styles.badgeImgSmall} /></td>
              <td>Quickdraw</td>
              <td><img src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png" className={styles.badgeImgSmall} /> 👋</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Quick-Draw/PNG/Skin-Tones/QuickDraw_SkinTone2.png" className={styles.badgeImgSmall} /> 👋🏻</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Quick-Draw/PNG/Skin-Tones/QuickDraw_SkinTone3.png" className={styles.badgeImgSmall} /> 👋🏼</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Quick-Draw/PNG/Skin-Tones/QuickDraw_SkinTone4.png" className={styles.badgeImgSmall} /> 👋🏽</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Quick-Draw/PNG/Skin-Tones/QuickDraw_SkinTone5.png" className={styles.badgeImgSmall} /> 👋🏾</td>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Quick-Draw/PNG/Skin-Tones/QuickDraw_SkinTone6.png" className={styles.badgeImgSmall} /> 👋🏿</td>
            </tr>
          </tbody>
        </table>
      </div>

      <motion.h2
        className={styles.highlightsHeading}
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        ✨ Highlights Badges ✨
      </motion.h2>
      <div className={styles.tableWrapper}>
        <table className={styles.highlightsTable}>
          <thead>
            <tr>
              <th>Badge</th>
              <th>Name</th>
              <th>How to get</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>⭐</td>
              <td>Pro</td>
              <td>Pay for <a href="https://github.com/pricing" target="_blank" rel="noopener noreferrer">GitHub Pro</a> or if you are student get it free: <a href="https://youtu.be/knr5gBv-c9c" target="_blank" rel="noopener noreferrer">Watch Video</a></td>
            </tr>
            <tr>
              <td>📋</td>
              <td>Developer Program Member</td>
              <td>Be a registered member of the <a href="https://github.com/developers" target="_blank" rel="noopener noreferrer">GitHub Developer Program</a></td>
            </tr>
            <tr>
              <td>🔒</td>
              <td>Security Bug Bounty Hunter</td>
              <td>Helped out hunting down security vulnerabilities at <a href="https://bounty.github.com/" target="_blank" rel="noopener noreferrer">GitHub Security</a></td>
            </tr>
            <tr>
              <td>🎓</td>
              <td>GitHub Campus Expert</td>
              <td>Participate in the <a href="https://education.github.com/experts" target="_blank" rel="noopener noreferrer">GitHub Campus Program</a></td>
            </tr>
            <tr>
              <td>⚠️</td>
              <td>Security advisory credit</td>
              <td>Have your security advisory submitted to the <a href="https://github.com/advisories" target="_blank" rel="noopener noreferrer">GitHub Advisory Database</a> accepted</td>
            </tr>
          </tbody>
        </table>
      </div>

      <motion.h2
        className={styles.retiredHeading}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        ❌ Badges no longer earnable ❌
      </motion.h2>
      <div className={styles.tableWrapper}>
        <table className={styles.retiredTable}>
          <thead>
            <tr>
              <th>Badge</th>
              <th>Name</th>
              <th>How to get</th>
              <th>Needed Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Mars-2020-Contributor/PNG/Mars2020ContributorBadge.png" alt="Mars 2020 Contributor" className={styles.badgeImgSmall} /></td>
              <td>Mars 2020 Contributor</td>
              <td>Contributed code to a repository used in the <a href="https://github.com/readme/featured/nasa-ingenuity-helicopter" target="_blank" rel="noopener noreferrer">Mars 2020 Helicopter Mission</a></td>
              <td>
                <div className={styles.neededBox}>
                  <div className={styles.neededLabel}>DEFAULT</div>
                  <img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/Mars-2020-Contributor/PNG/Mars2020ContributorBadge.png" alt="Mars 2020 Contributor" className={styles.badgeImgSmall} />
                  <div>1</div>
                </div>
              </td>
            </tr>
            <tr>
              <td><img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/2020-Arctic-Code-Vault-Contributor/PNG/2020ArcticCodeVaultBadge.png" alt="Arctic Code Vault Contributor" className={styles.badgeImgSmall} /></td>
              <td>Arctic Code Vault Contributor</td>
              <td>Contributed code to a repository in the <a href="https://archiveprogram.github.com/" target="_blank" rel="noopener noreferrer">2020 GitHub Archive Program</a></td>
              <td>
                <div className={styles.neededBox}>
                  <div className={styles.neededLabel}>DEFAULT</div>
                  <img src="https://raw.githubusercontent.com/recodehive/awesome-github-profiles/main/assets/Badges/2020-Arctic-Code-Vault-Contributor/PNG/2020ArcticCodeVaultBadge.png" alt="Arctic Code Vault Contributor" className={styles.badgeImgSmall} />
                  <div>1</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <hr className={styles.hr} />

      <h2 className={styles.subheading}>🛈 More Information 🛈</h2>
      <p className={styles.paragraph}>
        You can find more information about GitHub Badges under this
        <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile" target="_blank" rel="noopener noreferrer"> link</a>.
      </p>

      <h2>Showcase your expertise with GitHub</h2>
      <p>
        <b>Certifications</b><br />
        Getting GitHub certified is a resounding endorsement that validates your skills, credibility, trust, and knowledge of the technologies and developer tools that are used by more than 100 million developers worldwide.
      </p>

      <h2>GitHub Foundations</h2>
      <p>
        Highlight your understanding of the foundational topics and concepts of collaborating, contributing, and working on GitHub. This exam covers collaboration, GitHub products, Git basics, and working within GitHub repositories.<br />
        <a href="https://examregistration.github.com/waitlist/copilot" target="_blank" rel="noopener noreferrer">Prepare for the GitHub Foundations exam</a>
      </p>

      <h2>GitHub Actions</h2>
      <p>
        Certify your proficiency in automating workflows and accelerating development with GitHub Actions. Test your skills in streamlining workflows, automating tasks, and optimizing software pipelines, including CI/CD—all within customizable workflows.<br />
        <a href="https://examregistration.github.com/waitlist/copilot" target="_blank" rel="noopener noreferrer">Prepare for the GitHub Actions exam</a>
      </p>

      <h2>GitHub Advanced Security</h2>
      <p>
        Highlight your code security knowledge with the GitHub Advanced Security certification. Validate your expertise in vulnerability identification, workflow security, and robust security implementation—elevating software integrity standards.<br />
        <a href="https://examregistration.github.com/waitlist/copilot" target="_blank" rel="noopener noreferrer">Prepare for the GitHub Advanced Security exam</a>
      </p>

      <h2>GitHub Administration</h2>
      <p>
        Certify your ability to optimize and manage a healthy GitHub environment with the GitHub Admin exam. Highlight your expertise in repository management, workflow optimization, and efficient collaboration to support successful projects on GitHub.<br />
        <a href="https://examregistration.github.com/waitlist/copilot" target="_blank" rel="noopener noreferrer">Prepare for the GitHub Administration exam</a>
      </p>

      <h2>GitHub Copilot</h2>
      <p>
        The GitHub Copilot certification exam evaluates your skill in using the AI-driven code completion tool in various programming languages, certifying your capability to optimize software development workflows efficiently.<br />
        <a href="https://examregistration.github.com/waitlist/copilot" target="_blank" rel="noopener noreferrer">Coming Soon! Join the waitlist now for priority access</a>
      </p>

      <hr style={{ margin: "40px 0" }} />

      <hr />
<div className="section">
  <b>ABOUT RECODE-HIVE</b><br />
  <a href="https://recodehive.github.io/awesome-github-profiles/pages/help.html" target="_blank" rel="noopener noreferrer">Contact Us</a> |
  <a href="https://github.com/recodehive/awesome-github-profiles/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer"> Code of Conduct</a> |
  <a href="https://recodehive.github.io/awesome-github-profiles/pages/faq.html" target="_blank" rel="noopener noreferrer"> FAQ</a>
</div>
<div className="section">
  <b>GET INVOLVED</b><br />
  <a href="https://github.com/recodehive/awesome-github-profiles/issues/new?assignees=&labels=%E2%9E%95+profile&projects=&template=add_profile.md&title=Add+Profile%3A+" target="_blank" rel="noopener noreferrer">Add Your Profile</a> |
  <a href="https://github.com/recodehive/Support/issues/new?assignees=&labels=invite+me+to+the+community&projects=&template=invitation.yml&title=Please+invite+me+to+the+Recode-Hive+GitHub+Community+Organization" target="_blank" rel="noopener noreferrer"> Join the Organization</a> |
  <a href="https://recodehive.github.io/awesome-github-profiles/pages/events.html" target="_blank" rel="noopener noreferrer"> Events</a>
</div>
<div className="section">
  We focus on quality content to the right people at the right time⏱. Recode Hive will help you with updates on what's happening in the tech industry💻. We focus on everything starting from How To's to Data Science.<br />
  <a href="https://recodehive.github.io/awesome-github-profiles/pages/exploremore.html" target="_blank" rel="noopener noreferrer">Explore</a>
</div>
<div style={{ fontSize: 12, color: "#aaa", textAlign: "center" }}>
  &copy; 2025 Recode-Hive. Made with <span style={{ color: "#e25555" }}>&hearts;</span> by the community. All rights reserved.
</div>

      <button
        id="scrollToTop"
        onClick={handleScrollToTop}
        aria-label="Scroll to top"
        style={{ position: "fixed", bottom: 20, right: 20, width: 45, height: 45, borderRadius: "50%", backgroundColor: "black", color: "white", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", opacity: 0, visibility: "hidden", zIndex: 1000 }}
      >
        <svg className="arrow-icon" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4v16m0 0l-8-8m8 8l8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  );
};

export default GithubBadges;
