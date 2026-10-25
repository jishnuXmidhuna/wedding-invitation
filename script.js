/* =========================
   ELEMENTS
========================= */

const introScreen = document.getElementById("intro-screen");
const invitationContent = document.getElementById("invitation-content");

const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");

const shadow = document.querySelector(".door-shadow");
const light = document.querySelector(".door-light");

const medallionButton =
document.getElementById("medallion-button");

const musicButton =
document.getElementById("music-toggle");

const music =
document.getElementById("bgMusic");

/* =========================
   INITIAL STATE
========================= */

if (invitationContent) {
    invitationContent.style.display = "none";
}

/* =========================
   DOOR OPENING
========================= */

if (medallionButton) {

    medallionButton.addEventListener("click", () => {

        medallionButton.disabled = true;

        medallionButton.style.transition =
            "opacity .5s ease";

        medallionButton.style.opacity = "0";

        /* Open doors */

        leftDoor.style.transform =
            "rotateY(-100deg)";

        rightDoor.style.transform =
            "rotateY(100deg)";

        /* Add depth */

        if (shadow) {
            shadow.style.opacity = "1";
        }

        /* Golden light */

        if (light) {
            light.style.opacity = "1";
        }

        /* Fade intro */

        setTimeout(() => {

            introScreen.style.transition =
                "opacity 1.2s ease";

            introScreen.style.opacity = "0";

        }, 1600);

        /* Show invitation */

        setTimeout(() => {

            introScreen.style.display = "none";

            invitationContent.style.display =
                "block";

            invitationContent.style.opacity = "0";

            invitationContent.style.transform =
                "translateY(20px)";

            requestAnimationFrame(() => {

                invitationContent.style.transition =
                    "opacity 1.5s ease, transform 1.5s ease";

                invitationContent.style.opacity =
                    "1";

                invitationContent.style.transform =
                    "translateY(0)";
            });

        }, 2800);

    });

}

/* =========================
   COUNTDOWN
========================= */

const weddingDate =
new Date("2027-01-27T10:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        /
        1000
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

setInterval(
    updateCountdown,
    1000
);

/* =========================
   MUSIC
========================= */

let musicPlaying = false;

if (musicButton) {

    musicButton.addEventListener("click", () => {

        if (!music) return;

        if (musicPlaying) {

            music.pause();

            musicButton.innerHTML = "♪";

            musicPlaying = false;

        } else {

            music.play().catch(() => {});

            musicButton.innerHTML = "♫";

            musicPlaying = true;
        }

    });

}

/* =========================
   CINEMATIC SCENE REVEALS
========================= */

const sections = document.querySelectorAll(

`
.hero-section,
.event-section,
.countdown-section,
.gallery-section,
.story-section,
.location-section,
.closing-section
`

);

const observer = new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add(
                "section-active"
            );

        } else {

            entry.target.classList.remove(
                "section-active"
            );

        }

    });

},

{
    threshold: 0.55
}

);

sections.forEach(section => {

    observer.observe(section);

});
