import useReveal from "../../hooks/useReveal";

import "../../styles/reveal.css";
import "../../styles/events.css";

function EventsPage() {

  const { ref, visible } = useReveal();

  return (

    <section className="scene events-scene">

      <div className="events-shell">

        <div
          ref={ref}
          data-in={visible ? "1" : "0"}
          className="events-content"
        >

          <div className="title-frame reveal">

            <img
              src="/images/baslik-clean.webp"
              alt=""
              className="title-frame-image"
            />

            <div className="title-frame-text">
              Line of the Day
            </div>

          </div>

          <div className="timeline-item reveal delay-1">

            <div className="event-time">
              10:50
            </div>

            <h2 className="event-title">
              Vivaha
            </h2>

            <p className="event-text">
              "The official ceremony will begin together with our
              <br />
              families and loved ones, surrounded by the
              <br />
              people who mean the absolute
              <br />
              most to us as we take
              <br />
              this next big step."
            </p>

            <p className="event-location">
              Sana Auditorium Moonamkutty, Kollam
            </p>

          </div>

          <div className="timeline-divider reveal delay-2">
            ✧
          </div>

          <div className="event-logo bloom delay-3">

            <img
              src="/images/jm-logo.png"
              alt="JM Monogram"
              className="event-logo-image"
            />

          </div>

        </div>

      </div>

    </section>

  );
}

export default EventsPage;