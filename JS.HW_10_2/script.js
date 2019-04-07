let getId = x => document.getElementById(x);
let container = getId('container');
let main = getId('main');
let sign = document.forms['sign'];
let mail = getId('mail');
let signOutBtn = getId('signOut');
console.log(main.firstElementChild);
console.log(sign.pos.options[0].value);
sign.check.addEventListener('click', function(){
    if(this.checked){
        sign.signBtn.classList.remove('opac');
    }
    else {
        sign.signBtn.classList.add('opac');
    }
})
sign.signBtn.addEventListener('click', function () {
    if (sign.check.checked) {
        container.classList.add('dspBlock');
        sign.classList.add('dspNone');
        main.firstElementChild.innerText = sign.fn.value + " " + sign.sn.value;
        mail.innerText = sign.em.value;
        main.lastElementChild.innerText = sign.pos.value;
        if (sign.sex.value == "man") {
            container.classList.add("male");
        }
        else{
            container.classList.add("female");
        }
        sign.fn.value = '';
        sign.sn.value = '';
        sign.em.value = '';
        sign.pos.value = sign.pos.options[0].value;
        sign.sex[0].checked = true;
        sign.check.checked = false;
    }
})
signOutBtn.addEventListener('click', function(){
    container.classList.remove('dspBlock');
    sign.classList.remove('dspNone');
})

