import "../styles/invitation.css";

import HeroPage from "./pages/HeroPage";
import DetailsPage from "./pages/DetailsPage";
import SaveDatePage from "./pages/SaveDatePage";
import EventsPage from "./pages/EventsPage";
import CountdownPage from "./pages/CountdownPage";
import LocationPage from "./pages/LocationPage";
import GalleryPage from "./pages/GalleryPage";
import ClosingPage from "./pages/ClosingPage";

function Invitation() {
  return (
    <main className="invitation">

      <div className="template-background">
        <img
          src="/images/invitation-template.jpg"
          alt=""
          className="template-image"
        />
      </div>

      <div className="invitation-content">

        <HeroPage />

        <DetailsPage />

        <SaveDatePage />

        <EventsPage />

        <CountdownPage />

        <LocationPage />

        <GalleryPage />

        <ClosingPage />

      </div>

      <div className="scroll-indicator">
  <span>Scroll Down</span>

  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M6 9L12 15L18 9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

    </main>
  );
}

export default Invitation;