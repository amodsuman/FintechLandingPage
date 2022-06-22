// Navbar BG & Padding Change On Scrolling
const nav = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 5) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
    }
});

//Hamburger Menu
const hamburger = document.getElementById('hamburger');
const hammenu = document.getElementById('hammenu');
const span1 = document.getElementById('span1');
const span2 = document.getElementById('span2');
hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        span1.style.marginBottom = '8px';
        span2.style.width = '20px';
        span1.style.transform = 'rotate(0deg)';
        span2.style.transform = 'rotate(0deg)';
        hammenu.style.left = '-500px';
    } else {
        hamburger.classList.add('active');
        span1.style.marginBottom = '0px';
        span2.style.width = '32px';
        span1.style.transform = 'rotate(45deg)';
        span2.style.transform = 'rotate(-45deg)';
        hammenu.style.left = '0px';
    }
});

// Swiper JS
var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});