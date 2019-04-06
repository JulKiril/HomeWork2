let getId = x => document.getElementById(x);
let colorBlock = getId('colorBlock');
colorBlock.addEventListener('mouseover', function () {
    this.classList.add('mOver');
    this.classList.remove('color');
    this.innerText = 'Хочеш знати який?';
    colorBlock.addEventListener('mousedown', function(){
        this.classList.add('mClick');
        this.innerText = 'А я тобі не скажу!';
    })
    colorBlock.addEventListener('mouseup', function(){
        this.classList.remove('mClick');
        this.innerText = 'Хочеш знати який?';
    })
})

colorBlock.addEventListener('mouseout', function(){
    this.classList.remove('mOver');
    this.classList.add('color');
    this.innerText = 'У мене є секрет!';
})
