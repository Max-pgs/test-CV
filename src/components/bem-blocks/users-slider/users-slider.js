const UsersSlider = new Swiper('.swiper.info__users-slider', {
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});

const ListSliderPhoto = document.querySelectorAll('.info__users-slider__slide');

ListSliderPhoto.forEach(photos => {
    photos.addEventListener('mouseover', function() {
        this.childNodes[3].style.display = "block";
        this.childNodes[5].style.display = "block";
        this.childNodes[7].style.display = "block";
    });
    photos.addEventListener('mouseout', function() {
        this.childNodes[3].style.display = "none";
        this.childNodes[5].style.display = "none";
        this.childNodes[7].style.display = "none";

    });
});