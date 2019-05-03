let getId = x => document.getElementById(x);
///////////////////////////////////////////////////////////
function CreateUser(player,indicate,id) {
    this.name = player;
    this.indicate = indicate;
    this.id = id;
}
let user1 = new CreateUser("Player1","X",1);
let user2 = new CreateUser("Player2","0",2);

let currentUser = user1;

 function changeUser() {
     if (currentUser == user1) {
         currentUser = user2;
     } else {
         currentUser = user1;
     }
 }
/////////////////////////////////////////////////////////
 let arr = [0,0,0,0,0,0,0,0,0];
 let moveCounter = 0;

function setArrayValue(user,buttonName){
    arr[buttonName]=user;
}
/////////////////////////////////////////////////////////PLAY AGAIN
let playAgainBtn = getId("playAgain");

     function playAgain(){
         playAgainBtn.addEventListener("click", function () {
                 window.location.reload(false);
             }
         )
     }

/////////////////////////////////////////////////////////
let gameContainer = getId("gameContainer");
let player = getId("player");
let textResult = getId("textResult");
let modal =  getId("modal");

let female = document.getElementsByClassName("female")[0];
let male = document.getElementsByClassName("male")[0];
gameContainer.addEventListener("click", function(){
    let btnNameValue = event.target.getAttribute("name");

    if(arr[btnNameValue] == 0){
        moveCounter++;
        event.target.value=currentUser.indicate;
        if(currentUser == user1){
            event.target.style.color = "deeppink";
            setTimeout(function () {
                player.firstChild.innerText = "Player 2";
                player.style.color = "blue"
                female.classList.add("dspNone");
                male.classList.remove("dspNone");

            },500)
            male.classList.add("dspNone");
            female.classList.remove("dspNone");
        }
        if(currentUser == user2){
            event.target.style.color = "blue";
            setTimeout(function () {
                player.firstChild.innerText = "Player 1";
                player.style.color = "deeppink"
                male.classList.add("dspNone");
                female.classList.remove("dspNone");
            },500)
            female.classList.add("dspNone");
            male.classList.remove("dspNone");
        }
        setArrayValue(currentUser, btnNameValue);
        console.log(arr);
    }

    else{
        alert('Please, choose another button')
    }
    changeUser();
    checkLineX(1);
    checkLineX(2);
    checkLineY(1);
    checkLineY(2);
    checkLineZ(1);
    checkLineZ(2);

        if(moveCounter === 9 && !win){
            document.getElementsByClassName("wrapper")[0].classList.add('dspNone');
            modal.classList.remove("dspNone");
            document.getElementsByClassName("draw")[0].classList.remove("dspNone");

            textResult.innerHTML = "This is a draw! "
            playAgain();
        }

        if(win){
            document.getElementsByClassName("wrapper")[0].classList.add('dspNone');
            modal.classList.remove("dspNone");
            if(arr[btnNameValue].id === 1){
                document.getElementsByClassName("femaleRes")[0].classList.remove("dspNone");
            }
            if(arr[btnNameValue].id === 2){
                document.getElementsByClassName("maleRes")[0].classList.remove("dspNone");
            }
            playAgain();

        }


})

//////////////////////////////////////////////////////
let win = false;

function checkLineX(a) {
    if (arr[0].id === a && arr[1].id === a && arr[2].id === a ||
        arr[3].id === a && arr[4].id === a && arr[5].id === a || arr[6].id === a && arr[7].id === a && arr[8].id === a) {
        win = true;
    }
}

function checkLineY(b) {
    if (arr[0].id === b && arr[3].id === b && arr[6].id === b ||
        arr[1].id === b && arr[4].id === b && arr[7].id === b || arr[2].id === b && arr[5].id === b && arr[8].id === b) {
        win = true;
    }
}

function checkLineZ(c) {
    if (arr[0].id === c && arr[4].id === c && arr[8].id === c || arr[2].id === c && arr[4].id === c && arr[6].id === c) {
    win = true;
    }
}