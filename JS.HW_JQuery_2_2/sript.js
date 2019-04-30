$(function () {
    let down =  setInterval(moveDown,100);
    let up;

    function moveDown(){
            $(".screen2").css({
                height: `-=1px`
            })

        if($(".screen2").height() === 2){
            $("h2").text('1');
            $("h3").text('minute');
            clearInterval(down);
             up = setInterval(moveUp,100);
        }
    }

    function moveUp(){
        $(".screen2").css({
            height: `+=1px`
        })
        if($(".screen2").height() === 344){
            $("h2").text('0');
            $("h3").text('minutes');
            clearInterval(up);
        }
    }








//     function randomize(min, max) {
//         rand = Math.floor(min + Math.random() * (max - min));
//         return rand;
//     }
//     setInterval(function () {
//         let r = randomize(0, 255);
//         let g = randomize(0, 255);
//         let b = randomize(0, 255);
//         let rB = randomize(0, 255);
//         let gB = randomize(0, 255);
//         let bB = randomize(0, 255);
//         let top = randomize(0, 500);
//         let left = randomize(0, 500);
//         $(".ball").css({
//             backgroundColor: `rgb(${r},${g},${b})`,
//             boxShadow: `5px 5px 30px 20px rgba(${r},${g},${b},0.9)`,
//             border: `10px solid rgb(${rB},${gB},${bB})`
//         }).animate({
//             left: `${left}`,
//             top: `${top}`
//         }, 1000)
//     }, 200)
})