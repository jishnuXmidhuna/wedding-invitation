import useReveal from "../../hooks/useReveal";

import "../../styles/reveal.css";
import "../../styles/details.css";

function DetailsPage() {

  const { ref, visible } = useReveal();

  return (

    <section className="scene details-scene">

      <div className="details-shell">

        <div
          ref={ref}
          data-in={visible ? "1" : "0"}
          className="details-content"
        >

          <div className="details-names reveal">

            <span>Midhina</span>

            <span className="details-and">
              and
            </span>

            <span>Jishnu</span>

          </div>

          <div className="divider reveal delay-1">

            <span></span>

            <i>✧</i>

            <span></span>

          </div>

          <p className="verse reveal delay-2">
            "Two halves of a single whole,
            <br />
            bound forever, in all
            <br />
            seasons of life"
          </p>

          <p className="families-title reveal delay-3">
            OUR FAMILIES
          </p>

          <div className="parents-row reveal delay-4">

            <div className="parent">
              <span>Baburaj</span>
              <span>&</span>
              <span>Mini</span>
            </div>

            <div className="parent-divider"></div>

            <div className="parent">
              <span>Mohanlal</span>
              <span>&</span>
              <span>Kavitha</span>
            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default DetailsPage;