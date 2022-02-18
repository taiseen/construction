// 18 - Feb - 2022

const menuBtn = document.getElementById('menu-btn');
const searchBtn = document.getElementById('search-btn');
const loginBtn = document.getElementById('login-btn');
const infoBtn = document.getElementById('info-btn');
const closeInfoBtn = document.getElementById('close-info-btn');

const navBar = document.querySelector('.navbar');
const searchForm = document.querySelector('.search-form');
const loginForm = document.querySelector('.login-form');
const contactInfo = document.querySelector('.contact-info ');

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');


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
});
closeInfoBtn.addEventListener('click', () => {
    contactInfo.classList.remove('userClick');
});

window.addEventListener('scroll', () => {
    navBar.classList.remove('userClick');
    searchForm.classList.remove('userClick');
    loginForm.classList.remove('userClick');



    /*****************************************************************
    ******************************************************************
    ******************************************************************/
    // this code Snippet set inside Windows SCROLL Event Listener 
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
});


/* 
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌📌
*/
const imageContainer = document.querySelector('.projects .box-container');
lightGallery(imageContainer);


/* 
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

Number On Load Counting functionality...  */

document.addEventListener('DOMContentLoaded', () => {

    function counter(id, start, end, duration) {

        let obj = document.getElementById(id);
        let current = start;
        let range = end - start;
        let increment = end > start ? 1 : -1;
        let step = Math.abs(Math.floor(duration / range));

        let timer = setInterval(() => {

            current += increment;
            obj.innerHTML = current;

            if (current == end) {
                obj.innerHTML += "<span>+</spam>"
                clearInterval(timer);
            }

        }, step);
    }
    counter('count1', 0, 10, 8000);
    counter('count2', 0, 1500, 15000);
    counter('count3', 0, 790, 12000);
    counter('count4', 0, 450, 12000);
});



/* 
🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩
🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩
🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩🚩

DISABLE the RIGHT CLICK for viewing the ==> View Page Source Code &
DISABLE SHORTCUT KEY */

// document.addEventListener('contextmenu', (e) => {
//     e.preventDefault();
// }, false);

// document.addEventListener('keydown', (e) => {
//     if (e.ctrlKey || e.keyCode == 123) {
//         e.stopPropagation();
//         e.preventDefault();
//     }
// }, false);




/* 
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅
✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅

swiper-slider functionality...  */


let homeSlider = new Swiper('.home-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let clientsReviewsSlider = new Swiper('.reviews-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        // type: "fraction",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});



let blogSlider = new Swiper('.blogs-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: "fraction",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});


let clientLogoSlider = new Swiper('.logo-slider', {

    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },

    breakpoints: {
        450: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 5,
        },
    },
});

