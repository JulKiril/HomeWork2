//1
let result = 0;
let capUk = prompt('Столиця України');
if(capUk == "Київ".toLowerCase() || capUk  == "Kyiv".toLowerCase() ) {
	result++	
}
let capAu = prompt('Столиця Австрії');
if(capAu == "Відень".toLowerCase() || capAu == "Vien".toLowerCase()) {
	result++	
}
let capGer = prompt('Столиця Німеччини');
if(capGer == "Berlin".toLowerCase() || capGer == "Берлін".toLowerCase()) {
	result++	
}
let capFr = prompt('Столиця Франції');
if(capFr == "Paris".toLowerCase() || capFr == "Париж".toLowerCase()) {
	result++	
}
let capPl = prompt('Столиця Польщі');
if(capPl== "Варшава".toLowerCase() || capPl == "Warsaw".toLowerCase()) {
	result++	
}
let capSp = prompt('Столиця Іспанії');
if(capSp== "Мадрид".toLowerCase() || capSp == "Madryd".toLowerCase() || capSp == "Madrid".toLowerCase()) {
	result++	
}
let capIt = prompt('Столиця Італії');
if(capIt == "Рим".toLowerCase() || capIt  == "Roma".toLowerCase() || capIt  == "Rym".toLowerCase() || capIt  == "Rim".toLowerCase()) {
	result++	
}
let capGB = prompt('Столиця Великобританії');
if(capGB == "Лондон".toLowerCase() || capGB  == "London".toLowerCase() ) {
	result++	
}
let capLat = prompt('Столиця Латвії');
if(capLat == "Рига".toLowerCase() || capLat  == "Ryga".toLowerCase() || capLat  == "Riga".toLowerCase()) {
	result++	
}
let capSw = prompt('Столиця Швеції');
if(capSw == "стокгольм".toLowerCase() || capSw  == "Stokgolm".toLowerCase() || capSw  == "Stockholm".toLowerCase() ) {
	result++	
}
alert ("Кількість набраних балів " +result+ " з 10");
if(result <= 3) {
	alert("йди вчи назви столиць країн Європи!!!");
}
else if(result > 3 && result <= 7){
	alert("середнячок(");
}
else if(result > 7 && result < 10){
	alert("щось таки знаєш!");
}
else {
	alert("Вітаю!!! Ти геній!!!");
}

//2

let name = prompt("Ведіть Імя");
if(name == "Імя"){
	let pass = prompt("введіть пароль");
	if(pass == "LOGOS"){
		alert("Ласкаво просимо");
	}
	else if(pass == null){
		alert("вхід скасований!");
	}
	else{
		alert("Пароль невірний");
	}
}
else if(name == null){
	alert("вхід скасований!");
}
else {
	alert("я вас не знаю");
}

//3

let seasons = ["зима","весна","літо","осінь"];
let num = prompt("Введіть число від 1 до 12");
if(num >= 1 && num <= 2 || num ==12){
	alert(seasons[0])
}
else if(num >= 3 && num <= 5) {
	alert(seasons[1])
}
else if(num >= 6 && num <= 8) {
	alert(seasons[2])
}
else if(num >= 9 && num <= 11) {
	alert(seasons[3])
}
else if(num > 12) {
	alert("Ви ввели число за межами діапазону.")
}
