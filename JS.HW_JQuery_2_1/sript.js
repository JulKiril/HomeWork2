$(function () {
    function randomize(min, max) {
        rand = Math.floor(min + Math.random() * (max - min));
        return rand;
    }
    setInterval(function () {
        let r = randomize(0, 255);
        let g = randomize(0, 255);
        let b = randomize(0, 255);
        let rB = randomize(0, 255);
        let gB = randomize(0, 255);
        let bB = randomize(0, 255);
        let top = randomize(0, 500);
        let left = randomize(0, 500);
        $(".ball").css({
            backgroundColor: `rgb(${r},${g},${b})`,
            boxShadow: `5px 5px 30px 20px rgba(${r},${g},${b},0.9)`,
            border: `10px solid rgb(${rB},${gB},${bB})`
        }).animate({
            left: `${left}`,
            top: `${top}`
        }, 1000)
    }, 200)
})