let getId = x => document.getElementById(x);
let td = document.getElementsByTagName('td');
for (let i = 0; i < td.length; i++) {
    let text = td[i].innerHTML;
    td[i].style.background = `${text}`;
    td[i].innerHTML = "";
}
let block = getId('block');
let createBtn = getId('createBtn');
let colors = getId('colors');
createBtn.addEventListener('click', function () {
    block.classList.remove('dspNone');
})

let paramsForm = document.forms['params'];
paramsForm.w.addEventListener('blur', function () {
    block.style.width = this.value + `px`;
})
paramsForm.h.addEventListener('blur', function () {
    block.style.height = this.value + `px`;
})
colors.addEventListener('click', function () {
    block.style.background = event.target.style.background;

})
///////////////////////////////////////coordinates//////////////////////////////////////////
let container = getId('container');
let coordBtn = getId('coordBtn');
let arrX = [];
let arrY = [];
let coordCount;
coordBtn.addEventListener('click', function () {
    container.classList.add('dspNone');
    coordCount = +prompt('введіть кількіть пар координат', 5);
    for (let i = 0; i < coordCount; i++) {
        arrX[i] = +prompt(`Enter X-asis coordinate (%)`);
    }

    for (let i = 0; i < coordCount; i++) {
        arrY[i] = +prompt(`Enter Y-asis coordinate (%)`);
    }
})
function moveBlock(x, y) {
    block.style.position = "absolute";
    block.style.left = x + '%';
    block.style.top = y + '%';
}
let start = 0;
block.addEventListener('mouseover', function () {
    moveBlock(arrX[start], arrY[start]);
    start++;
    if (start == 5) {
        start = 0;
    }
})



