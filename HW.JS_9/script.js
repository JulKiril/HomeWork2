//1-ше завдання///////////////////////////////////////////////////////////////////////////////////////////////////////

// let td = document.getElementsByTagName('td');
// for(let i = 0; i<td.length; i++){
// 	let text = td[i].innerHTML;
// 	td[i].style.background = `${text}`;
// 	td[i].innerHTML = "";
// }
// let tableColor = document.getElementById('color');
// let tableImg = document.getElementById('image');
// let button = document.getElementsByTagName('button');
// button[0].addEventListener('click', function(){
// 	tableImg.classList.remove('img');
// 	tableColor.classList.add('color');
// })

// tableColor.addEventListener('click', function(){
// 	let bgColor = event.target.style.background;
// 	document.body.style.background = `${bgColor}`;
// })

// button[1].addEventListener('click', function(){
// 	tableColor.classList.remove('color');
// 	tableImg.classList.add('img');
// })

// tableImg.addEventListener('click', function(){
// 	let bgImg = event.target.style.background;
// 	document.body.style.background = `${bgImg}`;
// })


//2-ге завдання ///////////////////////////////////////////////////////////////////////////////////////////////////////////

let div = document.getElementById('icon');
let button = document.getElementsByTagName('button');
button[0].addEventListener('click', function(){
	div.classList.remove('transformDown', 'transformRight', 'transformLeft');
	let xy = div.getBoundingClientRect();
	console.log(xy.top);
	if(xy.top>0){
	div.style.top = xy.top - 10 + 'px';} 
})
button[1].addEventListener('click', function(){
	div.classList.add('transformLeft');
	div.classList.remove('transformDown', 'transformRight');
	let xy = div.getBoundingClientRect();
	console.log(xy.left);
	if(xy.left>0){
	div.style.left = xy.left - 10 + 'px'; 
}
})
button[2].addEventListener('click', function(){
	div.classList.add('transformRight');
	div.classList.remove('transformDown', 'transformLeft');
	let xy = div.getBoundingClientRect();
	console.log(xy.left);
	if(xy.left<window.innerWidth - 310){
	div.style.left = xy.left + 10 + 'px';
} 
})

button[3].addEventListener('click', function(){
	div.classList.add('transformDown');
	div.classList.remove('transformRight', 'transformLeft');
	let xy = div.getBoundingClientRect();
	console.log(xy.top);
	if(xy.top<window.innerHeight - 310){
	div.style.top = xy.top + 10 + 'px'; 
}
})
