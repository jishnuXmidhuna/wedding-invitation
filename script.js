document.addEventListener("DOMContentLoaded", () => {
    
    const splashScreen = document.getElementById("splash-screen");
    const openButton = document.getElementById("open-invitation"); 
    const musicButton = document.getElementById("music-toggle");
    const invitationContent = document.getElementById("invitation-content");
    
    // 1. Lock screen body scrolling interactions instantly on configuration initialization
    document.body.style.overflow = "hidden";

    // 2. DOOR SLIDING ANIMATION ACTION DISPATCHER
    openButton.addEventListener("click", () => {
        // Appends animation trigger class rules to the shutter panels
        splashScreen.classList.add("open-active");

        // Gracefully remove splash screen node components from active render stack 
        setTimeout(() => {
            splashScreen.style.opacity = "0";
            splashScreen.style.visibility = "hidden";
            document.body.style.overflow = "auto"; // Unlock scroll inputs completely
            
            // Fire initial scroll calculations instantly upon opening viewport
            revealSections(); 
        }, 1600); // Perfectly synced to match CSS transition timings
    });

    // 3. TARGET WEDDING COUNTDOWN MATRIX CLOCK ENGINE
    const weddingDate = new Date("2026-12-06T10:30:00").getTime(); // Dec 06, 2026

    function runCountdownTimer() {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        if (difference < 0) {
            document.querySelector(".countdown-section h2").textContent = "The Big Day Has Arrived!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
        
        // Synced helper value text updates for gallery upload widget parameters
        const galleryCountdown = document.getElementById("gallery-countdown");
        if(galleryCountdown) {
             galleryCountdown.textContent = `${days} days ${hours} hours remaining`;
        }
    }

    runCountdownTimer();
    setInterval(runCountdownTimer, 1000);

    // 4. MUSIC CONTROLLER TRACKER
    let musicPlaying = false;
    musicButton.addEventListener("click", () => {
        musicPlaying = !musicPlaying;
        musicButton.textContent = musicPlaying ? "🔊" : "♪";
    });

    // 5. PARALLAX FADE-IN SCROLL ACTIONS MONITOR 
    const sections = document.querySelectorAll(".text-reveal-zone");

    const revealSections = () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            const triggerThreshold = window.innerHeight * 0.82;

            if (top < triggerThreshold) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    // Pre-initialize standard view boundaries array attributes 
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 1.2s cubic-bezier(0.215, 0.610, 0.355, 1), transform 1.2s cubic-bezier(0.215, 0.610, 0.355, 1)";
    });

    window.addEventListener("scroll", revealSections);
});
