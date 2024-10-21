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
    const aboutItems = document.querySelectorAll('.about-item');
    const aboutText = document.getElementById('aboutText');
    const aboutImage = document.getElementById('aboutImage');

    // Content Data
    const content = {
        item1: {
            text: 'LEVENBERT is a distinguished global network of professional consulting services firms, that delivers top-tier consulting services across various domains, including Consulting and Advisory, Learning and Development, Innovation and Ideation, and Technology Professional Consulting Solutions. Our aim is to support clients in making their businesses more agile, relevant, and growth-oriented. Leveraging our integrated expertise, we collaborate closely with local, regional, and global clients to accelerate value creation, mitigate risks, and provide consultancy that drives optimal results. Our mission is to offer scalable turnkey implementation solutions, underpinned by qualified expertise, well-proven methodologies, creativity, and innovation. We ensure our solutions are always aligned with local cultures and the aspirations of our clients toward excellence.  ',
            image: 'assets/img/map02.png'
        },
        item2: {
            text: 'Deliver transformative and impactful consulting services by building on the trust of our customers. Leveraging our expertise, proven methodologies, and culturally aligned approach, we are committed to driving excellence.',
            image: 'assets/img/map02.png'
        },
        item3: {
            text: 'A new vision, we change the concept of consulting work to simulate reality through the inspiration of the future and make it in a scientific and methodological framework to be a reality to create future opportunities. A new path, in which we apply methodologies of excellence. In doing so, we transform the future of business and performance.',
            image: 'assets/img/map02.png'
        }
    };

    // Event Listener for Items
    aboutItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');

            // Update Text
            aboutText.innerHTML = `<p>${content[target].text}</p>`;

            // Update Image
            aboutImage.src = content[target].image;
        });
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