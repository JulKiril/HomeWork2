let getId = x => document.getElementById(x);

let container = getId('container');
let editBtn = getId('editButton');
let styleBtn = getId('styleButton');
let mainDiv = getId('main');
let textEdit = document.forms['textEdit'];
let textStyle = document.forms['textStyle'];
let colorBtn = getId('colorBtn');
let bgColorBtn = getId('bgColorBtn');
let tableColor = getId('color');
let tableBgColor = getId('bgColor');


editBtn.addEventListener('click', function(){
    textEdit.classList.add('dspBlock');
    textStyle.classList.remove('dspBlock');
    textEdit.area.value = mainDiv.innerHTML;
    tableColor.classList.remove('dspTable');
	tableBgColor.classList.remove('dspTable');
})

textEdit.sv.addEventListener('click', function(){
    mainDiv.innerHTML = textEdit.area.value; 
    textEdit.area.value = "";
    textEdit.classList.remove('dspBlock');
})

styleBtn.addEventListener('click', function(){
	textStyle.classList.add('dspBlock');
	textEdit.classList.remove('dspBlock');
});
for(let i = 0; i<textStyle.fs.length; i++){
	textStyle.fs[i].addEventListener('click', function(){
		mainDiv.style.fontSize = this.value;
	})
}

textStyle.fontFamily.addEventListener('change', function(){
	for(let i=0; i<textStyle.fontFamily.options.length; i++){
		if(textStyle.fontFamily.options[i].selected){
			mainDiv.style.fontFamily = this.value;
		}
	}
})
textStyle.fw[1].addEventListener('click', function(){
	mainDiv.style.fontStyle = this.value;
	mainDiv.style.fontWeight = '';
	textStyle.fw[0].checked = false;
})

textStyle.fw[0].addEventListener('click', function(){
	mainDiv.style.fontWeight = this.value;
	mainDiv.style.fontStyle = '';
	textStyle.fw[1].checked = false;
})

let tdColor = document.getElementsByTagName('td');
for(let i = 0; i<tdColor.length; i++){
	let text = tdColor[i].innerHTML;
	tdColor[i].style.background = `${text}`;
	tdColor[i].innerHTML = "";
}

colorBtn.addEventListener('click', function(){
	textStyle.classList.add('float');
	tableColor.classList.add('dspTable');
	tableBgColor.classList.remove('dspTable');
})

tableColor.addEventListener('click', function(){
	let bgColor = event.target.style.background;
	mainDiv.style.color = `${bgColor}`;
	tableColor.classList.remove('dspTable');
})

bgColorBtn.addEventListener('click', function(){
	textStyle.classList.add('float');
	tableBgColor.classList.add('dspTable');
	tableColor.classList.remove('dspTable');
})

tableBgColor.addEventListener('click', function(){
	let bgColor = event.target.style.background;
	mainDiv.style.background = `${bgColor}`;
	tableBgColor.classList.remove('dspTable');
})

//Add button
let choose = getId('choose');
textEdit.add.addEventListener('click', function(){
	container.classList.add('dspNone');
	choose.classList.add('dspBlock');
})

//Choose table
let choiseBtns = document.forms['choise'];
let tableCreate = document.forms['tableCreate'];
choiseBtns.table.addEventListener('click', function(){
	choiseBtns.list.checked = false;
	tableCreate.classList.add('dspBlock');
	listCreate.classList.remove('dspBlock');
})

//create table
tableCreate.createTableBtn.addEventListener('click', function(){
	let tr = +tableCreate.tr.value;
	let td = +tableCreate.td.value;
	let widthTd = tableCreate.tdWidth.value;
	let heightTd = +tableCreate.tdHeight.value;
	let borderWidth = +tableCreate.borderWidth.value;
	let borderType;
	for(let i=0; i<tableCreate.tableBorderType.options.length; i++){
		if(tableCreate.tableBorderType.options[i].selected){
			borderType = tableCreate.tableBorderType.value;
		}
	}
	let borderColor;
	for(let i=0; i<tableCreate.tableBorderColor.options.length; i++){
		if(tableCreate.tableBorderColor.options[i].selected){
			borderColor = tableCreate.tableBorderColor.value;
		}
	}
	let border = `${borderWidth}px ${borderType} ${borderColor}`;

	container.classList.remove('dspNone');
	choose.classList.remove('dspBlock');
	textEdit.classList.add('dspBlock');
	textEdit.area.value += `<table style="border:${border}">`;
	for(let i = 1; i <=tr; i++){
		textEdit.area.value += `<tr>`;
		for(let j=1; j<=td; j++){
			textEdit.area.value += `<td style="width:${widthTd}px; height:${heightTd}px; border:${border}">Td</td>`;
		}
		textEdit.area.value += `</tr>`;		
	}
	textEdit.area.value += `</table>`;
})

//Choose list
let listCreate = document.forms['listCreate'];
choiseBtns.list.addEventListener('click', function(){
	choiseBtns.table.checked = false;
	listCreate.classList.add('dspBlock');
	tableCreate.classList.remove('dspBlock');
})

// Create list
listCreate.createListBtn.addEventListener('click', function(){
	let liCount = listCreate.liCount.value;
	let markType;
	for(let i = 0; i<listCreate.markType.options.length; i++){
		if(listCreate.markType.options[i].selected){
			markType = listCreate.markType.value;
		}
	}
	container.classList.remove('dspNone');
	choose.classList.remove('dspBlock');
	textEdit.classList.add('dspBlock');
	textEdit.area.value+=`<ul style="list-style-type:${markType}">`;
	for(let j = 1; j<=liCount; j++){
		textEdit.area.value+= `<li >item ${j}</li>`;
	}
	
})











