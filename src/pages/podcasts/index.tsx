import React, { useState } from 'react';
import Layout from '@theme/Layout';
import type { ReactElement } from 'react';
import { useHistory } from '@docusaurus/router';
import './index.css';

interface PodcastData {
  id: string;
  spotifyUrl: string;
  type: 'episode' | 'show' | 'playlist';
}

// Function to extract Spotify ID from URL
const getSpotifyEmbedId = (url: string): string => {
  const match = url.match(/(?:spotify\.com|open\.spotify\.com)\/(episode|show|playlist)\/([a-zA-Z0-9]+)/);
  return match ? match[2] : url;
};

// Function to determine content type from URL
const getSpotifyContentType = (url: string): 'episode' | 'show' | 'playlist' => {
  const match = url.match(/(?:spotify\.com|open\.spotify\.com)\/(episode|show|playlist)/);
  return (match?.[1] as 'episode' | 'show' | 'playlist') || 'show';
};

// Add your podcasts here
const podcastUrls: string[] = [
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
  "https://open.spotify.com/playlist/5EClSKDUVtkZMIRi6wgW5u?si=c7b90bfc62544845&pt=c4580022e1bd545fde3a71a58efe2d1a",
];

const podcastData: PodcastData[] = podcastUrls.map((url, index) => ({
  id: String(index + 1),
  spotifyUrl: url,
  type: getSpotifyContentType(url)
}));

export default function Podcasts(): ReactElement {  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const podcastsPerPage = 9;

  // Calculate podcasts for current page
  const indexOfLastPodcast = currentPage * podcastsPerPage;
  const indexOfFirstPodcast = indexOfLastPodcast - podcastsPerPage;
  const currentPodcasts = podcastData.slice(indexOfFirstPodcast, indexOfLastPodcast);
  const totalPages = Math.ceil(podcastData.length / podcastsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePodcastClick = (podcast: PodcastData, event: React.MouseEvent | React.KeyboardEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'IFRAME' || target.className === 'podcast-embed') {
      return;
    }
    history.push('/podcasts/details', { podcast });
  };

  return (
    <Layout>
      <div className="podcast-container">
        <h1>Discover Top Podcasts</h1>
        <p className="podcast-subtitle">Stream the best podcasts from your favorite stations</p>
          <div className="podcast-grid">
          {currentPodcasts.map((podcast) => (
            <div 
              key={podcast.id} 
              className="podcast-card"
              onClick={(e) => handlePodcastClick(podcast, e)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handlePodcastClick(podcast, e);
                }
              }}
            >
              <div className="podcast-content">
                <div className="podcast-info">
                  <h3>Podcast</h3>
                </div>
                <div className="podcast-embed" onClick={(e) => e.stopPropagation()}>
                  <iframe
                    src={`https://open.spotify.com/embed/${podcast.type}/${getSpotifyEmbedId(podcast.spotifyUrl)}`}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`Spotify embed ${podcast.id}`}
                  />
                </div>
              </div>
            </div>          ))}
        </div>
        
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              className={`pagination-button ${currentPage === number ? 'active' : ''}`}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </Layout>
  );
}
