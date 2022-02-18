// 18 - Feb - 2022

const menuBtn = document.getElementById('menu-btn');
const searchBtn = document.getElementById('search-btn');
const loginBtn = document.getElementById('login-btn');
const infoBtn = document.getElementById('info-btn');
const closeInfoBtn = document.getElementById('close-info-btn');

const navBar = document.querySelector('.navbar');
const searchForm = document.querySelector('.search-form');
const loginForm = document.querySelector('.login-form');
const contactInfo  = document.querySelector('.contact-info ');



menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('userClick');
    searchForm.classList.remove('userClick');
    loginForm.classList.remove('userClick');
});

searchBtn.addEventListener('click', () => {
    searchForm.classList.toggle('userClick');
    navBar.classList.remove('userClick');
    loginForm.classList.remove('userClick');
});

loginBtn.addEventListener('click', () => {
    loginForm.classList.toggle('userClick');
    navBar.classList.remove('userClick');
    searchForm.classList.remove('userClick');
});


infoBtn.addEventListener('click', () => {
    contactInfo.classList.add('userClick');
    // searchForm.classList.remove('userClick');
    // loginForm.classList.remove('userClick');
});
closeInfoBtn.addEventListener('click', () => {
    contactInfo.classList.remove('userClick');
    // searchForm.classList.remove('userClick');
    // loginForm.classList.remove('userClick');
});

window.addEventListener('scroll', () => {
    navBar.classList.remove('userClick');
    searchForm.classList.remove('userClick');
    loginForm.classList.remove('userClick');
});


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

// auto select menu according to screen scrolling
sections.forEach(section => {

    let top = window.scrollY;
    let height = section.offsetHeight;
    let offset = section.offsetTop - 150;
    let id = section.getAttribute('id');

    if (top >= offset && top < offset + height) {

        navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
        });
    };
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