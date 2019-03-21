let background = prompt("enter color", 'beige');
let fontStyle = prompt('enter normal | italic | oblique', 'italic');
let textTransform = prompt('enter text transform capitalize | lowercase | uppercase | none', 'uppercase');
let pBackground = prompt('enter color', 'yellow');
let pColor = prompt('enter color', 'violet');
let aColor;
let divColor = prompt('enter color', 'black');
let divFontSize = prompt('enter font size', '16');
let divFontWeight = prompt('enter font weight bold| bolder ', 'bold');
let listStyle = prompt('enter circle | disc | square', 'square');

let body = document.getElementsByTagName('body');
body[0].style.background = `${background}`;
body[0].style.fontStyle = `${fontStyle}`;

let title = document.getElementsByTagName('h1');
title[0].style.textTransform = `${textTransform}`;

let p = document.getElementsByClassName('links');
p[0].style.background = `${pBackground}`;
p[0].style.color = `${pColor}`;

let a = document.getElementsByTagName('a');
for(let i=0; i<a.length; i++){
	aColor = prompt('enter color', 'pink');
	a[i].style.color = `${aColor}`;
	let aLink = prompt('Enter your favourite link', 'gismeteo.ua');
	a[i].href = `http://${aLink}`;
	a[i].innerHTML = `${aLink}`;
	a[i].target = '_blank';
}

let div = document.getElementsByTagName('div');
div[0].style.color = `${divColor}`;
div[0].style.fontSize = `${divFontSize}px`;
div[0].style.fontWeight = `${divFontWeight}`;

let listItems = document.getElementsByTagName('li');
for(let j=0; j<listItems.length; j++){
	listItems[j].style.listStyleType = `${listStyle}`;
}
