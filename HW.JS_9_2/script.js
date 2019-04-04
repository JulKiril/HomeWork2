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
