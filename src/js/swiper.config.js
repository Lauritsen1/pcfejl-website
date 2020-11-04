var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 10000,
    },
    // spaceBetween: 8,

    slidesPerView: 3,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        // when window width is <= 499px
        768: {
            slidesPerView: 2,
        },
        // when window width is <= 999px
        1100: {
            slidesPerView: 3,
        },
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

document.querySelector('.swiper-container').addEventListener('mouseenter', () => {
    mySwiper.autoplay.stop();
});

document.querySelector('.swiper-container').addEventListener('mouseleave', () => {
    mySwiper.autoplay.start();
});