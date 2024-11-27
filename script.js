const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
});

// Carousel Script
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentIndex = 0;
const slideCount = slides.children.length;

function updateCarousel() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex <= 0) ? slideCount - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex >= slideCount - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

setInterval(() => {
    currentIndex = (currentIndex >= slideCount - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}, 5000); // Auto slide every 5 seconds

document.addEventListener('DOMContentLoaded', () => {
    const searchToggle = document.getElementById('search-toggle');
    const searchContainer = document.getElementById('search-container');

    searchToggle.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default anchor behavior
        searchContainer.classList.toggle('show');
        document.getElementById('search-bar').focus(); // Focus on the search bar when shown
    });

    // Optionally, close the search bar when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchContainer.contains(event.target) && !searchToggle.contains(event.target)) {
            searchContainer.classList.remove('show');
        }
    });
});

