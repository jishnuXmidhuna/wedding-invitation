import useReveal from "../../hooks/useReveal";
import "../../styles/location.css";
import "../../styles/reveal.css";

function LocationPage() {

  const { ref, visible } = useReveal();

  const openMaps = () => {

    window.open(
      "https://maps.app.goo.gl/dqybA5qfuhiS15Wx5",
      "_blank"
    );

  };

  return (

    <section className="scene location-scene">

      <div className="location-shell">

        <div
          ref={ref}
          data-in={visible ? "1" : "0"}
          className="location-content"
        >

          <h2 className="location-title reveal">
            Location
          </h2>

          <div className="map-frame reveal delay-1">

            <div className="map-area">

              <iframe
                title="Wedding Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.7112441396757!2d76.6231707!3d8.906414300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fd2480c4a8d3%3A0xdf1df2777f303a26!2sSana%20Auditorium!5e0!3m2!1sen!2sin!4v1794667362270!5m2!1sen!2sin"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />

              <a
                href="https://maps.app.goo.gl/dqybA5qfuhiS15Wx5"
                target="_blank"
                rel="noopener noreferrer"
                className="map-overlay-link"
                aria-label="Open location in Google Maps"
              >
              </a>

            </div>

            <img
              src="/images/konum-v2.webp"
              alt=""
              className="map-frame-image"
            />

            <div className="hall-name">
              Sana Auditorium
            </div>

          </div>

          <p className="location-address reveal delay-2">
            Moonamkutty,
            Kollam,
            Kerala,
            India
          </p>

          <button
            type="button"
            onClick={openMaps}
            className="directions-btn reveal delay-3"
          >

            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"
                stroke="#c9a961"
                strokeWidth="1.6"
              />

              <circle
                cx="12"
                cy="10"
                r="2.4"
                stroke="#c9a961"
                strokeWidth="1.6"
              />
            </svg>

            DIRECTIONS

          </button>

        </div>

      </div>

    </section>

  );
}

export default LocationPage;