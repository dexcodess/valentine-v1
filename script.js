class LoveGame {
    constructor() {
        this.currentStep = 0;
        this.previousStep = null;
        this.letters = {
            1: {
                title: "My Dearest 💕",
                content: `From the moment I met you, my world became brighter. Your smile lights up every room, your laughter is my favorite melody, and your kindness inspires me every day.

You have this incredible way of making ordinary moments feel extraordinary. Whether we're doing something exciting or just enjoying a quiet evening together, being with you is always the highlight of my day.

Thank you for being you - amazing, wonderful, and absolutely perfect.

With all my heart 💕`
            },
            2: {
                title: "To My Sunshine 🌟",
                content: `Do you know how amazing you are? You have this strength that quietly inspires everyone around you, this wisdom that guides others, and this heart that loves so deeply.

I love watching you pursue your passions, seeing your eyes light up when you talk about things you care about, and knowing that I get to be part of your journey.

You make me want to be better, not because you expect it, but because being around someone so incredible naturally brings out the best in me.

Forever yours 🌟`
            },
            3: {
                title: "My Everything 💖",
                content: `Life with you is an adventure I never want to end. Every day brings new reasons to love you more.

I love the way you care for others, the way you find joy in small things, the way you challenge me to grow, and the way you love with your whole heart.

You're not just my favorite person - you're my best friend, my confidant, my partner in crime, and my home all rolled into one amazing package.

Thank you for choosing me, too.

Always and forever 💖`
            }
        };
        this.init();
    }

    init() {
        console.log('Initializing LoveGame...');
        this.showStep(0);
        this.createFloatingHearts();
        this.bindKeyboardEvents();
        console.log('LoveGame initialized successfully');
    }

    showStep(stepNumber) {
        console.log('Showing step:', stepNumber);
        // Hide all screens
        const allScreens = document.querySelectorAll('.game-screen');
        console.log('Found screens:', allScreens.length);
        allScreens.forEach(screen => {
            screen.classList.remove('active');
        });

        // Show current screen
        const currentScreen = document.querySelector(`[data-step="${stepNumber}"]`);
        console.log('Current screen element:', currentScreen);
        if (currentScreen) {
            currentScreen.classList.add('active');
            this.currentStep = stepNumber;
            this.addStepEffects(stepNumber);
            console.log('Step', stepNumber, 'activated successfully');
        } else {
            console.error('Step', stepNumber, 'not found!');
        }
    }

    handleChoice(stepNumber, choice) {
        this.previousStep = stepNumber;
        
        if (choice) {
            // YES choice - move forward
            if (stepNumber === 0) {
                this.showStep(2); // Skip to Rose Day
            } else if (stepNumber === 9) {
                this.showStep(10); // Move to Momo Final Proposal
            } else if (stepNumber === 10) {
                this.showStep(12); // Move to Ultimate Happy Ending
            }
        } else {
            // NO choice - show punishment
            if (stepNumber === 0) {
                this.showStep(1); // Intro punishment
            } else if (stepNumber === 9) {
                this.showStep(1); // Back to intro punishment
            } else if (stepNumber === 10) {
                this.showStep(11); // Momo punishment
            }
        }
    }

    tryAgain(stepNumber) {
        this.showStep(stepNumber);
    }

    nextStep() {
        if (this.currentStep < 9) {
            this.showStep(this.currentStep + 1);
        }
    }

    openLetter(letterNumber) {
        const modal = document.getElementById('letter-modal');
        const titleElement = document.getElementById('letter-title');
        const textElement = document.getElementById('letter-text');
        
        if (this.letters[letterNumber]) {
            titleElement.textContent = this.letters[letterNumber].title;
            textElement.textContent = this.letters[letterNumber].content;
            modal.classList.add('active');
        }
    }

    closeLetter() {
        const modal = document.getElementById('letter-modal');
        modal.classList.remove('active');
    }

    restart() {
        this.currentStep = 0;
        this.previousStep = null;
        this.showStep(0);
    }

    addStepEffects(stepNumber) {
        // Add special effects for specific steps
        switch (stepNumber) {
            case 12:
                this.createConfetti();
                this.createPetals();
                break;
            case 10:
                this.addPulseEffect();
                break;
        }
    }

    createFloatingHearts() {
        console.log('Creating floating hearts...');
        setInterval(() => {
            this.createHeart();
        }, 3000);
    }

    createHeart() {
        try {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.innerHTML = ['💕', '💖', '💗', '💝', '🌸'][Math.floor(Math.random() * 5)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDuration = (Math.random() * 5 + 8) + 's';
            heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.parentNode.removeChild(heart);
                }
            }, 15000);
        } catch (error) {
            console.error('Error creating heart:', error);
        }
    }

    createConfetti() {
        const colors = ['#ff6b9d', '#feca57', '#48dbfb', '#ff9ff3', '#54a0ff'];
        const confettiCount = 50;

        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = (Math.random() * 2) + 's';
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    if (confetti.parentNode) {
                        confetti.parentNode.removeChild(confetti);
                    }
                }, 5000);
            }, i * 50);
        }
    }

    createPetals() {
        const petalColors = ['#ffb6c1', '#ffc0cb', '#ffe4e1', '#ffd1dc'];
        const petalCount = 30;

        for (let i = 0; i < petalCount; i++) {
            setTimeout(() => {
                const petal = document.createElement('div');
                petal.className = 'petal';
                petal.innerHTML = '🌸';
                petal.style.left = Math.random() * 100 + '%';
                petal.style.animationDuration = (Math.random() * 4 + 6) + 's';
                petal.style.fontSize = (Math.random() * 15 + 20) + 'px';
                petal.style.color = petalColors[Math.floor(Math.random() * petalColors.length)];
                
                document.body.appendChild(petal);
                
                setTimeout(() => {
                    if (petal.parentNode) {
                        petal.parentNode.removeChild(petal);
                    }
                }, 10000);
            }, i * 100);
        }
    }

    addPulseEffect() {
        const specialIllustration = document.querySelector('.illustration.special');
        if (specialIllustration) {
            specialIllustration.style.animation = 'pulse 2s ease-in-out infinite';
        }
    }

    bindKeyboardEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                const activeScreen = document.querySelector('.game-screen.active');
                const primaryBtn = activeScreen.querySelector('.btn-yes, .btn-next, .btn-restart');
                if (primaryBtn) {
                    primaryBtn.click();
                }
            } else if (e.key === 'Escape') {
                this.closeLetter();
            }
        });
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing game...');
    window.game = new LoveGame();
    console.log('Game initialized:', window.game);
    
    // Add loaded class to body for fade-in effect
    document.body.classList.add('loaded');
});

// Prevent zoom on double tap for mobile
let lastTouchEnd = 0;
document.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        e.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Console easter egg
console.log('%c💕 Love Game Loaded! 💕', 'color: #ff6b9d; font-size: 20px; font-weight: bold;');
console.log('%cMake the right choices! 😉', 'color: #feca57; font-size: 14px;');
