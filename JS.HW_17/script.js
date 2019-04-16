let getId = x => document.getElementById(x);
let getClass = x => document.getElementsByClassName(x);
//////////////////////////////////////////////////////////////fontStyle
let textEdit = getId('textEdit');
let fontStyle = getClass('fontStyle');
fontStyle[0].addEventListener('click', function(){
    textEdit.classList.toggle("bold");
    if(textEdit.classList.contains("bold")){
        fontStyle[0].classList.add("active");
    }
    else{
        fontStyle[0].classList.remove("active");
    }
});
fontStyle[1].addEventListener('click', function(){
    textEdit.classList.toggle("style");
    if(textEdit.classList.contains("style")){
        fontStyle[1].classList.add("active");
    }
    else{
        fontStyle[1].classList.remove("active");
    }
})
fontStyle[2].addEventListener('click', function(){
    textEdit.classList.toggle("underline");
    if(textEdit.classList.contains("underline")){
        fontStyle[2].classList.add("active");
    }
    else{
        fontStyle[2].classList.remove("active");
    }
})
fontStyle[3].addEventListener('click', function(){
    textEdit.classList.toggle("strike");
    if(textEdit.classList.contains("strike")){
        fontStyle[3].classList.add("active");
    }
    else{
        fontStyle[3].classList.remove("active");
    }
})

////////////////////////////////////////////////////////////textAlign
let textAlign = getClass('justify');

textAlign[0].addEventListener('click', function(){
    textEdit.classList.add("left");
    textEdit.classList.remove("center","right");
})
textAlign[1].addEventListener('click', function(){
    textEdit.classList.add("center");
    textEdit.classList.remove("left","right");
})
textAlign[2].addEventListener('click', function(){
    textEdit.classList.add("right");
    textEdit.classList.remove("left","center");
})

///////////////////////////////////////////////////////////////FontFace

let ff = getClass("ff");
for(let i=0; i<ff.length; i++){
    ff[i].style.fontFamily = ff[i].innerHTML;
    ff[i].addEventListener('click', function(){
        textEdit.style.fontFamily = this.innerHTML;
    })
}

///////////////////////////////////////////////////////////////FontSize

let fs = getClass("fs");
for(let i=0; i<fs.length; i++){
    fs[i].style.fontSize = fs[i].innerHTML;
    fs[i].addEventListener('click', function(){
        textEdit.style.fontSize = this.innerHTML;
    })
}

//////////////////////////////////////////////////////////////Color Table
let colorTable = getId("colorTable");
let colorCell = getClass("colorTd");
function fillTable(colorTable,colorCell){
let colorArray = ['aqua', 'azure', 'beige', 'brown', 'cyan', 'darkcyan', 'darkgrey', 'darkkhaki',
    'darkorange', 'darkorchid', 'darksalmon', 'fuchsia', 'gold', 'green', 'khaki', 'lightblue',
    'lightcyan', 'lightgreen', 'lightgrey', 'lightpink', 'lightyellow'];

for(let j =0; j<colorCell.length; j++){
    for(let i=0; i<colorArray.length; i++){
            colorCell[j].style.backgroundColor = colorArray[i];
            j++;
    }
}
}
fillTable(colorTable,colorCell);

colorTable.addEventListener("click", function(){
    textEdit.style.color = event.target.style.backgroundColor;
})
///////////////////////////////////////////////////////////BACKGROUND
let bgColorTable = getId("bgColorTable");
let bgColorCell = getClass("bgColorTd");
fillTable(bgColorTable,bgColorCell);
bgColorTable.addEventListener('click',function(){
    window.document.body.style.backgroundColor = event.target.style.backgroundColor;
	 window.document.body.style.backgroundImage = ``;
})
let bgImgTable = getId("bgImgTable");
bgImgTable.addEventListener('click',function(){
    let bg = event.target.getAttribute("src");
    window.document.body.style.backgroundImage = `url("${bg}")`

})

///////////////////////////////////////////////////////////BACKGROUND - LOADED FILE

let loadFile = getId('loadFile');
loadFile.addEventListener('change', function(){
    let file = event.target.files[0];
    document.body.style.backgroundImage = `url(${URL.createObjectURL(file)})`
})
///////////////////////////////////////////////////////////TABLE & LIST MENU
let mainContainer = getId('mainContainer');
let editContainer = getId('editContainer');
let tableListBtn = getId('tableMenuBtn');
let textReplace = getId('textReplace');
tableListBtn.addEventListener('click', function(){
    editContainer.classList.remove('dspNone');
    mainContainer.classList.add('dspNone');
    textReplace.value = textEdit.innerHTML;
})
let saveBtn = getId('saveBtn');
saveBtn.addEventListener('click',function (){
    textEdit.innerHTML = textReplace.value;
    textReplace.value = "";
    editContainer.classList.add('dspNone');
    mainContainer.classList.remove('dspNone');

})
///////////////////////////////////////////////////////////Проверка на число
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
function check(x){
    if(!isNumeric(x) || x<0){
        alert("невірно введені дані");
    }
}
///////////////////////////////////////////////////////////CREATE TABLE
let createBtn = getId('createBtn');
createBtn.addEventListener('click', function () {
let tableCreate = document.forms['tableCreate'];
let tr = +tableCreate.tr.value;
let td = +tableCreate.td.value;
let widthTd = +tableCreate.tdWidth.value;
let heightTd = +tableCreate.tdHeight.value;
let borderWidth = +tableCreate.borderWidth.value;
let borderType = tableCreate.borderType.value;
let borderColor = tableCreate.borderColor.value;
let border = `${borderWidth}px ${borderType} ${borderColor}`;
    textReplace.value += `<table style="border:${border}">`;
        for(let i = 1; i <=tr; i++){
            textReplace.value += `<tr>`;
            for(let j=1; j<=td; j++){
                textReplace.value += `<td style="width:${widthTd}px; height:${heightTd}px; border:${border}">Td</td>`;
            }
            textReplace.value += `</tr>`;
        }
        textReplace.value += `</table>`;
check(tr);
check(td);
check(heightTd);
check(widthTd);
check(borderWidth);
})
///////////////////////////////////////////////////////////CREATE LIST
let createBtnOl = getId('createBtnOl');
let createBtnUl = getId('createBtnUl')
let olListCreate = document.forms['olListCreate'];
let ulListCreate = document.forms['ulListCreate'];
// function createList(listStyle, listStyleTag){
//     let markType = listStyle.typeMark.value;
//     let liCount = listStyle.liCount.value;
//     textReplace.value+= `<${listStyleTag} style="list-style-type:${markType}">`
//     for(let j = 1; j<=liCount; j++){
//         textReplace.value+= `<li >item ${j}</li>`;
//     }
//     textReplace.value+=`</${listStyleTag}>`;
//     return textReplace.value;
// }
// createBtnOl.addEventListener('click',createList(olListCreate,'ol'));
createBtnOl.addEventListener('click', function(){
    let markType = olListCreate.typeMark.value;
    let liCount = olListCreate.liCount.value;
    textReplace.value+=`<ol style="list-style-type:${markType}">`;
    for(let j = 1; j<=liCount; j++){
        textReplace.value+= `<li >item ${j}</li>`;
    }
    textReplace.value+=`</ol>`;
    check(liCount);
})
createBtnUl.addEventListener('click', function(){
    let markType = ulListCreate.typeMark.value;
    let liCount = ulListCreate.liCount.value;
    textReplace.value+=`<ul style="list-style-type:${markType}">`;
    for(let j = 1; j<=liCount; j++){
        textReplace.value+= `<li >item ${j}</li>`;
    }
    textReplace.value+=`</ul>`;
    check(liCount);
})

////////////////////////////////////////////////////////////////RESET BTNS
let forms = document.querySelectorAll('form');
let resetBtns = document.getElementsByClassName('resetBtn');
for(let i=0; i<resetBtns.length; i++){
    resetBtns[i].addEventListener('click',function () {
            forms[i].reset();
    })
}
////////////////////////////////////////////////////////////////SIGN IN MODAL
    let  mW = getId('modalWindow')
    getId('lockBtn').addEventListener('click', function () {
        mW.classList.remove('dspNone');
    })
    let signInBtn = getId('signIn');

    signInBtn.addEventListener('click', function(){
        let log = getId('login').value;
        let pas = getId('pass').value;
        console.log(log);
        console.log(pas);
        if(log == "user" && pas == "qwerty"){
            mW.classList.add('dspNone');
        }
        else{
            getId('login').value='';
            getId('pass').value ='';
            getId('login').style.backgroundColor = "rgba(231, 76, 60, 1)";
            getId('pass').style.backgroundColor = "rgba(231, 76, 60, 1)";
        }
    })