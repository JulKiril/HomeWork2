let getId = x => document.getElementById(x);
let rightBtn = getId('rightBtn');
let leftBtn = getId('leftBtn');
let slider = getId('slider');
let playBtn = getId('playBtn');
let form = document.forms['sliderDots'];
let start = 0;
let direction;
let sliderImg = document.getElementsByClassName('sliderImg');
function moveLeft(){
    sliderImg[start].classList.remove('showing');
    start = (++start) % sliderImg.length;
    sliderImg[start].classList.add('showing');
    form.point[start].checked = true;
}
rightBtn.addEventListener("click", moveLeft);
leftBtn.addEventListener("click", function () {
    if (start == 0) {
        sliderImg[start].classList.remove('showing');
        start = sliderImg.length-1;
        sliderImg[start].classList.add('showing');
        form.point[start].checked = true;
    }
    else{
    sliderImg[start].classList.remove('showing');
    start = (--start) % sliderImg.length;
    sliderImg[start].classList.add('showing');
    console.log(start);
    form.point[start].checked = true;
    }
})
///////////////////////////////////////////////////////SET INTERVAL
let check = true;
let mySlider;
playBtn.addEventListener('click', function () {
    if (check) {
        playBtn.value = `pause`;
        mySlider = setInterval(moveLeft, 2000);
        check = false;
    }
    else {
        playBtn.value = `play`;
        check = true;
        clearInterval(mySlider);
    }
})
///////////////////////////////////////////////////////RADIO BTN
for (let i = 0; i < form.point.length; i++) {
    form.point[i].index = i;
    form.point[i].addEventListener('click', function () {
        sliderImg[start].classList.remove('showing');
        sliderImg[event.target.index].classList.add('showing');
        start = event.target.index;
        start = event.target.index;
    })
}
///////////////////////////////////////////////////////MPUSEOVER SLIDE
let label = document.getElementsByTagName('label');
console.log(label);
for(let i = 0; i<label.length; i++) {
    label[i].addEventListener('mouseover', function(){
        label[i].index = i;
        over.classList.add('dspBlock');
        let attr = sliderImg[label[i].index].getAttribute("src");
        console.log(attr);
        over.style.background = `url(${attr})`;
        over.style.backgroundSize = `100% 100%`;
        over.style.backgroundRepeat = `no-repeat`;
    })
    label[i].addEventListener('mouseout', function () {
        over.classList.remove('dspBlock');
    })
}