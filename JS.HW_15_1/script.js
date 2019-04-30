let getId = x => document.getElementById(x);
let rightBtn = getId('rightBtn');
let leftBtn = getId('leftBtn');
let slider = getId('slider');
let playBtn = getId('playBtn');
let form = document.forms['sliderDots'];
let imgArr = [];
let direction;
let over =  getId('over');
for (let i = 0; i <= 9; i++) {
    imgArr[i] = `img/${i}.jpg`;
}
imgArr.shift();
let start =1;
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

let label = document.getElementsByTagName('label');
console.log(label);
for(let i = 0; i<label.length; i++) {
    label[i].addEventListener('mouseover', function(){
        label[i].index = i;
        over.classList.add('dspBlock');
        over.style.background = `url(${imgArr[label[i].index]})`;
        over.style.backgroundSize = `100% 100%`;
        over.style.backgroundRepeat = `no-repeat`;
    })
    label[i].addEventListener('mouseout', function () {
        over.classList.remove('dspBlock');
    })
}

for (let i = 0; i < form.point.length; i++) {
    form.point[i].index = i;
    form.point[i].addEventListener('click', function () {
        slider.style.background = `url(${imgArr[event.target.index]})`;
        slider.style.backgroundSize = `100% 100%`;
        slider.style.backgroundRepeat = `no-repeat`;
        console.log(event.target.index);
        start = event.target.index + 1;
        console.log(start);
        rightBtn.addEventListener('click', moveLeft);
    })
}
rightBtn.addEventListener('click', moveLeft);
function moveLeft() {
    if(direction === "left"){
        start++;
    }
    direction = 'right';
     if (start == imgArr.length) {
        start = 0;
    } 
    console.log(start);        
    slider.style.background = `url(${imgArr[start]})`;
    slider.style.backgroundSize = `100% 100%`;
    slider.style.backgroundRepeat = `no-repeat`;
    form.point[start].checked = true;    
    start++;   
    console.log(start);
    leftBtn.addEventListener('click', moveRight);     
}  
function moveRight(){
    if(direction === "right"){
        start--;        
    }
    direction = "left";
    if (start == 0) {
        start = imgArr.length;
    } 
    console.log(start);
    start--;
    console.log(start);
    console.log(start);
    slider.style.background = `url(${imgArr[start]})`;
    slider.style.backgroundSize = `100% 100%`;
    slider.style.backgroundRepeat = `no-repeat`;
    form.point[start].checked = true;
}


