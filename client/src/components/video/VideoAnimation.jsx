import React from 'react';
import './VideoAnimation.css';

const VideoAnimation = ({ showVideo }) => {
  if (!showVideo) return null; // Don't render if showVideo is false

  return (
    <div className="video-container">
      <video
        autoPlay
        muted
        className="fade-out-video"
      >
        <source src="/Intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoAnimation;
