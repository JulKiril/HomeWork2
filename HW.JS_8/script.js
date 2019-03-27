// Завдання 1: На сторінці знаходяться три пустих блоки div. Користувач по черзі вводить три адреси зображень
// (в циклі), які мають застосовуватись як фон до блоків.
let div =document.querySelectorAll('div');
for(let i=0; i<div.length; i++){
    let url = prompt('Введіть адресу зображення', 'img/1.jpg');
    div[i].style.backgroundImage = `url(${url})`
}

// Завдання 2: На сторінці знаходиться список ul з сімома кольорами, написаними англійською мовою. Потрібно
// щоб в циклі alert по черзі виводив внутрішнє вмістиме кожного пункту li, і відразу після цього цей поточний
// пункт замалювався тим кольором, який в ньому записаний.

let li = document.getElementsByTagName('li');
for(let i = 0; i<li.length; i++){
	let text = li[i].innerHTML;
	alert(text);
	li[i].style.background = `${text}`;
}