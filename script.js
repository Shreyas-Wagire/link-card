function flipCard() {
    const card = document.querySelector('.card-inner');
    card.classList.toggle('flipped');
}

// Add touch support for flipping the card
const card = document.querySelector('.card');
let touchStartX = 0;
let touchEndX = 0;

card.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

card.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left
        if (!document.querySelector('.card-inner').classList.contains('flipped')) {
            flipCard();
        }
    } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right
        if (document.querySelector('.card-inner').classList.contains('flipped')) {
            flipCard();
        }
    }
}

// Add a subtle parallax effect to the profile picture
document.querySelector('.profile-picture-container').addEventListener('mousemove', (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    
    const move = 5; // The maximum number of pixels to move
    const translateX = (x - 0.5) * move;
    const translateY = (y - 0.5) * move;

    e.target.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
});

document.querySelector('.profile-picture-container').addEventListener('mouseleave', (e) => {
    e.target.style.transform = '';
});

// Add a typing effect to the title
const title = document.querySelector('.title');
const originalText = title.textContent;
title.textContent = '';

function typeText(text, index = 0) {
    if (index < text.length) {
        title.textContent += text[index];
        setTimeout(() => typeText(text, index + 1), 100);
    }
}

// Start the typing effect after a short delay
setTimeout(() => typeText(originalText), 1000);

// Add click functionality to skills
document.querySelectorAll('.skill').forEach(skill => {
    skill.addEventListener('click', () => {
        alert(`You clicked on ${skill.textContent}! Add your custom action here.`);
    });
});

// Add hover effect to links
document.querySelectorAll('.link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px)';
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Add counter animation to stats
const stats = document.querySelectorAll('.stat-value');
stats.forEach(stat => {
    const finalValue = parseInt(stat.textContent);
    let currentValue = 0;
    const duration = 2000; // 2 seconds
    const stepTime = 50; // Update every 50ms
    const steps = duration / stepTime;
    const increment = finalValue / steps;

    function updateCounter() {
        currentValue += increment;
        if (currentValue < finalValue) {
            stat.textContent = Math.round(currentValue);
            setTimeout(updateCounter, stepTime);
        } else {
            stat.textContent = finalValue;
        }
    }

    updateCounter();
});

// Theme toggle functionality
let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.querySelector('.theme-toggle-icon').textContent = isDarkMode ? '☀️' : '🌙';
}

// Add event listener to theme toggle button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);