document.addEventListener('DOMContentLoaded', function () {

    // Start Experience Function (Removed per user request)
    // window.startExperience = ... 

    // Initialize main content visibility immediately
    // Assuming these elements are initially hidden via CSS and need to be shown.
    // If they are already visible by default, these lines can be removed.
    const mainContainer = document.getElementById('main-container');
    const musicControl = document.getElementById('music-control');
    const bgContainer = document.getElementById('bg-container');
    const introOverlay = document.getElementById('intro-overlay'); // If intro overlay exists, hide it

    if (introOverlay) {
        introOverlay.style.display = 'none';
    }
    if (bgContainer) {
        bgContainer.style.opacity = '1';
    }
    if (mainContainer) {
        mainContainer.style.display = 'block';
    }
    if (musicControl) {
        musicControl.style.display = 'block';
    }


    // Background Music (Logic updated to respect Start)
    const musicBtn = document.getElementById('music-toggle');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false; // Music starts paused, user must interact

    musicBtn.addEventListener('click', function () {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-volume-mute"></i> Music';
        } else {
            bgMusic.play();
            musicBtn.innerHTML = '<i class="fas fa-music"></i> Playing';
        }
        isPlaying = !isPlaying;
    });


    // Falling Petals
    const flowers = document.querySelector('.flowers');

    function createPetal() {
        // Removed visibility check since it's always visible now
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = Math.random() * 100 + 'vw';
        petal.style.animationDuration = Math.random() * 3 + 4 + 's';
        petal.style.width = Math.random() * 10 + 10 + 'px';
        petal.style.height = petal.style.width;
        flowers.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 8000);
    }

    setInterval(createPetal, 300);

    // Trigger typing effect on load/scroll
    observeLetter();


    // Love Meter Fill Animation
    const meterFill = document.getElementById('love-meter-fill');
    const percentage = document.querySelector('.percentage');

    // Only animate when main container is visible
    const meterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    meterFill.style.width = '100%';
                    let count = 0;
                    const interval = setInterval(() => {
                        count++;
                        percentage.innerText = count + '%';
                        if (count >= 100) clearInterval(interval);
                    }, 20);
                }, 500);
                meterObserver.disconnect();
            }
        });
    });
    meterObserver.observe(document.querySelector('.love-meter-container'));


    // Typing Effect for Letter
    const textToType = `My dearest Anna Althafunnisa,

You are the poetry I never knew how to write, and the song I never knew how to sing. 
Meeting you was destiny, becoming your friend was a choice, but falling in love with you was beyond my control.

Thank you for being the most amazing part of my life. 
I promise to always be by your side, through every season, every laugh, and every tear. 
You are my safe haven, my joy, and my greatest adventure.

Forever yours,
Faisal ❤️`;

    const typingElement = document.getElementById('typing-text');
    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            // Check for newlines
            if (textToType.charAt(i) === '\n') {
                typingElement.innerHTML += '<br>';
            } else {
                typingElement.innerHTML += textToType.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    function observeLetter() {
        const letterSection = document.querySelector('.letter-section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    observer.disconnect(); // Only type once
                }
            });
        }, { threshold: 0.5 });
        observer.observe(letterSection);
    }


    // Interactive Button
    const loveBtn = document.getElementById('love-btn');

    loveBtn.addEventListener('click', function (e) {
        // Redirect to 3D Flower Page
        window.location.href = "flower.html";
    });

    function createHeartBurst(x, y) {
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart-particle');
            heart.innerHTML = '❤️';
            heart.style.left = x + 'px';
            heart.style.top = y + 'px';
            heart.style.position = 'fixed';
            heart.style.transform = `translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px)`;
            heart.style.opacity = 0;
            heart.style.transition = 'all 1s ease-out';
            heart.style.fontSize = Math.random() * 20 + 10 + 'px';

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.style.opacity = 1;
                heart.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) scale(0)`;
            }, 10);

            setTimeout(() => {
                heart.remove();
            }, 1000);
        }
    }


    // Countdown Timer
    function updateCountdown() {
        const now = new Date();
        let nextValentine = new Date(now.getFullYear(), 1, 14); // Month is 0-indexed, so 1 is Feb

        if (now > nextValentine) {
            nextValentine.setFullYear(now.getFullYear() + 1);
        }

        const diff = nextValentine - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = String(days).padStart(2, '0');
        document.getElementById('hours').innerText = String(hours).padStart(2, '0');
        document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
        document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

});


// Modal Logic
function openModal(src) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById('image-modal').style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modal = document.getElementById('image-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
