// CTA Button - Submit vote
document.querySelector('.cta-button')?.addEventListener('click', () => {
    window.location.href = 'survey.html';
});

// Add fade-in animation on scroll for nominee cards
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to all nominee cards
document.querySelectorAll('.nominee-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Create confetti explosion when hero image loads
function createConfetti() {
    const heroImage = document.querySelector('.hero-image');
    if (!heroImage) return;

    const confettiEmojis = ['🎉', '🎊', '✨', '🏆', '🐷', '⭐', '🎈', '💫', '🌟'];
    const confettiCount = 50;

    setTimeout(() => {
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-particle';
            confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];

            // Calculate angle for 360-degree explosion
            const angle = (i / confettiCount) * Math.PI * 2;
            const distance = Math.random() * 400 + 300;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            const rotation = Math.random() * 1080;
            const delay = Math.random() * 0.3;

            confetti.style.cssText = `
                position: absolute;
                left: 50%;
                top: 50%;
                font-size: ${Math.random() * 2.5 + 2.5}rem;
                pointer-events: none;
                animation: confettiExplosion 3s ease-out forwards;
                animation-delay: ${delay}s;
                --endX: ${endX}px;
                --endY: ${endY}px;
                --rotation: ${rotation}deg;
                opacity: 0;
                z-index: 1000;
            `;

            heroImage.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3500 + delay * 1000);
        }
    }, 1000);
}

// Add confetti animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiExplosion {
        0% {
            transform: translate(0, 0) rotate(0deg) scale(0.5);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        20% {
            transform: translate(calc(var(--endX) * 0.3), calc(var(--endY) * 0.1)) rotate(calc(var(--rotation) * 0.3)) scale(1.2);
            opacity: 1;
        }
        70% {
            opacity: 1;
        }
        100% {
            transform: translate(var(--endX), var(--endY)) rotate(var(--rotation)) scale(0.8);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Trigger confetti on page load
window.addEventListener('load', createConfetti);

console.log('Cérémonie du Porc d\'Or 2025 loaded!');
