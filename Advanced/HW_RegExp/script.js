$(document).ready(function () {
    function moveLeft() {
        let currentSlideIndex = $(".current").index();
        let nextSlideIndex = ++currentSlideIndex;
        let nextSlide = $(".sliderImg").eq(nextSlideIndex);
        $(".current").fadeOut(1000);
        $(".current").removeClass('current');

        if (nextSlideIndex == ($('.sliderImg:last').index() + 1)) {
            $('.sliderImg').eq(0).fadeIn(1000);
            $('.sliderImg').eq(0).addClass('current');
        } else {
            nextSlide.fadeIn(1000);
            nextSlide.addClass('current');
        }
    }
    $('#rightBtn').click(moveLeft);

    function nextSlide() {
       interval = window.setInterval(moveLeft, 2000);
    }

    function sliderStop() {
        window.clearInterval(interval);
    }

    $(".slider").mouseover(function () {
        sliderStop();
    })
    $(".slider").mouseout(function () {
        nextSlide();
    })
    nextSlide();

    function moveRight() {
        let currentSlideIndex = $(".current").index();
        let prevSlideIndex = --currentSlideIndex;
        let prevSlide = $(".sliderImg").eq(prevSlideIndex);
        $(".current").fadeOut(1000);
        $(".current").removeClass('current');
        prevSlide.fadeIn(1000);
        prevSlide.addClass('current');
        console.log(prevSlideIndex);
    }
    $("#leftBtn").click(moveRight);
});