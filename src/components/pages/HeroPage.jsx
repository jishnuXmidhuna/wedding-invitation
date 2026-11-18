import useReveal from "../../hooks/useReveal";

import "../../styles/reveal.css";
import "../../styles/hero.css";

function HeroPage() {

  const { ref, visible } = useReveal();

  return (

    <section className="scene hero-scene">

      <div className="hero-shell">

        <div
          ref={ref}
          data-in={visible ? "1" : "0"}
          className="hero-content"
        >

          <div className="hero-text">

            <h1 className="hero-name reveal">
              Midhina
            </h1>

            <span className="and reveal delay-2">
              and
            </span>

            <h1 className="hero-name reveal delay-3">
              Jishnu
            </h1>

          </div>

        </div>

      </div>

    </section>

  );
}

export default HeroPage;