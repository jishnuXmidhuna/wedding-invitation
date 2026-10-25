document.addEventListener("DOMContentLoaded", () => {
    // 1. DATA MATRIX EXTRACTION
    const dbPayload = JSON.parse(document.getElementById("invite-data").textContent);

    const splashScreen = document.getElementById("splash-screen");
    const introVideo = document.getElementById("intro-door-video");
    const scrollHint = document.querySelector(".scroll-hint-btn");
    const invitationContent = document.getElementById("invitation-content");
    const musicButton = document.getElementById("music-toggle");

    // Initialize gate view states
    splashScreen.classList.add("gated-view");
    document.body.style.overflow = "hidden";

    // 2. PARSE AND ASSEMBLE CONTENT MODULES
    document.getElementById("google-maps-link").href = dbPayload.event.googleMapsUrl;
    document.getElementById("live-countdown-msg").textContent = dbPayload.event.countdownMessage;
    document.getElementById("live-memory-title").textContent = dbPayload.event.memoryTitle;

    // Build timeline blocks
    const timelineTarget = document.getElementById("live-timeline-target");
    dbPayload.timelineItems.forEach(item => {
        timelineTarget.innerHTML += `
            <div class="timeline-event">
                <span class="event-time">${item.time}</span>
                <h3>${item.title}</h3>
                <p class="event-desc">${item.description.replace(/\n/g, '<br>')}</p>
            </div>
        `;
    });

    // Build Menu fields
    const menuTarget = document.getElementById("live-menu-target");
    dbPayload.menuItems.forEach(item => {
        menuTarget.innerHTML += `
            <div class="menu-item-card">
                <h4 class="menu-cat-title">${item.category}</h4>
                <h3>${item.name}</h3>
                <p class="event-desc">${item.description}</p>
            </div>
        `;
    });

    // 3. INTRO VIDEO TRIGGER CONTROLLER
    const playIntroSequence = () => {
        if (!splashScreen.classList.contains("gated-view")) return;
        if (scrollHint) scrollHint.style.opacity = "0";

        introVideo.play().then(() => {
            // Track video trajectory and send splash background away exactly as doors hit fully open layout state (frame 00:01.9)
            setTimeout(() => {
                splashScreen.classList.remove("gated-view");
                document.body.style.overflow = "auto";
                executeScrollRevealZone();
            }, 1900);
        }).catch(err => {
            console.log("Audio/Video interaction model deferred: ", err);
            splashScreen.classList.remove("gated-view");
            document.body.style.overflow = "auto";
        });
    };

    splashScreen.addEventListener("click", playIntroSequence);
    invitationContent.addEventListener("click", playIntroSequence);

    // 4. AUDIO LOOP PLAYER WRAP
    let musicPlaying = false;
    const ambientTrack = new Audio("ambient-background.mp3");
    ambientTrack.loop = true;

    if (musicButton) {
        musicButton.addEventListener("click", (e) => {
            e.stopPropagation(); // Stems structural click bubbling
            musicPlaying = !musicPlaying;

            if (musicPlaying) {
                ambientTrack.play().catch(() => console.log("Media playback paused awaiting interaction focus."));
                musicButton.textContent = "🔊";
            } else {
                ambientTrack.pause();
                musicButton.textContent = "♪";
            }
        });
    }

    // 5. LIVE COUNTDOWN ENGINE
    const eventTime = new Date(dbPayload.event.targetTimestamp).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = eventTime - now;

        if (difference <= 0) {
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            document.getElementById("gallery-countdown").textContent = "0 days 0 hours remaining";
            return;
        }

        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(d).padStart(2, "0");
        document.getElementById("hours").textContent = String(h).padStart(2, "0");
        document.getElementById("minutes").textContent = String(m).padStart(2, "0");
        document.getElementById("seconds").textContent = String(s).padStart(2, "0");

        document.getElementById("gallery-countdown").textContent = `${d} days ${h} hours remaining`;
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // 6. MINI QUIZ MODULE ENGINE
    const quizTarget = document.getElementById("quiz-container");
    let currentQuizIndex = 0;

    function renderQuizQuestion() {
        const question = dbPayload.quiz.questions[currentQuizIndex];
        if (!question) {
            quizTarget.innerHTML = `<p class="event-desc" style="text-align:center; font-weight:bold;">🎉 Thank you for playing!</p>`;
            return;
        }

        let optionsHtml = "";
        question.options.forEach((opt, idx) => {
            optionsHtml += `<button class="quiz-option-btn" data-idx="${idx}">${opt}</button>`;
        });

        quizTarget.innerHTML = `
            <div class="quiz-question-wrapper">
                <p class="event-desc" style="margin-bottom:8px; font-weight:bold; color:var(--gold);">Question ${currentQuizIndex + 1} of ${dbPayload.quiz.questions.length}</p>
                <p class="event-desc" style="font-size:1.05rem; margin-bottom:12px; color:var(--text-dark);">${question.prompt}</p>
                <div class="options-box">${optionsHtml}</div>
            </div>
        `;

        quizTarget.querySelectorAll(".quiz-option-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const selectedIdx = parseInt(e.target.getAttribute("data-idx"));
                const buttons = quizTarget.querySelectorAll(".quiz-option-btn");
                
                buttons.forEach((b, i) => {
                    b.disabled = true;
                    if (i === question.correctIndex) b.classList.add("correct");
                    if (i === selectedIdx && i !== question.correctIndex) b.classList.add("wrong");
                });

                setTimeout(() => {
                    currentQuizIndex++;
                    renderQuizQuestion();
                }, 1500);
            });
        });
    }
    renderQuizQuestion();

    // 7. VIEWPORT SCROLL ANIMATOR
    const textRevealContainers = document.querySelectorAll(".text-reveal-zone");

    function executeScrollRevealZone() {
        textRevealContainers.forEach(zone => {
            const distanceTop = zone.getBoundingClientRect().top;
            const thresholdTrigger = window.innerHeight * 0.88;

            if (distanceTop < thresholdTrigger) {
                zone.style.opacity = "1";
                zone.style.transform = "translateY(0)";
            }
        });
    }

    textRevealContainers.forEach(zone => {
        zone.style.opacity = "0";
        zone.style.transform = "translateY(40px)";
        zone.style.transition = "opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1), transform 1.2s cubic-bezier(0.25, 1, 0.5, 1)";
    });

    window.addEventListener("scroll", executeScrollRevealZone);
});
