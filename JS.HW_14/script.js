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
let str;
czF.czBtn.addEventListener('click', function () {
    let arr1 = cenzorWords.innerText.split(' ');
    str = czF.txt.value;

    for (let i = 0; i < arr1.length; i++) {
        str = replace(str, arr1[i]);
    }
    czF.txt.value = str;
    console.log(str);
})

function replace(str, strRepWord) {
    let count = str.split(strRepWord).length;
    count--;
    for (let i = 0; i < count; i++) {
        let repl = "*";
        let strRepl = "";
        for (let k = 0; k < strRepWord.length; k++) {
            strRepl += repl;
        }
        str = str.replace(strRepWord, strRepl);
    }
    return str;
}

