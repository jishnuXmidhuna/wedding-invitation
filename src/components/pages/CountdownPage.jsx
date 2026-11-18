import useReveal from "../../hooks/useReveal";
import { useEffect, useState } from "react";

import "../../styles/reveal.css";
import "../../styles/countdown.css";

function CountdownPage() {

  const { ref, visible } = useReveal();

  const weddingDate = new Date("2027-01-27T10:50:00");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const updateCountdown = () => {

      const now = new Date();
      const difference = weddingDate.getTime() - now.getTime();

      if (difference <= 0) {

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),
        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),
        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    updateCountdown();

    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);

  }, []);

  return (

    <section className="scene countdown-scene">

      <div className="countdown-shell">

        <div
          ref={ref}
          data-in={visible ? "1" : "0"}
          className="countdown-content"
        >

          <p className="countdown-label reveal">
            TIME UNTIL WE MEET
          </p>

          <div className="countdown-divider reveal delay-1">

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

          <div className="days-block reveal delay-2">

            <div className="days-number">
              {timeLeft.days}
            </div>

            <div className="days-label">
              DAYS
            </div>

          </div>

          <div className="countdown-grid reveal delay-3">

            <div className="countdown-unit">

              <div className="countdown-value">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>

              <div className="countdown-unit-label">
                HOURS
              </div>

            </div>

            <div className="colon">:</div>

            <div className="countdown-unit">

              <div className="countdown-value">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>

              <div className="countdown-unit-label">
                MINUTES
              </div>

            </div>

            <div className="colon">:</div>

            <div className="countdown-unit">

              <div className="countdown-value">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>

              <div className="countdown-unit-label">
                SECONDS
              </div>

            </div>

          </div>

          <p className="countdown-quote reveal delay-4">
            Two souls joining in a love as deep as the sea.
          </p>

        </div>

      </div>

    </section>

  );
}

export default CountdownPage;