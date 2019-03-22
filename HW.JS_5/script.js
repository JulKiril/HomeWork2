// 1 завдання. Перевірте, чи є введене користувачем з клавіатури натуральне
// число - простим.

// function checkNum(n) {
// 	let str = '';
// 	let check = false;
// 	if (n == 2) {
// 		str = "Ви ввели просте число";
// 		check = true;
// 	} else if (n % 2 == 0) {
// 		str = "Ви ввели складне число";
// 		check = true;
// 	}
// 	if (n > 1 && check == false) {
// 		for (let i = 2; i < n; i++) {
// 			if (n % i == 0) {
// 				str = "Ви ввели складне число";
// 				check = true;
// 				break;
// 			}
// 		}
// 		if (check == false) {
// 			str = "Ви ввели просте число";
// 		}
// 	}
// 	return str;
// }
// let n = +prompt('enter number');
// console.log(checkNum(n));

// 2 завдання. Виведіть на екран перші 11 членів послідовності Фібоначчі.
// 	Нагадуємо, що перший і другий члени послідовності рівні одиницям, а кожен
// наступний - сумою двох попередніх.
//
// let arr = [1, 1];
// for (let i = 2; i < 11; i++) {
// 	arr[i] = arr[i - 1] + arr[i - 2];
// }
// console.log(arr);

// 3 завдання. Для введеного користувачем з клавіатури натурального числа
// порахуйте суму всіх його цифр (заздалегідь не відомо скільки цифр буде в
// числі).

// let a = prompt('enter number', '1234');
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
// 	sum += +(a[i]);
// }
// console.log(sum);

// 4 завдання. Вивести за допомогою циклів (for, while чи do while) табличку
// 	множення від 2 до 9 у тегах table через скріпт, методом document.write.
//
// let res;
// let border = "1px solid red";
// document.write(`<table style="border:${border}">`);
// 	for(let i = 1; i <=10; i++){
// 		document.write(`<tr>`);
// 		for(let j=2; j<=9; j++){
// 			res = i*j;
// 			document.write(`<td style="border:1px solid black">${j} * ${i} = ${res}</td>`);
// 		}
// 		document.write(`</tr>`);
// 	}
// document.write(`</table>`);

// function mult(a) {
// 	let arr = [];
// 	for (let i = 1; i <= 10; i++) {
// 		let res = a * i;
// 		let j = i - 1;
// 		arr[j] = res;
// 	}
// 	return (arr);
// }





