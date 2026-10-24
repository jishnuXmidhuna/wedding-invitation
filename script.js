document.addEventListener("DOMContentLoaded", () => {

    const splashScreen = document.getElementById("splash-screen");
    const musicButton = document.getElementById("music-toggle");

    // Lock scrolling until invitation opened
    document.body.style.overflow = "hidden";

    // DOOR OPENING - Bound directly to the master container as specified
    if (splashScreen) {
        splashScreen.addEventListener("click", () => {

            splashScreen.classList.add("open-active");

            // Let the premium 1.6s CSS transition handle the layout fade out naturally
            setTimeout(() => {
                document.body.style.overflow = "auto";
                revealSections();
            }, 1600);
        });
    }

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

    if (musicButton) {
        musicButton.addEventListener("click", (e) => {
            // Stops the click from bubbling up and triggering the door opening instantly
            e.stopPropagation(); 
            
            musicPlaying = !musicPlaying;

            if (musicPlaying) {
                musicButton.textContent = "🔊";
            } else {
                musicButton.textContent = "♪";
            }
        });
    }

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
