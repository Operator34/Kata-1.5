new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    loop: true,
    freeMode: true,
    slidesPerView: 1.2,
    spaceBetween: 16,
    breakpoints: {
        320: {
            slidesPerView: 1.25,
        },
        420: {
            slidesPerView: 1.7,
        },
        520: {
            slidesPerView: 2,
        },
        620: {
            slidesPerView: 2.5,
        },
        720: {
            slidesPerView: 3,
        },
    },
});
