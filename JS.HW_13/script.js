// // Завдання 1: Користувач вводить текст. Потрібно порахувати і вивести кількість пробілів, які були введені.
alert('To resolve this task I used 3 aproaches:')
// /////////*********OPTION NUMBER ONE**********/////////
let text = prompt('aproach #1', '1 - by using split method');
let textArr = text.split(" ");
let count = textArr.length - 1;
console.log(`1)Кількість пробілів = ` + count);
alert(`1)Кількість пробілів = ` + count);
// /////////*********OPTION NUMBER TWO**********/////////
let text1 = prompt('aproach #2', '2 - by using for loop');
let count1 = 0;
let pos1 = 0;
for (let i = 0; i < text1.length; i++) {
    let foundPos = text1.indexOf(" ", pos1);
    if (foundPos == -1) break;
    count1++;
    pos1 = foundPos + 1;
}
console.log(`2)Кількість пробілів = ` + count1);
alert(`2)Кількість пробілів = ` + count1);

// /////////*********OPTION NUMBER THREE**********/////////
let text2 = prompt('aproach #3', '3 - by using while loop');
let count2 = 0;
let pos2 = 0;
while (true) {
    let foundPos = text2.indexOf(" ", pos2);
    if (foundPos == -1) break;
    count2++;
    pos2 = foundPos + 1;
}
console.log(`3)Кількість пробілів = ` + count2);
alert(`3)Кількість пробілів = ` + count2);

// Завдання 2: Користувач вводить e-mail. Потрібно перевірити дані на правильність введення. 
// Правильно введений e-mail - це той, в якому міститься символ @. Крім того символ @ не може
//  бути на початку тексту або в кінці.

let mail = prompt('enter email', "ii@ukr.net");
let arr = mail.split('@');
if (arr.length == 2) {
    if (arr[0] !== '' && arr[arr.length - 1] !== '' && arr[1].indexOf(".")!==-1) {
        alert('Correct');
    }
    else {
        alert('Please enter correct email');
    }
}
else {
    alert('Please enter correct email');
}

// Завдання 3: Людина вводить текст, в якому міститься слово html (html може зустрічатись в тексті декілька разів). 
// Потрібно, щоб alert вивів загальну кількість слів html у введеному тексті.

let text3 = prompt('enter text', 'Text Html javascript html css.').toLowerCase();
let count3 = 0;
let pos3 = 0;
let target = 'html';
while (true) {
    let foundPos = text3.indexOf(target, pos3);
    if (foundPos == -1) break;
    count3++;
    pos3 = foundPos + 1;
}
console.log(`Користувач ввів html ` + count3 + ` р.`);
alert(`Ви ввели html ` + count3 + ` р.`);