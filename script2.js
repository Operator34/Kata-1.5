window.addEventListener("DOMContentLoaded", () => {
    const resizableSwiper = (
        breakpoint,
        swiperClass,
        swiperSettings,
        callback
    ) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        };

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener("change", checker);
        checker();
    };

    resizableSwiper("(max-width: 768px)", ".swiper-brands", {
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
});
