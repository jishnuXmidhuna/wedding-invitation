import useReveal from "../../hooks/useReveal";

import "../../styles/reveal.css";
import "../../styles/savedate.css";

function SaveDatePage() {

  const { ref, visible } = useReveal();

  return (

    <section className="scene savedate-scene">

      <div className="savedate-shell">

        <div
          ref={ref}
          data-in={visible ? "1" : "0"}
          className="savedate-content"
        >

          <p className="date-label reveal">
            DATE
          </p>

          <div className="date-frame-wrapper reveal delay-1">

            <img
              src="/images/date-frame-clean.webp"
              alt=""
              className="date-frame-image"
            />

            <div className="date-overlay">

              <div className="date-number">
                27
              </div>

              <div className="date-month">
                JANUARY
              </div>

              <div className="date-year">
                2027
              </div>

            </div>

          </div>

          <div className="date-info reveal delay-2">

            <div className="mini-frame">

              <img
                src="/images/gun-saat-clean.webp"
                alt=""
                className="mini-frame-image"
              />

              <div className="mini-frame-text">
                WEDNESDAY
              </div>

            </div>

            <div className="mini-frame">

              <img
                src="/images/gun-saat-clean.webp"
                alt=""
                className="mini-frame-image"
              />

              <div className="mini-frame-time">
                10 : 50
              </div>

            </div>

          </div>

          <a
            href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Jishnu%20%26%20Midhina%20Wedding&dates=20270127T105000/20270127T135000&location=Sana%20Auditorium%2C%20Randamkutty%2C%20Kollam&details=You%20are%20warmly%20invited%20to%20celebrate%20the%20wedding%20of%20Jishnu%20and%20Midhina"
            target="_blank"
            rel="noopener noreferrer"
            className="calendar-btn reveal delay-3"
          >

            <span className="calendar-icon">
              
            </span>

            Add To Calendar

          </a>

        </div>

      </div>

    </section>

  );
}

export default SaveDatePage;