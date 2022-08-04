const owl = $(".owl-carousel");
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3
});
$(".slider__btn-prev").click(function () {
    owl.trigger("prev.owl.carousel", [300]);
});

$(".slider__btn-next").click(function () {
    owl.trigger("next.owl.carousel");
});

const navBtn = document.querySelector('.nav__toggle');
const navMenuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
navBtn.onclick = function () {
    nav.classList.toggle('nav--mobile');
    navMenuIcon.classList.toggle('menu-icon-active');
}


AOS.init();