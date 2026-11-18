import useReveal from "../../hooks/useReveal";

import "../../styles/reveal.css";
import "../../styles/closing.css";

function ClosingPage() {

  const { ref, visible } = useReveal();

  return (

    <section className="scene closing-scene">

      <div className="closing-shell">

        <div
          ref={ref}
          data-in={visible ? "1" : "0"}
          className="closing-content"
        >

          <h1 className="closing-names reveal">
            Midhina <span>and</span> Jishnu
          </h1>

          <div className="closing-divider reveal delay-1">

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

          <p className="closing-message reveal delay-2">
            Your presence will complete this day.
          </p>

          <div className="pearl-divider reveal delay-3">

            <div className="pearl-line"></div>

            <div className="pearl"></div>

            <div className="pearl-line"></div>

          </div>

          <p className="closing-date reveal delay-4">
            27 JANUARY 2027
          </p>

        </div>

      </div>

    </section>

  );
}

export default ClosingPage;