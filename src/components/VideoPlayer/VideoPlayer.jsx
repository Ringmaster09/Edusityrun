import { useRef } from 'react';
import './VideoPlayer.css'; // Adjusted path to match typical React folder structure
import video from '../../assets/videocoll.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const playerRef = useRef(null); // Ref for the outer div (overlay)
  const videoRef = useRef(null); // Ref for the video element

  const closePlayer = (e) => {
    // If the click is on the video element, don't close the player
    if (e.target === videoRef.current) {
      return; // Prevent closing when interacting with the video
    }
    // Otherwise, close the player
    setPlayState(false);
  };

  return (
    <div
      className={`video-player ${playState ? '' : 'hide'}`}
      ref={playerRef}
      onClick={closePlayer}
    >
      <video ref={videoRef} src={video} autoPlay muted controls />
    </div>
  );
};

export default VideoPlayer;