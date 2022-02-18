// 18 - Feb - 2022

const data = document.getElementById('data');
const data = document.querySelector('.data');


window.addEventListener('scroll', () => {


    if (window.scrollY > 80) {

    } else {

    }

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