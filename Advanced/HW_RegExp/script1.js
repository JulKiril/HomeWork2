let getId = x => document.getElementById(x);
let params = document.getElementsByClassName("param");
let paramBtn = document.getElementsByClassName("paramsBtn");
let errBtn = document.getElementsByClassName("errBtn");
for (let i = 0; i < params.length; i++) {
    params[i].addEventListener('focus', _=> {
        paramBtn[i].classList.add('dspNone');
    })
    params[i].addEventListener('blur', _=> {
        if(params[i].value === ""){
        paramBtn[i].classList.remove('dspNone');
        }
    })
    params[i].addEventListener("input", function () {
        let param = params[i].value;
        let reg = /^[1-9][0-9]*$/
        if (reg.test(param)) {
            errBtn[i].classList.add('dspNone');
            activeOkBtn();
        } else {
            if (param <= 0) {
                errBtn[i].innerHTML = "Enter number >0"
            } else {
                errBtn[i].innerHTML = "Not a number"
            }
            errBtn[i].classList.remove('dspNone');
        }
    })
}
getId("name").addEventListener("input", function () {
    let nameValue = getId("name").value;
    let reg = /^[A-Za-z]{1,10}\s?[A-Za-z]{1,10}$/
    if (reg.test(nameValue)) {
        getId("nameErrBtn").classList.add('dspNone');
        activeOkBtn();
    } else {
        getId("nameErrBtn").innerHTML = "Enter your full name"
        getId("nameErrBtn").classList.remove('dspNone')
    }
})

getId("name").addEventListener("focus", _ => {
    getId("nameBtn").classList.add('dspNone');
})

getId("name").addEventListener("blur", _ => {
    if(getId("name").value === ""){
    getId("nameBtn").classList.remove('dspNone');
    }
})

let phoneInp = getId("phone");
phoneInp.addEventListener('focus', function () {
    getId("phoneBtn").classList.add('dspNone');
        phoneInp.value = '+38';
        if (phoneInp.value.length === 3) {
            phoneInp.value += '(';
        }
        getId("phoneErrBtn").innerHTML = 'Phone format +38(___)-___-__-__'
        getId("phoneErrBtn").classList.remove('dspNone');

});
phoneInp.addEventListener('blur', function () {
    if(phoneInp.value === ""){
    getId("phoneBtn").classList.remove('dspNone');
    }
});
phoneInp.addEventListener("input", function () {
    if (phoneInp.value.length === 7) {
        phoneInp.value += ')-';
    }
    if (phoneInp.value.length === 12) {
        phoneInp.value += '-';
    }
    if (phoneInp.value.length === 15) {
        phoneInp.value += '-';
    }
    let reg = /^\+38\((093|079|063|066|095|067|097)\)-\d{3}-\d{2}-\d{2}$/
    if (reg.test(phoneInp.value)) {
        getId("phoneErrBtn").classList.add('dspNone');
        activeOkBtn();
    } else {
        getId("phoneErrBtn").innerHTML = 'Phone format +38(___)-___-__-__'
        getId("phoneErrBtn").classList.remove('dspNone');
    }
})
phoneInp.addEventListener('keypress', e => {
    if (!/\d/.test(e.key))
        e.preventDefault();
});

function checkMail() {
    let mail = getId("mail").value;
    let reg = /^[\w\.]+@[a-zA-Z]+\.[a-z]{2,5}(\.[a-z]{2,4})?$/
    if (reg.test(mail)) {
        getId("mailErrBtn").classList.add('dspNone');
        activeOkBtn();
    } else {
        getId("mailErrBtn").innerHTML = 'Enter correct e-mail';
        getId("mailErrBtn").classList.remove('dspNone');
    }
}

getId("mail").addEventListener("input", checkMail);
getId("mail").addEventListener("focus", _ => {
    getId("mailBtn").classList.add('dspNone');
});
getId("mail").addEventListener("blur", _ => {
    if(getId("mail").value === ""){
    getId("mailBtn").classList.remove('dspNone');
    }
});

function checkHeight() {
    let height = getId("height").value;
    let reg = /^[1-9][0-9][0-9]$/
    if (reg.test(height)) {
        getId("heightErrBtn").classList.add('dspNone');
        activeOkBtn();
    }
    else {
        checkerHeight = true;
        getId("heightErrBtn").innerHTML = 'Enter correct height'
        getId("heightErrBtn").classList.remove('dspNone');
    }
}

getId("height").addEventListener("input", checkHeight);
getId("height").addEventListener("focus", _ => {
    getId("heightBtn").classList.add('dspNone');
});
getId("height").addEventListener("blur", _ => {
    if(getId("height").value === ""){
    getId("heightBtn").classList.remove('dspNone');
    }
});
getId("okBtn").disabled = true;
 function activeOkBtn(){
     if(document.getElementsByClassName("dspNone").length >= 34){
         return getId("okBtn").disabled = false;
     }
     else {
         return getId("okBtn").disabled = true;
     }
 }


getId("okBtn").addEventListener('click', function () {
    window.location.href = window.location.href
})

