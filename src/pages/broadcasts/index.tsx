import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import type { ReactElement } from 'react';
import { useHistory } from '@docusaurus/router';
import './video.css';

interface VideoData {
  id: string;
  youtubeUrl: string;
  type: 'video' | 'shorts';
}

const getYoutubeVideoId = (url: string): string => {
  // Handle youtu.be short links
  if (url.includes('youtu.be/')) {
    const match = url.match(/youtu\.be\/([^?&\s]+)/);
    return match ? match[1].split('?')[0] : '';
  }
  
  // Handle youtube.com/watch?v= links
  if (url.includes('youtube.com/watch')) {
    const match = url.match(/[?&]v=([^&\s]+)/);
    return match ? match[1].split('&')[0] : '';
  }
  
  // Handle youtube.com/shorts/ links
  if (url.includes('youtube.com/shorts/')) {
    const match = url.match(/shorts\/([^?&\s]+)/);
    return match ? match[1].split('?')[0] : '';
  }
  
  return '';
};

const getYoutubeContentType = (url: string): 'video' | 'shorts' =>
  url.includes('/shorts/') ? 'shorts' : 'video';

// List of both videos and shorts which will be handeled by the component
const videoUrls: string[] = [
    "https://youtu.be/Fl2L9bXSRy0?si=Pdvb0oBLCP4TCIwF",
    "https://youtu.be/vuUusiD7EDM?si=4UTby9iK5hUNhNJ4",
    "https://youtu.be/xdjZ0HXADjE?si=JkIuRgwJ8Z3qbjxi",
    "https://youtu.be/DmYe2itxSQA?si=skfOHQcC6EI8kouM",
    "https://youtu.be/V2nvZYe_q7g?si=SkagJNJNUqCGsPXX",
    "https://youtu.be/7BL6eInh7qo?si=iwZmF9iWGzUly91r",
    "https://youtu.be/oyi86CljSk4?si=FKQBbJQ1qmi1movv",
    "https://youtu.be/akz9xHL1RQo?si=thHXvVijm4fo9N58",
    "https://youtu.be/4JX-SIkM3uk?si=r2kvpCztaPEoCKoM",
    "https://youtube.com/shorts/zSu-K54fI8s?si=CPriy5v8uCTV5YlW",
    "https://youtube.com/shorts/Wj3GEuwoNWc?si=PdfmvBSYrC7vRtvc",
    "https://youtube.com/shorts/YOY-6VCZhic?si=FSBCIhPkCLPRWTg5",
    "https://youtube.com/shorts/QUe3MG8mrCA?si=-LPWBr6ugtYicH9d",
    "https://youtube.com/shorts/OGx-8hVSkHI?si=yVdRjmuhI38EV51_",
    "https://youtube.com/shorts/ETVU4yeOxB4?si=mV68Bv7q8ozmPg9v",
    "https://youtube.com/shorts/HGLhwI5ieL0?si=Ay_E2DK43slrtRXn",
    "https://youtube.com/shorts/WpDc9yNGDxA?si=zrrvKuu-c_ZOemYi",
    "https://youtube.com/shorts/N-9NUXvdvcM?si=rD_uqweUQou5VAvD",
    "https://youtube.com/shorts/sN6RtRiT8D8?si=MThSH4PMl5O1OVTN",
];

const VideoCard: React.FC<{
  video: VideoData;
  onClick: (video: VideoData, event: React.MouseEvent | React.KeyboardEvent) => void;
}> = ({ video, onClick }) => {
  const [title, setTitle] = useState('Loading...');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const videoId = getYoutubeVideoId(video.youtubeUrl);
  
  // Try different thumbnail qualities in sequence
  const tryThumbnailUrl = (url: string) => {
    if (!videoId) return;
    
    const img = new Image();
    img.crossOrigin = 'anonymous'; // Handle CORS if needed
    
    img.onload = () => {
      // Only set the URL if it's not an error image
      if (img.width > 0 && img.height > 0) {
        setThumbnailUrl(url);
      } else {
        handleThumbnailError(url);
      }
    };
    
    img.onerror = () => handleThumbnailError(url);
    img.src = url;
  };
  
  const handleThumbnailError = (failedUrl: string) => {
    console.log(`Failed to load thumbnail: ${failedUrl}`);
    
    if (failedUrl.includes('maxresdefault')) {
      // Try hqdefault if maxresdefault fails
      tryThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
    } else if (failedUrl.includes('hqdefault')) {
      // Try mqdefault if hqdefault fails
      tryThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`);
    } else if (failedUrl.includes('mqdefault')) {
      // Try default if mqdefault fails
      tryThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/default.jpg`);
    } else {
      // All options failed, show placeholder
      setThumbnailUrl('');
    }
  };

  useEffect(() => {
    if (!videoId) return;
    
    // Start with the highest quality thumbnail
    console.log(`Loading thumbnails for video ID: ${videoId}`);
    tryThumbnailUrl(`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`);
    
    // Also try the first frame as a fallback (sometimes works when others don't)
    const firstFrameUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
    setTimeout(() => {
      if (!thumbnailUrl) {
        console.log('Trying first frame as fallback');
        tryThumbnailUrl(firstFrameUrl);
      }
    }, 1000);
    
    // Fetch video title
    const fetchVideoTitle = async () => {
      try {
        const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(video.youtubeUrl)}&format=json`);
        const data = await response.json();
        setTitle(data.title);
      } catch (error) {
        setTitle('Video Title Unavailable');
        console.error('Error fetching video title:', error);
      }
    };
    
    fetchVideoTitle();
  }, [video.youtubeUrl, videoId]);

  return (
    <div 
      className="video-card"
      onClick={(e) => onClick(video, e)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick(video, e);
      }}
    >
      <div className="video-content">
        <div className="video-info">
          <div className="video-title">{title}</div>
          <div className="video-type">
            <span>
              {video.type === 'shorts' ? (
                <>
                  <span role="img" aria-label="shorts">📱</span> Shorts
                </>
              ) : (
                <>
                  <span role="img" aria-label="video">🎥</span> Video
                </>
              )}
            </span>
          </div>
        </div>
        <div className="video-thumbnail">
          <div className="thumbnail-container">
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt={title}
                className="thumbnail-img"
                loading="lazy"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  console.log('Image error:', img.src);
                  // Let the parent component handle the error
                  setThumbnailUrl('');
                }}
              />
            ) : (
              <div className="thumbnail-placeholder">
                <span>Loading thumbnail...</span>
              </div>
            )}
            {/* Play button removed as per request */}
          </div>
        </div>
      </div>
    </div>
  );
};

const VideoSection: React.FC<{
  title: string;
  videos: VideoData[];
  onClick: (video: VideoData, event: React.MouseEvent | React.KeyboardEvent) => void;
}> = ({ title, videos, onClick }) => {
  if (videos.length === 0) return null;

  return (
    <div className="video-section">
      <h2>{title}</h2>
      <div className="video-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} onClick={onClick} />
        ))}
      </div>
    </div>
  );
};

const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}> = ({ currentPage, totalPages, setCurrentPage }) => (
  <div className="pagination">
    <button
      disabled={currentPage === 1}
      onClick={() => setCurrentPage(currentPage - 1)}
      title="Previous page"
    >
      ← Previous
    </button>
    <span>Page {currentPage} of {totalPages}</span>
    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
      title="Next page"
    >
      Next →
    </button>
  </div>
);

function BroadcastsPage(): ReactElement {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'videos' | 'shorts'>('videos');
  const videosPerPage = 6;

  const videoData: VideoData[] = videoUrls.map((url, index) => ({
    id: String(index + 1),
    youtubeUrl: url,
    type: getYoutubeContentType(url),
  }));

  const regularVideos = videoData.filter(video => video.type === 'video');
  const shorts = videoData.filter(video => video.type === 'shorts');

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;

  const paginatedVideos = regularVideos.slice(indexOfFirstVideo, indexOfLastVideo);
  const paginatedShorts = shorts.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil((activeTab === 'videos' ? regularVideos.length : shorts.length) / videosPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handleVideoClick = (video: VideoData, event: React.MouseEvent | React.KeyboardEvent) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'IFRAME' || target.className === 'video-embed') return;
    history.push('/broadcasts/details', { video });
  };

  return (
    <Layout>
      <div className="video-container">
        <h1>Featured Content</h1>
        <p className="video-subtitle">Watch our curated collection of videos and shorts</p>
        
        <div className="video-tabs">
          <button 
            className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            🎥 Videos
          </button>
          <button 
            className={`tab-button ${activeTab === 'shorts' ? 'active' : ''}`}
            onClick={() => setActiveTab('shorts')}
          >
            📱 Shorts
          </button>
        </div>

        {activeTab === 'videos' && (
          <>
            <VideoSection
              title="Latest Videos"
              videos={paginatedVideos}
              onClick={handleVideoClick}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}

        {activeTab === 'shorts' && (
          <>
            <VideoSection
              title="YouTube Shorts"
              videos={paginatedShorts}
              onClick={handleVideoClick}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </>
        )}
      </div>
    </Layout>
  );
}

export default BroadcastsPage;
