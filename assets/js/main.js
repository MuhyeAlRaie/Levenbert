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
            text: 'Our story began many years ago, when we decided to make a difference...',
            image: 'assets/img/map02.png'
        },
        item2: {
            text: 'Our mission is to innovate and create immersive virtual experiences...',
            image: 'path-to-mission-image.png'
        },
        item3: {
            text: 'Our vision is to lead the world into a new era of digital interaction...',
            image: 'path-to-vision-image.png'
        },
        item4: {
            text: 'Our mission is to innovate and create immersive virtual experiences...',
            image: 'path-to-mission-image.png'
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
