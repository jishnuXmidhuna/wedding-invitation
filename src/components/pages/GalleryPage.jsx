import useReveal from "../../hooks/useReveal";
import { useEffect, useState } from "react";

import "../../styles/reveal.css";
import "../../styles/gallery.css";

function GalleryPage() {

  const { ref, visible } = useReveal();

  const galleryOpenDate = new Date("2027-01-27T00:00:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {

    const updateTimer = () => {

      const now = new Date();

      const difference =
        galleryOpenDate.getTime() -
        now.getTime();

      if (difference <= 0) {

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference /
          (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference /
            (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (difference /
            (1000 * 60)) % 60
        ),
      });
    };

    updateTimer();

    const timer =
      setInterval(updateTimer, 60000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="scene gallery-scene">

      <div className="gallery-shell">

        <div
          ref={ref}
          data-in={visible ? "1" : "0"}
          className="gallery-content"
        >

          <div className="title-frame reveal">

            <img
              src="/images/baslik-clean.webp"
              alt=""
              className="title-frame-image"
            />

            <div className="title-frame-text">
              Our favourite moments
            </div>

          </div>

          <p className="gallery-subtitle reveal delay-1">
            The most special stops we've gathered together
          </p>

          <div className="memory-card reveal delay-2">

            <div className="memory-icon">
              ✧
            </div>

            <p className="memory-message">
              Photo &amp; video upload
              will be active on the
              day of the event.
            </p>

            <div className="memory-divider">

              <span></span>

              <svg
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 1.6C13.1 7 17 10.9 22.4 12 17 13.1 13.1 17 12 22.4 10.9 17 7 13.1 1.6 12 7 10.9 10.9 7 12 1.6Z"
                  stroke="#b28a5d"
                  strokeWidth="1.25"
                />

                <path
                  d="M12 8.5C12.35 10.15 13.85 11.65 15.5 12 13.85 12.35 12.35 13.85 12 15.5 11.65 13.85 10.15 12.35 8.5 12 10.15 11.65 11.65 10.15 12 8.5Z"
                  stroke="#b28a5d"
                  strokeWidth="1.1"
                />
              </svg>

              <span></span>

            </div>

            <p className="gallery-timer">

              {timeLeft.days} days{" "}
              {timeLeft.hours} hours{" "}
              {timeLeft.minutes} minutes left

            </p>

            <p className="gallery-open-date">
              OPENS ON 27 JANUARY 2027
            </p>

          </div>

          <div className="bottom-star bloom delay-3">
            ✧
          </div>

        </div>

      </div>

    </section>

  );
}

export default GalleryPage;