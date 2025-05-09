import React, { useState } from "react";
import SponsorCard from "./SponsorCard";
import "./Sponsors.css";
import Layout from "@theme/Layout";
import { FaPlusCircle } from 'react-icons/fa';
import Head from "@docusaurus/Head";
import sponsors from "@site/src/database/sponsors";

const OurSponsors: React.FC = () => {
  const [showScanner, setShowScanner] = useState(false);

  const handleJoinSponsor = () => {
    setShowScanner(true);
  };

  const handlePaymentSuccess = () => {
    setShowScanner(false);
    alert("Payment successful! Please fill in your sponsor info.");
    window.location.href = "https://forms.gle/8zBeFP98bpjDxm9u8";
  };

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
            today. <br></br>Your contribution help us to create valuable resource and
            knowledge base on our website.
            <br />
            Thank you for your support!
          </p>
        </div>
        <div className="sponsors-list">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.name} {...sponsor} />
          ))}
          <div className="sponsor-card empty-card" onClick={handleJoinSponsor}>
            <h3>
              <FaPlusCircle className="join-icon" />
              Join as a Sponsor
            </h3>
          </div>
        </div>
        {showScanner && (
          <div className="scanner-popup">
            <div className="scanner-content">
              <h2 className="TitleText">Scan to Sponsor</h2>
              <img src="/sponsors/scan-pay.jpg" alt="Payment Scanner" />
              <button className="scanner-button" onClick={handlePaymentSuccess}>
                I have paid
              </button>
            </div>
          </div>
        )}
        <div className="support-links">
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
