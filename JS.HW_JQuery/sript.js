$(function () {
    function randomize(min, max) {
        rand = Math.floor(min + Math.random() * (max - min));
        return rand;
    }
    $('.circle').mouseover(function () {
        let r = randomize(0,255);
        let g = randomize(0,255);
        let b = randomize(0,255);
        let top = randomize(0,500);
        let left = randomize(0,500);
        let w = randomize(10,200);
        let h = randomize(10,200);
        $(this).css({
            backgroundColor: `rgb(${r},${g},${b})`
        })
        $(this).animate({
            width: `${w}`,
            height: `${w}`,
        }).animate({
            left: `${left}`,
            top: `${top}`
        },4000,"easeOutBounce")
    })
})