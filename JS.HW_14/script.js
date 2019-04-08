let getId = x => document.getElementById(x);
let cenzorWords = getId('cenzor');
let addF = document.forms['add'];
let newW;

addF.addBtn.addEventListener('click', function () {
    if (addF.addW.value !== "") {
        newW = addF.addW.value;
    }
    cenzorWords.innerText += ` ` + newW;
})

let czF = document.forms['cz'];
czF.czBtn.addEventListener('click', function () {
    let arr1 = cenzorWords.innerText.split(' ');
    let arr2 = czF.txt.value.split(' ');
    let repl = "*";
    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]) {
                let strRepl = "";
                for (let k = 0; k < arr2[i].length; k++) {
                    strRepl += repl;
                }
                arr2[i] = strRepl;
            }

        }
    }
    let str = arr2.join(' ');
    czF.txt.value = str;
    console.log(str);
})

