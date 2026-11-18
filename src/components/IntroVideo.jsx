import { useEffect } from "react";
import "../styles/video.css";

function IntroVideo({ onVideoEnd }) {

  useEffect(() => {

    const img = new Image();

    img.src = "/images/invitation-template.webp";

  }, []);

  return (
    <video
      className="intro-video"
      autoPlay
      muted
      playsInline
      preload="auto"
      onEnded={onVideoEnd}
      poster="/images/door-cover.jpg"
    >
      <source
        src="/videos/intro.mp4"
        type="video/mp4"
      />
    </video>
  );
}

export default IntroVideo;