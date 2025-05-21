import React, { useState, useRef, useEffect } from "react";
import SponsorCard from "./SponsorCard";
import "./Sponsors.css";
import Layout from "@theme/Layout";
import { FaPlusCircle, FaTimes } from 'react-icons/fa';
import Head from "@docusaurus/Head";
import sponsors from "@site/src/database/sponsors";
import { useHistory } from '@docusaurus/router';

const OurSponsors: React.FC = () => {
  const [showScanner, setShowScanner] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const handleJoinSponsor = () => setShowScanner(true);

  const handlePaymentSuccess = () => {
    setShowScanner(false);
    alert("Thanks, we will redirect to Github Sponsors page, upon sponsoring you will be added to our sponsors list.");
    window.location.href = 'https://github.com/sponsors/sanjay-kv?o=esb';
  };

  const handleCloseModal = () => setShowScanner(false);

  useEffect(() => {
    if (!showScanner) return;

    const controller = new AbortController();
    const { signal } = controller;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleCloseModal();
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleCloseModal();
      }
    };

    document.addEventListener('keydown', handleKeyDown, { signal });
    document.addEventListener('mousedown', handleClickOutside, { signal });

    return () => controller.abort();
  }, [showScanner]);

  return (
    <Layout>
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5832817025080991"
          crossOrigin="anonymous"
        />
        <script
          async
          custom-element="amp-auto-ads"
          src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"
        />
        <meta name="google-adsense-account" content="ca-pub-5832817025080991" />
      </Head>
      <div className="sponsor-page">
        <div className="sponsor-header">
          <h1 className="TitleText">Our Sponsors</h1>
          <p>
            Fuel the Hive community to our ecosystem and support open-source projects by donating
            today. <br />Your contribution directly goes to new developers in opensource community who helps us create valuable resource and
            knowledge base on our organisation.
            <br />
            Thank you for your support!
          </p>
        </div>
        <div className="sponsors-section">
          <h2 className="TitleText">Current Sponsors</h2>
          <div className="sponsors-list">
            {sponsors.filter(s => !s.isPastSponsor).map((sponsor) => (
              <SponsorCard key={`${sponsor.name}-latest`} {...sponsor} />
            ))}
            <div
              className="sponsor-card empty-card"
              onClick={handleJoinSponsor}
              role="button"
              tabIndex={0}
            >
              <h3>
                <FaPlusCircle className="join-icon" />
                Join as a Sponsor
              </h3>
            </div>
          </div>

          {sponsors.some(s => s.isPastSponsor) && (
            <>
              <h2 className="TitleText">Past Sponsors</h2>
              <div className="sponsors-list">
                {sponsors
                  .filter(s => s.isPastSponsor)
                  .map((sponsor) => (
                    <SponsorCard key={`${sponsor.name}-past`} {...sponsor} />
                  ))}
              </div>
            </>
          )}
        </div>

        {showScanner && (
          <div className="scanner-popup" role="dialog" aria-modal="true">
            <div className="scanner-content" ref={modalRef}>
              <button
                className="close-button"
                aria-label="Close"
                onClick={handleCloseModal}
              >
                <FaTimes size={20} />
              </button>
              <h2 className="TitleText">Sponsor Hive Community</h2>
              <img src="#" alt="" />
              <button className="scanner-button mt-4" onClick={handlePaymentSuccess}>
                Github Sponser
              </button>
            </div>
          </div>
        )}
        <div className="support-links mt-6">
          <iframe
            src="https://github.com/sponsors/sanjay-kv/button"
            title="Sponsor Sanjay Viswanathan on GitHub"
            height="32"
            width="114"
            style={{ border: 0, borderRadius: "6px" }}
          />

        </div>
      </div>
    </Layout>
  );
};

export default OurSponsors;
