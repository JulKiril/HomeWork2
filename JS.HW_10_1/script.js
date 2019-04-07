let getId = x => document.getElementById(x);
let move = document.forms['move'];
move.moveBtn.addEventListener('click', function(){
    if(move.m1.value!==""){
        move.m2.value = move.m1.value;
        move.m1.value = "";
    }
})

let pls = document.forms['pls'];

pls.pls1.addEventListener('blur', function(){
    if(pls.pls1.value!==''){
        pls.pls1.placeholder = pls.pls1.value;
        pls.pls1.value = '';
    }
   
})
