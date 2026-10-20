// Hide invitation content initially
const invitationContent = document.getElementById("invitation-content");
invitationContent.style.display = "none";

// Open invitation button
const openButton = document.getElementById("open-invitation");

openButton.addEventListener("click", () => {

    // Animate doors opening
    const leftDoor = document.querySelector(".left-door");
    const rightDoor = document.querySelector(".right-door");

    leftDoor.style.transition = "transform 1.5s ease";
    rightDoor.style.transition = "transform 1.5s ease";

    leftDoor.style.transformOrigin = "left center";
    rightDoor.style.transformOrigin = "right center";

    leftDoor.style.transform = "perspective(1500px) rotateY(-110deg)";
    rightDoor.style.transform = "perspective(1500px) rotateY(110deg)";

    // Hide controls
    document.querySelector(".door-latch").style.opacity = "0";
    openButton.style.opacity = "0";

    // Show invitation after animation
    setTimeout(() => {

        document.getElementById("splash-screen").style.display = "none";

        invitationContent.style.display = "block";

        invitationContent.style.opacity = "0";
        invitationContent.style.transform = "translateY(40px)";

        setTimeout(() => {
            invitationContent.style.transition =
                "opacity 1s ease, transform 1s ease";

            invitationContent.style.opacity = "1";
            invitationContent.style.transform = "translateY(0)";
        }, 100);

    }, 1600);

});


// COUNTDOWN TIMER

const weddingDate = new Date("2027-02-21T10:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;

    if (difference < 0) {
        return;
    }

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);


// MUSIC BUTTON

const musicButton = document.getElementById("music-toggle");

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    musicPlaying = !musicPlaying;

    if (musicPlaying) {
        musicButton.textContent = "🔊";
    } else {
        musicButton.textContent = "♪";
    }

});


// SCROLL REVEAL ANIMATION

const sections = document.querySelectorAll(
    ".event-details, .countdown-section, .gallery-section, .story-section, .location-section, .closing-section"
);

const revealOnScroll = () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;
        const trigger = window.innerHeight * 0.85;

        if (top < trigger) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition =
        "all 0.8s ease";
});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
