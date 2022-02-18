// 18 - Feb - 2022

const menuBtn = document.getElementById('menu-btn');
const searchBtn = document.getElementById('search-btn');
const loginBtn = document.getElementById('login-btn');

const navBar = document.querySelector('.navbar');
const searchForm = document.querySelector('.search-form');
const loginForm = document.querySelector('.login-form');



menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('userClick');
});

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('userClick');
    loginForm.classList.remove('userClick');
});

loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('userClick');
    searchForm.classList.remove('userClick');
});

window.addEventListener('scroll', () => {
    navBar.classList.remove('userClick');
    searchForm.classList.remove('userClick');
    loginForm.classList.remove('userClick');
});



// swiper-slider functionality... 

let swiper = new Swiper('.reviews-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
    },

});