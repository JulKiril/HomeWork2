let pas = prompt("enter password");
let i =1;
let counter = 0;
let attempt = 4;
let res =attempt;
while(i<=attempt && pas !== "PASSWORD"){
	i++;
	counter++;	
	pas = prompt(`у Вас залишилось ${res} спроби`);
	res = attempt - counter;
}
if(pas=="PASSWORD"){
	alert("Запрошуємо на сайт!")
}
else {alert("Будь ласка спробуйте пізніше")}