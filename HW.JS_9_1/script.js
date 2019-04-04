// 1-ше завдання///////////////////////////////////////////////////////////////////////////////////////////////////////

let td = document.getElementsByTagName('td');
for(let i = 0; i<td.length; i++){
	let text = td[i].innerHTML;
	td[i].style.background = `${text}`;
	td[i].innerHTML = "";
}
let tableColor = document.getElementById('color');
let tableImg = document.getElementById('image');
let button = document.getElementsByTagName('button');
button[0].addEventListener('click', function(){
	tableImg.classList.remove('img');
	tableColor.classList.add('color');
})

tableColor.addEventListener('click', function(){
	let bgColor = event.target.style.background;
	document.body.style.background = `${bgColor}`;
})

button[1].addEventListener('click', function(){
	tableColor.classList.remove('color');
	tableImg.classList.add('img');
})

tableImg.addEventListener('click', function(){
	let bgImg = event.target.style.background;
	document.body.style.background = `${bgImg}`;
})



