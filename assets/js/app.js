// Targeting Navbar
const nav = document.getElementById('header');
const navin = document.getElementById('headerin');

// Navbar BG & Padding Change On Scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY >= 5) {
        nav.style.backgroundColor = 'white';
        nav.style.boxShadow = 'rgba(0, 0, 0, 0.45) 0px 25px 20px -20px';
        navin.style.paddingTop = '10px';
        navin.style.paddingBottom = '10px';
    } else {
        nav.style.backgroundColor = 'transparent';
        nav.style.boxShadow = 'none';
        navin.style.paddingTop = '28px';
        navin.style.paddingBottom = '28px';
    }
})

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