import { useRef, useState } from "react";

import DoorScreen from "./components/DoorScreen";
import IntroVideo from "./components/IntroVideo";
import Invitation from "./components/Invitation";

import "./styles/music.css";

function App() {

  const [scene, setScene] = useState("cover");

  const audioRef = useRef(null);

  const [musicPlaying, setMusicPlaying] =
    useState(false);

  const handleOpen = () => {

    if (audioRef.current) {

      audioRef.current.volume = 0.2;

      audioRef.current
        .play()
        .then(() =>
          setMusicPlaying(true)
        )
        .catch(() => {});
    }

    setScene("video");
  };

  const toggleMusic = () => {

    if (!audioRef.current) return;

    if (musicPlaying) {

      audioRef.current.pause();

      setMusicPlaying(false);

    } else {

      audioRef.current.play();

      setMusicPlaying(true);
    }
  };

  return (
    <>

      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        <source
          src="/audio/bgm.mp3"
          type="audio/mpeg"
        />
      </audio>

      {scene === "cover" && (
        <DoorScreen
          onOpen={handleOpen}
        />
      )}

      {scene === "video" && (
        <IntroVideo
          onVideoEnd={() =>
            setScene("invitation")
          }
        />
      )}

      {scene === "invitation" && (
        <Invitation />
      )}

      {scene !== "cover" && (

        <button
          className="music-toggle"
          onClick={toggleMusic}
          aria-label="Toggle music"
        >
          {musicPlaying ? "♪" : "♫"}
        </button>

      )}

    </>
  );
}

export default App;