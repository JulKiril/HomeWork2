let colors = ['red','yellow', 'green' ];
let getId = x => document.getElementById(x);
let colorBlock = getId('colorBlock');
let bgColor = 0;
colorBlock.addEventListener('mouseover', function () {
    this.style.backgroundColor = colors[bgColor];
    bgColor++;
    if (bgColor == colors.length) {
        bgColor = 0;
    }
})

colorBlock.addEventListener('mouseout', function(){
    this.style.backgroundColor = "";
})