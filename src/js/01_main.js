const botSlider = new Swiper('.swiper.join__slider', {
    autoplay: {
        delay: 5000,
    },
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
    el: ".join__slider .swiper-pagination",
    clickable: true,
    hashNavigation: true,
    }
});

const sexRadioBtns = document.querySelectorAll('.join__form-sex__radio');

sexRadioBtns.forEach(btns => {
    btns.addEventListener('click', function() {
        let parent = this.parentNode.parentNode;
        let childsBack = parent.querySelectorAll('.join__form-sex__part');
        let childsColor = parent.querySelectorAll('.cls');
        childsBack.forEach(child => {
            child.style.backgroundColor = "#fff";
        });
        childsColor.forEach(child => {
            child.setAttribute("fill", "rgb(255, 128, 12");
        });
        this.parentNode.childNodes[3].childNodes[3].setAttribute("fill", "#fff");
        this.parentNode.style.backgroundColor = "rgb(255, 128, 12)";
    })
});

for(let i=1; i<= 31; i++){
    let x = "<option>" + i + "</option>";
    document.getElementById("join__form-age__day").innerHTML += x;
}

for(let i=1950; i<= 2022; i++){
    let x = "<option>" + i + "</option>";
    document.getElementById("join__form-age__year").innerHTML += x;
}
