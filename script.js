document.addEventListener("DOMContentLoaded", () => {

    const splashScreen = document.getElementById("splash-screen");
    const openButton = document.getElementById("open-invitation");
    const musicButton = document.getElementById("music-toggle");

    // Lock scrolling until invitation opened
    document.body.style.overflow = "hidden";

    // DOOR OPENING
    openButton.addEventListener("click", () => {

        splashScreen.classList.add("open-active");

        setTimeout(() => {
            splashScreen.style.opacity = "0";
            splashScreen.style.visibility = "hidden";
            splashScreen.style.pointerEvents = "none";

            document.body.style.overflow = "auto";

            revealSections();
        }, 1600);
    });

    // COUNTDOWN TIMER
    const weddingDate = new Date("2026-12-06T10:30:00").getTime();

    function runCountdownTimer() {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        if (difference <= 0) {
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (difference % (1000 * 60)) /
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

        const galleryCountdown = document.getElementById("gallery-countdown");

        if (galleryCountdown) {
            galleryCountdown.textContent =
                `${days} days ${hours} hours remaining`;
        }
    }

    runCountdownTimer();
    setInterval(runCountdownTimer, 1000);

    // MUSIC BUTTON
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
    const sections = document.querySelectorAll(".text-reveal-zone");

    function revealSections() {
        sections.forEach(section => {

            const top = section.getBoundingClientRect().top;
            const trigger = window.innerHeight * 0.85;

            if (top < trigger) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    }

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition =
            "opacity 1s ease, transform 1s ease";
    });

    window.addEventListener("scroll", revealSections);

});
