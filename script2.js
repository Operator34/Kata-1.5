const buttonReadMoreBrand = document.querySelector(".button-read-more");
const buttonHiddenBrand = document.querySelector(".hidden-more");
const allSliderElementBrand = document.querySelectorAll(".swiper-slide");
let sliderElementBrandHiddenShow = [];
const mediaQuery_768px = window.matchMedia(
    "(min-width: 768px) and (max-width: 1120px)"
);

const mediaQuery_1121px = window.matchMedia("(min-width: 1121px)");

if (mediaQuery_768px.matches) {
    sliderElementBrandHiddenShow = document.querySelectorAll(
        ".swiper-slide:nth-last-child(-n+5)"
    );
}
if (mediaQuery_1121px.matches) {
    sliderElementBrandHiddenShow = document.querySelectorAll(
        ".swiper-slide:nth-last-child(-n+3)"
    );
}

//Слушатель кнопки показать все
buttonReadMoreBrand.addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log("press");
    buttonReadMoreBrand.classList.add("hidden");
    buttonHiddenBrand.classList.remove("hidden");
    for (let i = 0; i < allSliderElementBrand.length; i++) {
        allSliderElementBrand[i].classList.add("show");
    }
});
//Слушатель кнопки скрыть
buttonHiddenBrand.addEventListener("click", function () {
    buttonHiddenBrand.classList.add("hidden");
    buttonReadMoreBrand.classList.remove("hidden");
    for (let i = 0; i < sliderElementBrandHiddenShow.length; i++) {
        sliderElementBrandHiddenShow[i].classList.remove("show");
    }
});

//Слайдер
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
