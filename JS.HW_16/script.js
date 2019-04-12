let getId = x => document.getElementById(x);
let form = document.forms['sign'];
let usersArr = [];

function User(login, pass, email) {
    this.login = login,
        this.pass = pass,
        this.email = email
}

//////////////////////////////////////////////render Table function/////////////////////////////////////////////////////
let t1 = document.getElementsByClassName('contentTable');
let tableContainer = getId('container');

function createTable() {
    let table = document.createElement("table");
    let tbody = document.createElement('tbody');
    table.classList.add('contentTable');
    table.appendChild(tbody);
    tableContainer.appendChild(table);
    let j = 1;
    for (let i = 0; i < usersArr.length; i++) {

        let tr = document.createElement('tr');
        tbody.appendChild(tr);

        let td = document.createElement('td');
        td.innerHTML = j;
        j++;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = usersArr[i].login;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = usersArr[i].pass;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = usersArr[i].email;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `<input type='button' value='Edit' id=${i}>`;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `<input type='button' value='Delete' id=${i}>`;
        tr.appendChild(td);
    }

    if (t1.length > 1) {
        tableContainer.removeChild(t1[0]);
    }
}

form.addBtn.addEventListener('click', function () {
    let user = new User(form.login.value, form.pass.value, form.em.value);
    form.login.value = "";
    form.pass.value = "";
    form.em.value = "";
    usersArr.push(user);
    // console.log( usersArr);
    createTable();
})

let ident;
tableContainer.addEventListener('click', function () {
    if (event.target.value == 'Delete') {
        usersArr.splice(event.target.id, 1);
        // console.log( usersArr);
        createTable();
    }
    if (event.target.value == 'Edit') {
        ident = event.target.id;
        form.login.value = usersArr[ident].login;
        form.pass.value = usersArr[ident].pass;
        form.em.value = usersArr[ident].email;
        form.editBtn.classList.remove('dspNone');
        form.addBtn.classList.add('dspNone');
    }
})

form.editBtn.addEventListener('click', function () {
    usersArr[ident].login = form.login.value;
    usersArr[ident].pass = form.pass.value;
    usersArr[ident].email = form.em.value;
    createTable();
    form.reset();
    form.editBtn.classList.add('dspNone');
    form.addBtn.classList.remove('dspNone');

})