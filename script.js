// Elements
const introScreen = document.getElementById("intro-screen");
const invitationContent = document.getElementById("invitation-content");
const medallionButton = document.getElementById("medallion-button");

const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");

const musicButton = document.getElementById("music-toggle");
const music = document.getElementById("bgMusic");

// Hide invitation initially
invitationContent.style.display = "none";

// Opening animation
medallionButton.addEventListener("click", () => {

    medallionButton.style.pointerEvents = "none";

    medallionButton.animate(
        [
            {
                transform: "translate(-50%, -50%) scale(1)"
            },
            {
                transform: "translate(-50%, -50%) scale(0.94)"
            }
        ],
        {
            duration: 250,
            fill: "forwards"
        }
    );

    // Open doors like real doors
    setTimeout(() => {

        leftDoor.style.transform =
            "perspective(2200px) rotateY(-105deg)";

        rightDoor.style.transform =
            "perspective(2200px) rotateY(105deg)";

        medallionButton.style.opacity = "0";

    }, 200);

    // Reveal invitation
    setTimeout(() => {

        introScreen.style.opacity = "0";
        introScreen.style.transition = "opacity 0.8s ease";

    }, 1400);

    setTimeout(() => {

        introScreen.style.display = "none";

        invitationContent.style.display = "block";

        invitationContent.style.opacity = "0";
        invitationContent.style.transform = "translateY(20px)";

        requestAnimationFrame(() => {

            invitationContent.style.transition =
                "opacity 1.2s ease, transform 1.2s ease";

            invitationContent.style.opacity = "1";
            invitationContent.style.transform =
                "translateY(0px)";
        });

    }, 2200);

});


/* -------------------- */
/* COUNTDOWN */
/* -------------------- */

const weddingDate =
new Date("2027-01-27T10:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance < 0) {
        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* -------------------- */
/* MUSIC */
/* -------------------- */

let musicPlaying = false;

musicButton.addEventListener("click", () => {

    if (!music) return;

    if (musicPlaying) {

        music.pause();

        musicPlaying = false;

        musicButton.innerHTML = "♪";

    } else {

        music.play().catch(() => {});

        musicPlaying = true;

        musicButton.innerHTML = "♫";
    }
});


/* -------------------- */
/* SCROLL REVEAL */
/* -------------------- */

const revealElements = document.querySelectorAll(
    ".event-section, .countdown-section, .gallery-section, .story-section, .location-section, .closing-section"
);

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition =
        "all 1s cubic-bezier(.19,1,.22,1)";
});

function revealOnScroll() {

    revealElements.forEach((element) => {

        const rect =
            element.getBoundingClientRect();

        const visiblePoint =
            window.innerHeight * 0.85;

        if (rect.top < visiblePoint) {

            element.style.opacity = "1";
            element.style.transform =
                "translateY(0)";
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* -------------------- */
/* CTA FLOAT */
/* -------------------- */

if (medallionButton) {

    medallionButton.animate(
        [
            {
                transform:
                "translate(-50%, -50%) translateY(0)"
            },
            {
                transform:
                "translate(-50%, -50%) translateY(-6px)"
            },
            {
                transform:
                "translate(-50%, -50%) translateY(0)"
            }
        ],
        {
            duration: 3400,
            iterations: Infinity
        }
    );
}
