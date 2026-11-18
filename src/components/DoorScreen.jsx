import "../styles/door.css";

function DoorScreen({ onOpen }) {
  return (
    <section
      className="cover-screen"
      onClick={onOpen}
    >
      <img
        src="/images/door-cover.jpg"
        alt="Wedding Door"
        className="door-cover"
      />

      <div className="tap-message">
        TAP TO OPEN
      </div>
    </section>
  );
}

export default DoorScreen;