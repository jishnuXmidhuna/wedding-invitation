document.addEventListener("DOMContentLoaded", () => {
    
    // 1. SELECT VALID NODES MAPPED TO YOUR DOM
    const invitationContent = document.getElementById("invitation-content");
    const openButton = document.getElementById("medallion"); 
    const splashScreen = document.getElementById("splash-screen");
    const leftDoor = document.querySelector(".left-door");
    const rightDoor = document.querySelector(".right-door");
    const musicButton = document.getElementById("music-toggle");
    
    // Lock viewport scrolling initially while splash panels overlay views
    document.body.style.overflow = "hidden";
    
    // Hide invitation card visibility cleanly without disrupting layout bounds calculation
    invitationContent.style.opacity = "0";
    invitationContent.style.transform = "translateY(40px)";

    // 2. ACTIVE OPEN DOOR TRANSITIONS EVENT 
    openButton.addEventListener("click", () => {
        // Inject transition settings dynamically to allow fluid 3D transformations
        leftDoor.style.transition = "transform 1.6s cubic-bezier(0.25, 1, 0.5, 1)";
        rightDoor.style.transition = "transform 1.6s cubic-bezier(0.25, 1, 0.5, 1)";

        leftDoor.style.transformOrigin = "left center";
        rightDoor.style.transformOrigin = "right center";

        // Spin panels on Y planes out of screen boundaries
        leftDoor.style.transform = "perspective(1500px) rotateY(-110deg)";
        rightDoor.style.transform = "perspective(1500px) rotateY(110deg)";

        // Fade trigger medallion buttons out smoothly
        openButton.style.transition = "opacity 0.6s ease";
        openButton.style.opacity = "0";
        openButton.style.pointerEvents = "none";

        // Unveil main invite framework cards sequentially after door swings finish
        setTimeout(() => {
            splashScreen.style.display = "none";
            document.body.style.overflow = "auto"; // Re-enable window device scrolling

            invitationContent.style.transition = "opacity 1.2s ease, transform 1.2s ease";
            invitationContent.style.opacity = "1";
            invitationContent.style.transform = "translateY(0)";
            
            // Execute layout scroll validation triggers immediately 
            revealOnScroll(); 
        }, 1600);
    });

    // 3. RELIABLE TARGET DATE COUNTDOWN TIMER ENGINE
    const weddingDate = new Date("2027-01-27T10:30:00").getTime(); // Synced to HTML text date

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = weddingDate - now;

        if (difference < 0) {
            document.querySelector(".countdown-section h2").textContent = "The Celebration Has Begun!";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // padStart guarantees uniform single digit text layouts (e.g. "04" days)
        document.getElementById("days").textContent = days.toString().padStart(2, '0');
        document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // 4. AUDIO MUSIC PLAYER TOGGLE TRACKER
    let musicPlaying = false;

    musicButton.addEventListener("click", () => {
        musicPlaying = !musicPlaying;
        
        if (musicPlaying) {
            musicButton.textContent = "🔊";
        } else {
            musicButton.textContent = "♪";
        }
    });

    // 5. PARALLAX SCROLL ENTRY VISIBILITY MATRIX
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

    // Initialize clean hide states across sub-sections
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
});
