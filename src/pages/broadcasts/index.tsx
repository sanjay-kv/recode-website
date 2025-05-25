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
  let videoId = '';
  const normalMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^&\s]+)/);
  if (normalMatch) videoId = normalMatch[1];
  else if (shortsMatch) videoId = shortsMatch[1];
  return videoId;
};

const getYoutubeContentType = (url: string): 'video' | 'shorts' =>
  url.includes('/shorts/') ? 'shorts' : 'video';

const videoUrls: string[] = [
    "https://youtu.be/Fl2L9bXSRy0?si=mDQ4mU2M4GzpDPTA",
    "https://youtu.be/vuUusiD7EDM?si=zQFzeW8wBcC-MJ_m",
    "https://youtu.be/xdjZ0HXADjE?si=FDcTk-SPIiu-TJOS",
    "https://youtu.be/DmYe2itxSQA?si=fqriZcdme9ztpnAC",
    "https://youtu.be/V2nvZYe_q7g?si=SkagJNJNUqCGsPXX",
    "https://youtube.com/shorts/tbJCUeQi7dc?si=Nm0GBq2I2wCiLKcx",
    "https://youtube.com/shorts/vZdKQsPxTSg?si=R_FOujIPQvsL2TWz",
    "https://youtube.com/shorts/zQqnoSp5WHc?si=sy4bKGSB2wRGOFg-",
    "https://youtube.com/shorts/P_sE06UAFHg?si=5XmWp3-VkqNmytbX",
    "https://youtube.com/shorts/2nbfpbVzW0I?si=YVLij5SUc1-o_E3m",
];

const VideoCard: React.FC<{
  video: VideoData;
  onClick: (video: VideoData, event: React.MouseEvent | React.KeyboardEvent) => void;
}> = ({ video, onClick }) => {
  const [title, setTitle] = useState('Loading...');
  const [thumbnailError, setThumbnailError] = useState(false);
  const videoId = getYoutubeVideoId(video.youtubeUrl);

  useEffect(() => {
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

    setThumbnailError(false);
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
          <div className="video-title"><strong>{title}</strong></div>
          <div className="video-type">{video.type === 'shorts' ? '📱 Shorts' : '🎥 Video'}</div>
        </div>
        <div className="video-thumbnail">
          {!thumbnailError && (
            <img
              src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title}
              loading="lazy"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                if (img.src.includes('maxresdefault')) {
                  img.src = `https://i.ytimg.com/vi/${videoId}/sddefault.jpg`;
                } else if (img.src.includes('sddefault')) {
                  img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
                } else if (img.src.includes('hqdefault')) {
                  img.src = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
                } else {
                  setThumbnailError(true);
                }
              }}
            />
          )}
          <div className="video-play-button">▶</div>
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
    >
      Previous
    </button>
    <span>Page {currentPage} of {totalPages}</span>
    <button
      disabled={currentPage === totalPages}
      onClick={() => setCurrentPage(currentPage + 1)}
    >
      Next
    </button>
  </div>
);

function BroadcastsPage(): ReactElement {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState<'videos' | 'shorts'>('videos');
  const videosPerPage = 9;

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
