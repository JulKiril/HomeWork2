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
    let str = czF.txt.value;
    let repl = "*";
    for (let i = 0; i < arr1.length; i++) {
            let strRepl = "";
            for (let k = 0; k < arr1[i].length; k++) {
                strRepl += repl;
            }
            str = str.replace(new RegExp(arr1[i], "g"), strRepl);
        }    
czF.txt.value = str;
console.log(str);
})

