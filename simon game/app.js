let gameSequ = [];
let userSequ = [];

let gameStart = false;
let level = 0;
let highestScore = 0;

let btns = ["green", "red", "yellow", "purple"];

document.addEventListener("keypress", function(){
    if(gameStart == false){
        console.log("game is started");
        gameStart = true;
        levelUp();
    }
});

function flashBtn(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    },280);
}
let h2 = document.querySelector("h2");
function levelUp(){
    userSequ = [];
    level++;
    h2.innerText = `level  ${level}`;

    let btnIndex = Math.floor(Math.random() * 4);
    let color = btns[btnIndex];
    let btn = document.querySelector(`.${color}`);
    gameSequ.push(color);
    console.log(gameSequ);
    flashBtn(btn);
}


function checkAns(idx){
    if(gameSequ[idx] === userSequ[idx]){
        if(gameSequ.length == userSequ.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        if(highestScore < level){
            highestScore = level;
        }
        let h3 = document.querySelector("h3");
        h3.innerText = `highest score ${highestScore}`;
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

//user inputs
function btnPress(){
    flashBtn(this);
    let color = this.getAttribute("id");
    userSequ.push(color);
    checkAns(userSequ.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    level = 0;
    gameStart = false;
    userSequ = [];
    gameSequ = [];
}

