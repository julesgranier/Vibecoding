// Survey form validation and submission
const surveyForm = document.getElementById('surveyForm');
const allSelects = document.querySelectorAll('.vote-select');

// Track selected values per category to prevent duplicates
const categorySelections = {
    annee: { 1: null, 2: null, 3: null },
    lover: { 1: null, 2: null, 3: null },
    night: { 1: null, 2: null, 3: null },
    luigi: { 1: null, 2: null, 3: null }
};

// Update category selections when a select changes
allSelects.forEach(select => {
    select.addEventListener('change', function() {
        const category = this.dataset.category;
        const rank = this.dataset.rank;
        const value = this.value;

        // Update the tracking object
        categorySelections[category][rank] = value;

        // Remove error styling if present
        this.classList.remove('error');

        // Disable selected options in other selects of the same category
        updateSelectOptions(category);
    });
});

function updateSelectOptions(category) {
    const categorySelects = document.querySelectorAll(`[data-category="${category}"]`);
    const selectedValues = Object.values(categorySelections[category]).filter(v => v);

    categorySelects.forEach(select => {
        const currentValue = select.value;
        const options = select.querySelectorAll('option');

        options.forEach(option => {
            if (option.value === '') return; // Keep the placeholder

            // Disable if selected elsewhere in this category, unless it's the current select's value
            if (selectedValues.includes(option.value) && option.value !== currentValue) {
                option.disabled = true;
                option.style.color = '#ccc';
            } else {
                option.disabled = false;
                option.style.color = '';
            }
        });
    });
}

// Form submission
surveyForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Validate all categories
    let isValid = true;
    const errors = [];

    // Check each category
    Object.keys(categorySelections).forEach(category => {
        const selections = categorySelections[category];
        const values = Object.values(selections);

        // Check if all ranks are filled
        if (values.includes(null) || values.includes('')) {
            isValid = false;
            errors.push(`Veuillez sélectionner les 3 positions pour la catégorie ${getCategoryName(category)}`);
        }

        // Check for duplicates within category
        const uniqueValues = new Set(values.filter(v => v));
        if (uniqueValues.size !== 3) {
            isValid = false;
            errors.push(`Vous ne pouvez pas sélectionner le même porc plusieurs fois dans la catégorie ${getCategoryName(category)}`);

            // Highlight error selects
            const categorySelects = document.querySelectorAll(`[data-category="${category}"]`);
            categorySelects.forEach(s => s.classList.add('error'));
        }
    });

    if (!isValid) {
        showErrorMessage(errors[0]);
        return;
    }

    // If validation passes, show success message
    showSuccessMessage();
});

function getCategoryName(category) {
    const names = {
        annee: 'Porc de l\'Année',
        lover: 'Porc Lover',
        night: 'Porc de la Night',
        luigi: 'Porc Luigi'
    };
    return names[category] || category;
}

function showErrorMessage(message) {
    // Remove existing error message if any
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    // Create and show error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message show';
    errorDiv.innerHTML = `
        <strong>⚠️ Erreur :</strong> ${message}
    `;

    surveyForm.insertBefore(errorDiv, surveyForm.firstChild);

    // Scroll to error
    errorDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Auto-hide after 5 seconds
    setTimeout(() => {
        errorDiv.classList.remove('show');
        setTimeout(() => errorDiv.remove(), 300);
    }, 5000);
}

function showSuccessMessage() {
    // Create success modal
    const modal = document.createElement('div');
    modal.className = 'success-modal';
    modal.innerHTML = `
        <div class="success-content">
            <div class="success-emoji">🎉</div>
            <h2>Vote enregistré !</h2>
            <p>Merci d'avoir participé à la Cérémonie du Porc d'Or 2025 !</p>
            <p>Vos votes ont été soumis avec succès.</p>
            <button class="cta-button" onclick="window.location.href='index.html'" style="margin-top: 1rem;">
                Retour à l'accueil
            </button>
        </div>
    `;

    document.body.appendChild(modal);

    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Log the votes (for development - replace with actual submission later)
    console.log('Votes soumis:', categorySelections);

    // Create confetti celebration
    createCelebrationConfetti();
}

function createCelebrationConfetti() {
    const confettiEmojis = ['🎉', '🎊', '✨', '🏆', '🐷', '⭐', '🎈', '💫', '🌟'];
    const confettiCount = 50;

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];

            const startX = Math.random() * window.innerWidth;
            const endX = startX + (Math.random() - 0.5) * 200;
            const endY = window.innerHeight + 100;
            const rotation = Math.random() * 720;

            confetti.style.cssText = `
                position: fixed;
                left: ${startX}px;
                top: -50px;
                font-size: ${Math.random() * 2 + 1.5}rem;
                pointer-events: none;
                z-index: 10001;
                animation: confettiFall 3s ease-out forwards;
                --endX: ${endX}px;
                --endY: ${endY}px;
                --rotation: ${rotation}deg;
            `;

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

// Add confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(var(--endY)) translateX(calc(var(--endX) - ${window.innerWidth / 2}px)) rotate(var(--rotation));
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

console.log('Survey form ready!');
