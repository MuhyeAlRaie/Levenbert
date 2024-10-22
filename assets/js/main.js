// Counter Functionality
document.addEventListener("DOMContentLoaded", function() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-count');
            const count = +counter.innerText;
            const speed = 200; // The lower the slower
            const increment = Math.ceil(target / speed);
            if (count < target) {
                counter.innerText = count + increment;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.business-card'); // Updated selector to match your cards
    const businessLineSection = document.querySelector('.business-line-section');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const newBg = this.getAttribute('data-bg');
            businessLineSection.style.backgroundImage = newBg; // Change background image on hover

            // Add inactive class to all other cards
            cards.forEach(otherCard => {
                if (otherCard !== this) {
                    otherCard.classList.add('inactive');
                }
            });
        });

        card.addEventListener('mouseleave', function() {
            businessLineSection.style.backgroundImage = "url('')"; // Reset background on mouse leave

            // Remove inactive class from all cards
            cards.forEach(otherCard => {
                otherCard.classList.remove('inactive');
            });
        });
    });
});